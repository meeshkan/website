---
title: Stateful property-based testing with QuickCheck State Machine
description: A gentle introduction to quickcheck-state-machine, a Haskell library for testing stateful programs.
date: 2020-04-13
authors: ["mike"]
tags:
  - testing
  - tutorial
  - advanced
  - haskell
---

Property-based testing is a technique where you make assertions about a system's output with respect to its input. For example, if the input to a system (a function, a server, etc) is two numbers, property-based testing could assert that the output of the system should be the sum of these numbers. This type of testing frees you from having to come up with input data. Instead, you define relationships between the system's input and output. Then the test runner verifies that the relationships hold.

**Stateful property-based testing (SPBT)** is another technique for when the tested system retains a state. This is the case, for example, when the system is a database or a queue or a file.  If I write an entry to a database and then list all entries in the database, I would expect the entry I wrote to be part of the list. That is a *stateful* property of the database.

There are libraries available in several different languages for SPBT. In this article, I will use [`quickcheck-state-machine`](https://github.com/advancedtelematic/quickcheck-state-machine). I like `quickcheck-state-machine` for many reasons:

1. It is written in Haskell, which means you get access to Haskell's type safety and fast performance.
1. Its opinionated structure splits SPBT into component parts, which helped my learning process.
1. It builds a state machine, which can be manipulated outside of the test. `quickcheck-state-machine`'s function `prettyCommands` uses the state machine, for example, to make really nice logs after the test is run.
1. Fine-grained control of [generation](https://hackage.haskell.org/package/QuickCheck-2.14/docs/Test-QuickCheck.html#g:8) and [shrinking](https://hackage.haskell.org/package/QuickCheck-2.14/docs/Test-QuickCheck.html#g:6) is possible. This allows you to do more targeted testing.
1. Its use of the [higher-kinded types (HKTs)](https://www.stephanboyer.com/post/115/higher-rank-and-higher-kinded-types) `Symbolic` and `Concrete`. It allows you to extract commands from a state machine using the `Symbolic` HKT and then run it using the `Concrete` HKT. 
1. It can test the parallel execution pf commands to find bugs arising from race conditions.

This article shows how to use `quickcheck-state-machine` to build a state machine and use it for SPBT. It uses version `0.7.0` of `quickcheck-state-machine`. The system under test will be a [FIFO queue](https://en.wikipedia.org/wiki/Queue_(abstract_data_type)) of integers that uses the file system to store entries.

As the `quickcheck-state-machine` library is under active development, the API is subject to change. I will do my best to revise this article as the API changes.

## Model, Command, Response

The fundamental building blocks of a state machine built with `quickcheck-state-machine` come in three types. One represents a model of the system, one represents the commands that can be issued to the system and one represents responses to the commands. 

All three need to be polymorphic in accepting an HKT with the signature `(Type -> Type)`, which I'll call `r`. This polymorphism will never be used directly. But it is used by `quickcheck-state-machine` internally to inject two different HKTs: `Symbolic` and `Concrete`. 

The `Symbolic` HKT is used by `quickcheck-state-machine` when generating a series of commands from a state machine. In contrast, the `Concrete` HKT is used when the state machine is executing. In models that can be created in pure contexts like the one below, this distinction is not useful. But when models use types that only exist in monadic contexts, the distinction is important.

```haskell
data Model (r :: Type -> Type) = Model [Int] deriving (Show, Eq, Generic)
deriving anyclass instance ToExpr (Model Concrete)

data Command (r :: Type -> Type)
  = Push Int
  | Pop
  | AskLength
  deriving stock (Eq, Show, Generic1)
  deriving anyclass (Rank2.Functor, Rank2.Foldable, Rank2.Traversable, CommandNames)

data Response (r :: Type -> Type)
  = Pushed
  | Popped (Maybe Int)
  | TellLength Int
  deriving stock (Show, Generic1)
  deriving anyclass (Rank2.Foldable)
```

Let's unpack what's going on here. The `Model` is an array of integers that we'll use to simulate a FIFO queue. There are three `Command`s - you can `Push` an integer onto the queue, `Pop` something off of the queue (either nothing or an integer), and `AskLength` to the queue. The `Response`s to these three commands are confirming that a value has been `Pushed`, telling us the integer that has been `Popped` and `TellLength`.

It is not necessary to have a one-to-one correspondance between commands and responses. Haskell's pattern matching will allow us to define the function for any valid command/response pair.

The calls to `deriving` are not necessary for now, but they become necessary when the state machine is used in a property-based test. For example, `ToExpr` and `Generic` allow for pretty printing to the console, and `Rank2.Traversable` allows the commands to be iterated over. I found this to be the trickiest part of the `quickcheck-state-machine` API, as there is currently no way to know this aside from reading the tests. My recommendation would be to copy-and-paste the language extensions and `deriving` clauses from the [finished tutorial's GitHub page](https://github.com/meeshkan/quickcheck-state-machine-example) when building your own state machine.

## Defining my queue

Here is a FIFO queue for integers that reads and writes the queue to the file system. Each integer is separated by a colon:

```haskell
pushToQueue :: String -> Int -> IO ()
pushToQueue fname x = do
    fe <- doesFileExist fname
    if (not fe) then do
            withFile fname WriteMode $ \handle -> hPutStr handle $ show x -- write the number
        else do
            txt <- withFile fname ReadMode $ \handle -> hGetLine handle
            let split = splitOn ":" txt
            -- append the number to the beginning of the string
            withFile fname WriteMode $ \handle -> hPutStr handle $ intercalate ":" (show x : split)

popFromQueue :: String -> IO (Maybe Int)
popFromQueue fname = do
    fe <- doesFileExist fname
    if (not fe) then return $ Nothing else do
        txt <- withFile fname ReadMode $ \handle -> hGetLine handle
        let split = splitOn ":" txt
        if (length split == 1) then
                -- remove the file if queue is empty
                removeFile fname
            else
                -- remove the last element
                withFile fname WriteMode $ \handle -> hPutStr handle $ intercalate ":" $ init split
        return $ if null split then Nothing else Just (read (last split) :: Int)

lengthQueue :: String -> IO Int
lengthQueue fname = do
    fe <- doesFileExist fname
    if (not fe) then return 0 else do
        txt <- withFile fname ReadMode $ \handle -> hGetLine handle
        let split = splitOn ":" txt
        return $ length split
```

## Initializing the model

The first step in creating my state machine is to initialize the model. The initializer function needs to be polymorphic as it will eventually accept the `Symbolic` and `Concrete` HKTs depending on if you are in generation or execution mode.  In this case, as I am using an array as the underlying model, the logical initializer is an empty array.

```haskell
initModel :: Model r
initModel = Model []
```

## Transitions

The next thing I need to do for my state machine is to create transitions.  The transitions are used to both generate commands and execute the tests, so the function needs to remain polymorphic.

The transition function takes a model, a command, and a response. It then returns the underlying model after the command has been applied. We can think of the model as transitioning from one state to the next.

In the implementation below, I make my own FIFO queue with `Pop` and `Push`. Then `AskLength` will return the length of the model:

```haskell
transition :: Model r -> Command r -> Response r -> Model r
transition (Model m) (Push x) Pushed = Model (x : m)
transition (Model m) Pop (Popped _) = Model (if null m then m else init m)
transition m AskLength (TellLength _) = m
```

## Preconditions

Preconditions are guards that apply to certain commands based on the current state. `Top` represents the precondition always being satisfied.  `Bot` is the opposite, the precondition is never satisfied. The `Logic` type contains various boolean operators that can be applied to the model and command. The outcome of the operator determines if the precondition is satisfied or not.

Because the pre-condition is only used when generating lists of programs, it doesn't need to use concrete values. So it doesn't need to be polymorphic and exists only for the `Symbolic` HKT.

In this model, every command can be executed irrespective of the state. So I return `Top`:

```haskell
precondition :: Model Symbolic -> Command Symbolic -> Logic
precondition _ _ = Top
```

## Postconditions

Postconditions are where the correctness of the response is asserted. I like this API because it provides a one-stop-shop for all assertions. In other SPBT libraries, it is easy to litter assertions all over the place, which makes the code more difficult to read.  In `quickcheck-state-machine`, the only checks for correct behavior are in the postconditions.

Postconditions only are checked when the state machine is actually running. This means they only exist in the `Concrete` HKT.

Note that the model passed to the postcondition function is the one **before** the command executes. It is often useful to apply the transition to the model when evaluating the response, as I do below:


```haskell
postcondition :: Model Concrete -> Command Concrete -> Response Concrete -> Logic
-- after a push, assert the pushed element is at the head of the new model
postcondition mod cmd@(Push x) resp = x .== head m'
  where Model m' = transition mod cmd resp
-- after a pop, assert that the popped element is at the end of the old model 
postcondition (Model m) Pop (Popped x) = x .== if null m then Nothing else Just $ last m
-- the length of the model and the length of the SUT should always be aligned
postcondition (Model m) AskLength (TellLength x) = length m .== x
```

## Invariants

Invariants take a model and assert that the model is always in a certain state, irrespective of the command and response. Invariants also run after every step in the state machine, which makes them expensive to run. Because of this, `quickcheck-state-machine` uses a `Maybe` to allow for no invariants to be returned. 

As there is no invariant behavior I want to see in this model, I can return `Nothing`:

```haskell
invariant = Nothing
```

## Generator

The generator is one of the places that `quickcheck-state-machine` really shines. You create generators using `QuickCheck` combinators, so any existing `QuickCheck` custom combinators can be repurposed for `quickcheck-state-machine`.  

Here, I use the `oneof` combinator, which generates commands with a uniform distribution.  Because I am in the command generation phase, the `Symbolic` HKT is used:

```haskell
generator :: Model Symbolic -> Maybe (Gen (Command Symbolic))
generator _ = Just $ oneof [(pure Pop), (Push <$> arbitrary), (pure AskLength)]
```

## Shrinker

Like in `QuickCheck`, the shrinker takes a value and returns an array of new values to test. Most `QuickCheck` programs never use the shrinker directly, but here, I use it to specify what does and doesn't need to be shrunk. This allows the generation to move fast through values that have no logical relationship.  

For example, below, I only apply the shrinker to numbers pushed onto the stack, as I want to test if the size of the numbers matters.  In all other places, there is no shrinker used:

```haskell
shrinker :: Model Symbolic -> Command Symbolic -> [Command Symbolic]
shrinker _ (Push x) = [ Push x' | x' <- shrink x ]
shrinker _ _  = []
```

## Semantics

Semantics take a command using the `Concrete` HKT, which signifies that it is used only when the tests are actually executing, and returns the result of the execution in the monadic context (here `IO`).

```haskell
semantics :: String -> Command Concrete -> IO (Response Concrete)
semantics fname (Push x) = do
    pushToQueue fname x
    return Pushed
semantics fname Pop = do
    val <- popFromQueue fname
    return $ Popped val
semantics fname AskLength = do
    val <- lengthQueue fname
    return $ TellLength val
```

## Mock

The purpose of Mock is to generate dummy responses when the state machine is in command generation mode (thus the `Symbolic` HKT). It is the foil to [Semantics](#semantics), which creates `Concrete` responses from real commands during text execution mode. The content of the mock responses is thrown away, as all the library uses `mock` for is to create a `Response` used to effectuate a transition between states.  

One nice thing about `mock` is that, if you want to, you can create a full-fledged mock of your model, and this can be useful if you'd like to use SPBT to generate `(Comamnd Response)` pairs that can be used to induce a spec of the model (ie to induce a JSON schema or an OpenAPI spec).

```haskell
mock :: Model Symbolic -> Command Symbolic -> GenSym (Response Symbolic)
mock _ (Push _) = pure Pushed
mock _ Pop = pure $ Popped Nothing
mock _ AskLength = pure $ TellLength 0
```

## Cleanup

Cleanup, like the semantics, exists within the monad in which the system is executing, and it is called after each series of commands is executed.  As I don't need any cleanup for my queue, I can just write an empty function in the `IO` monadic context.

```
cleanup :: model Concrete -> IO ()
cleanup _ = return ()
```

## Building the state machine

Now that I have all of the ingredients, I can build my state machine. Because the system under test takes one argument, I also pass that argument to the state machine.

```haskell
sm :: String -> StateMachine Model Command IO Response
sm s = StateMachine initModel transition precondition postcondition
      invariant generator shrinker (semantics s) mock cleanup
```

## Testing

Now for the fun part, let's run my tests!

First, I  want each test to execute in its own FIFO queue, which means a different file for each queue. I chose the pcg unique random number generator to accomplish this, which guarantees each number generated will be unique during the run of a program.

```haskell
newRand :: IO Int
newRand = do
  g <- create
  i <- uniform g
  return i
```

Then, I define the property. `forAllCommands` uses a state machine to generate the commands (this is a state machine that will only run for the `Symbolic` HKT, not the `Concrete` HKT, so it won't ever touch `IO`) as well as an lower bound for the number of commands in a sequence. We use `Nothing` for the lower bound, meaning no lower bound. The last argument to `forAllCommands` is a function that accepts a sequence of commands and returns a monadic property. Monadic properties are defined in `QuickCheck.Monadic` and can be used whenever a property exists in a monadic context.  The conventience method `monadicIO` can be used to define properties in the `IO` context, and `run` lifts the result of the monadic execution to the `PropertyM` context, which is `QuickCheck`'s type for a monadic property.  So, the sequence below is:

1. We create a new random number and lift it to the `PropertyM` monadic context.
1. We create a file name using this number.
1. We create a state machine using this filename.
1. We call `runCommands` from `quickcheck-state-machine`, which already executes in the `PropertyM` context, so there is no need to prefix it with `run`.
1. We use `quickcheck-state-machine`'s pretty printer `prettyCommands` on the histogram generated by run result.

```haskell

state_machine_properties :: Property
state_machine_properties = forAllCommands (sm "") Nothing $ \cmds -> monadicIO $ do
  id <- run newRand
  let fname = "queues/queue" <> (show id) <> ".txt"
  let sm' = sm fname
  (hist, _model, res) <- runCommands sm' cmds
  prettyCommands sm' hist (checkCommandNames cmds (res === Ok))
```

Lastly, I execute the test, creating the `queues` directory if it does not exist yet.

```haskell
main :: IO ()
main = do
    createDirectoryIfMissing False "queues"
    quickCheck state_machine_properties
```

When I run `stack test` from the command line, I see the following.

```bash
quickcheck-state-machine-tutorial> test (suite: quickcheck-state-machine-tutorial-test)

+++ OK, passed 100 tests.

Commands (264 in total):
33.7% Pop
33.7% Push
32.6% AskLength

quickcheck-state-machine-tutorial> Test suite quickcheck-state-machine-tutorial-test passed
Completed 2 action(s).
```

And voila! Our tests pass.

## GitHub repo

All of this is on the github repo ['meeshkan/quickcheck-state-machine-tutorial'](https://github.com/meeshkan/quickcheck-state-machine-tutorial).

## Follow up exercises

Here are three follow up exercises you can do to test out your QuickCheck-fu!

### Novice

Let's create a bug in the queue! In the implementation of the FIFO queue, instead of adding the number to the head via `show x : split`, add it to the tail using `split ++ [show x]`. See if it's caught.

### Intermediate

Now create a new bug where the queue stops accepting new values once there are 50 values. You can do this in the `pushToQueue` function. If you run the tests as-is, you won't find it.  There are two ways you can find the bug (you'll need to do a combination of both):
- Increase the number of times [QuickCheck](https://hackage.haskell.org/package/QuickCheck-2.14) runs
- Change the generator so that the frequency of push is greater than the frequency of pop. For inspiration, check out [QuickCheck generator combinators](https://hackage.haskell.org/package/QuickCheck-2.13.2/docs/Test-QuickCheck.html#g:9) and see if there is one that allows certain outcomes to happen with greater frequency than others.
- Change the lower bound in `forAllCommands` from `Nothing` to something a bit higher.

Note that this may take a long time to run depending on your parameters because of the shrinker. The shrinker will try to find a specific range of values to produce the bug, but because the bug is not linked to the specific value, it will not be able to meaningfully shrink.

For example, here is an excerpt of console output that would happen if you are able to provoke the bug. Here, I see that the postcondition for `AskLength` failed at the barrier of 50 results in the queue, and because I used those `deriving` statements before, I get the best pretty-printing for property-based testing I've ever seen!

```bash
Model [+0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0]

   == AskLength ==> TellLength 50 [ 0 ]

Model [0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0
      ,0]

PostconditionFailed "PredicateC (51 :/= 50)" /= Ok
```

### Advanced

In the implementation of the queue, I use the funtion [`withFile`](https://hackage.haskell.org/package/base-4.12.0.0/docs/System-IO.html#g:5) for all file-based IO. Haskell also has the functions [`writeFile`](https://hackage.haskell.org/package/base-4.12.0.0/docs/System-IO.html#g:7) and [`readFile`](https://hackage.haskell.org/package/base-4.12.0.0/docs/System-IO.html#g:7). Try using these instead and you'll hit a nasty bug! Can you anticipate what the bug will be? Once you run into the bug, was your guess right? How does this bug show the difference between `withFile` vs `writeFile` and `readFile`?
