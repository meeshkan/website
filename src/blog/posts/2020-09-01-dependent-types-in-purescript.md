---
title: Types and properties in PureScript
description: You've built a great GraphQL API. Now it's time to give it rock-solid reliability!
date: 2020-08-17
authors: ["mike"]
published: true
slug: improve-graphql-api
tags:
  - testing
  - apis
  - graphql
---

Type safety is great. It prevents you from doing things like this:

```purescript
add :: Int -> Int -> Int
add a b = a + b

result = add 1 "d'oh" -- d'oh!
```

At a certain point though, you'll want to do something like this:

```purescript
add :: PositiveInt -> PositiveInt -> PositiveInt
add x y = x + y
```

For example, you may be working with numbers that must be positive according to one's business logic. Timestamps, balances and ages are all examples of numbers that are generally positive.

One way to create a type like `PositiveInt` is using a new type that wraps `Int`:

```purescript
newtype Positive a = Positive a

add :: Positive Int -> Positive Int -> Positive Int
add (Positive x) (Positive y) = Positive (x + y)
```

While this is useful for documentation purposes, there is no way to verify that the integers you're receiving are _actually_ positive at compile time. Thankfully, PureScript gives us several tools that, when combined, allow us to make sure that integers are actually positive at _compile time_.

In the article below, I will build up our `PositiveInt` example above bit by bit, concluding with ways to attain even more powerful results. If your can encode your entire business logic with more refined types, you can count on the compiler to verify that:

1. Your code does what it says it does (ie only accepts an integer greater than 0).
1. The compiler verifies if changes in business logic require changes to the code.

There are several terms used for these technique (refinements, dependent types, type-level programming), all of which mean subtly different things. Here, my main goal is not to define the terms but rather to give you intuition about how to think along these lines.

The most important outcome we're aiming for is to _use types that reflect the properties of our business logic_. When used this way, the compiler becomes a property-based test runner. We've written a fair bit about [property-based tests]() on this blog, showing how they can go from 1 to 1,000 test cases in seconds. Ascribing properties to types allow you to go from 1,000 to ∞ test cases with a bit more elbow grease.

> This article is heavily indebted to articles by [CT Wu](https://blog.wuct.me/fun-with-typed-type-level-programming-in-purescript-5f8af42cfec5?_branch_match_id=825970897746405768&gi=159ce656eb66) and [Stephen Bly](https://medium.com/@stephenebly/an-introduction-to-existential-types-25c130ba61a4#:~:text=Existential%20types%20allow%20us%20to,in%20terms%20of%20other%20types.) as well as discussions with the PureScript community regarding [Leibniz equality](https://pursuit.purescript.org/packages/purescript-leibniz/5.0.0/docs/Data.Leibniz). Thank you!

## Representing a rational number using types

This article focuses heavily on practical applications and is pretty light on theory. That said, when we run into a theoretical concept, I will always:

1. Give a hand-wavy explanation of what the concept is.
1. Provide a link with a more rigorous explanation.

First, let's create some kinds!

```purescript
foreign import kind Rational

foreign import kind PInt

foreign import kind NInt

foreign import kind Boolean
```
