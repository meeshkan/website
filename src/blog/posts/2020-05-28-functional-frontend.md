---
title: Functional on the frontend with `fp-ts`
description: How and why our team integrated the fp-ts library into our web application codebase.
slug: frontend-fpts-part-1
date: 2020-05-28
authors: ["carolyn"]
published: true
tags:
  - functional
  - typescript
  - react
  - webdev
---

> This article is based on an internal presentation done by [Mike Solomon](https://dev.to/mikesol), who will be further referred to as "my boss."

As a team, we recently decided to integrate functional programming practices into the codebase for our [web application](https://app.meeshkan.com/). More specifically, we're using [`fp-ts`](https://github.com/gcanti/fp-ts), a library for typed functional programming in TypeScript. 

This article explains why we chose `fp-ts` and walks through a practical example using the `pipe` function.

## In this article:
- [Why we're going functional](#why-we-re-going-functional)
- [Working with our existing React codebase](working-with-our-existing-react-codebase)
- [Putting it into practice with `pipe`](#putting-it-into-practice-with-pipe)
- [More with `fp-ts`](#more-with-fp-ts)

## Why we're going functional

Because my boss likes Haskell 🤷‍♀️

I'm joking (mostly). My boss does have an affinity for functional programming and he's more proficient and comfortable in this type of workflow. But we've realized that, while the learning curve is steep for those of us only familiar with JavaScript, adopting functional programming practices has improved our web application for a variety reasons. 

_Productivity_
* **Descriptive errors** - When we see logs in the console, it's rarely `undefined` or `null`. This helps for more efficient debugging.
* **Less code** - Functional programming takes care of many patterns that would be boilerplate.
* **Limited options** - With functional programming, you can only do things a certain number of ways.
* **Better logging** - When you insert a log statement, you know exactly where it is happening in the flow.

_Correctness_
* **Type safety** - When you use a typed variable, you're defining a constraint on all possible values. This helps ensure that the inputs and outputs of our code work as expected.
* **Avoid common errors** - Some of the most common JavaScript errors are erradicated when using functional programming. For example, the `0` element of an array being `undefined`.
* **Error routing** - With functional programming, errors become first class citizens and errors aren't coming from anywhere surprising.
* **Linear ordering** - No more jumping between `if` this `else` that or getting stuck in an infinitely nested JavaScript `try`/`catch` block.

### Why we chose the `fp-ts` library

In theory, we could've switched out `fp-ts` for another functional programming library for TypeScript like [Purify](https://gigobyte.github.io/purify/). Both libraries have an `Either` class, a `chain` function and would get the job done. However, `fp-ts` has a couple of unique patterns that we use regularly like [`Reader`](https://gcanti.github.io/fp-ts/modules/Reader.ts.html).

If there were terms in that last paragraph that you didn't understand, don't worry! We'll cover those in a [future post](#more-with-fp-ts).

## Working with our existing React codebase

Fortunately for us, the codebase we're working with is still fairly new. The repository was created a little over one month ago. However, the initial setup of the application was done by two frontend developers (myself included), neither of which have any functional programming experience. Turns out though, we were already applying functional programming principles to our React application. 

Some examples:
* [**Hooks**](https://reactjs.org/docs/hooks-intro.html) as a functional way to manage state dependencies.
* [**Function components**](https://reactjs.org/docs/components-and-props.html#function-and-class-components) instead of `class` components.
* [**Arrow function expressions**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) whenever possible, which enforces a necessary flow.

But taking that next step into the functional programming world was wildly different than we could've imagined. So, to make it more tangible, the rest of this article will focus on one specific function from the `fp-ts` library: `pipe`.

## Putting it into practice with `pipe`

The concept of piping goes well beyond the `fp-ts` library. According to [The Linux Information Project](http://www.linfo.org/pipes.html), piping is defined as:

> A form of redirection that is used to send the output of one program to another program for further processing.

Sounds intense and a bit abstract. Let's break it down.

When it comes to our web application, `pipe` is a function from the `fp-ts` library. It takes an initial value and then passes that as the argument(s) for the following function to use. Then it takes the result from that function and passes it to _another_ function. And so on, potentially forever 🤪

Maybe it's better to explain with code. 

Here's an example of piping written in vanilla JavaScript:

```javascript
const examplePipe = (a, b, c) => c(b(a));
```

This `examplePipe` function takes in three parameters (`a`, `b`, and `c`). For `examplePipe` to work as expected, `a` should be an independent value, meaning that it doesn't have any dependencies or relies on anything else. Then `b` should be a function that takes `a` as an argument. Finally, `c` should be another function that takes the result of `b` as an argument.

Let's put in some arguments:

```javascript
examplePipe(1, (x) => x+1, (x) => x+5)
```

First, it takes an independent value: `1`. 

Then, `1` is passed to the next function: `(x) => x+1`. So because `x` is equal to `1`, the result is `2`.

Finally, this result (`2`) is passed to the last function: `(x) => x+5`. Because `x` is now equal to `2`, the `examplePipe` will return `7`.

And there you have it, our first pipe 🎉

This was generic example of piping. Next, we'll go step-by-step to see how this would work in a web application. Throughout, we'll use the [`pipe`](https://gcanti.github.io/fp-ts/modules/pipeable.ts.html) function that's available through the `fp-ts` library.  

### Defining the values without dependecies

The first thing that goes into the `pipe` is everything we need for the following functions. As mentioned in the previous section, these values need to be independent. It can be a single value or an object. 

This is common practice in functional programming. Instead of defining variables along the way, everything you need is defined at the start. "Priming the pipe" so to speak.

To show why this is useful, let's look at an actual example from our web application. In our `pipe` functions, we regularly define hooks. 

Alternatively, if you use `const` to define variables like so:

```javascript
const useColorMode = useColorMode()
const useDisclosure = useDisclosure()
```

Then `useDisclosure` will always be executed _after_ `useColorMode` because JavaScript code executes in order.

When you create an object within `pipe`, it doesn't give any guarantees about the order of execution. This is because JavaScript doesn't indicate which values of an object that it creates first. So it removes the possibility of bugs happening because variables need to be in a certain order. Or other scenarios where variables being in a certain order causes unexplainable magic.

What's also nice about putting these values first is that it distinguishes what is independent in your function. So you know, no matter what, these values don't depend on anything else. This can help with debugging and code readability.

Now that logistics are out of the way, let's start creating an example. We're going to define an `exampleFunction` that doesn't have any parameters and returns a `pipe`. To start, `pipe` contains an object with three values: `projects` (independent `getProjects` function), `users` array, and `configuration` object. 

It should look like this:

```javascript
const getProjects = () => ([]);

const exampleFunction = () => pipe(
    {
        projects: getProjects(),
        users: [5],
        configuration: {}
    }
);
```

> This example assumes we have [`fp-ts` installed](https://github.com/gcanti/fp-ts#installation) and `pipe` imported.

### First function in the `pipe`

The next part of the `pipe` is our first function. In this function, we can pass the values defined in the first object as an argument. 

We do this in the following example with the `valuesFromObjectAbove` parameter:

```javascript
const getProjects = () => ([]);

const exampleFunction = () => pipe(
    {
        projects: getProjects(),
        users: [5],
        configuration: {}
    },
    (valuesFromObjectAbove) => ({
        // Coming soon!
    })
);
```

Here, `valuesFromObjectAbove` represents `projects`, `users`, and `configuration`.

We can then use `valuesFromObjectAbove` to create new values. In this example, we're creating arrays of `adminProjects` and `notAdminProjects` using the `projects` value we defined in the first object:

```javascript
const getProjects = () => ([]);

const exampleFunction = () => pipe(
    {
        projects: getProjects(),
        users: [5],
        configuration: {}
    },
    (valuesFromObjectAbove) => ({
        adminProjects: valuesFromObjectAbove.projects.filter(a => a.admin === true),
        notAdminProjects: valuesFromObjectAbove.projects.filter(a => a.admin === false)
    })
);
```

Now, we see more clearly this grouping of independent values first, dependent ones second. Reading through, we can deduce that `adminProjects` and `notAdminProjects`, by definition, depend on a value that was created earlier. This helps for debugging. For instance, if you insert a log statement after the first object, you know that your log will only contain the independent values in the function.

### Another round of functions

There are a few options available for what values are passed to our second function. 

One option is to use a [spread operator](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Spread_operator):

```typescript
const getProjects = () => ([]);

const exampleFunction = () => pipe(
    {
        projects: getProjects(),
        users: [5],
        configuration: {}
    },
    (valuesFromObjectAbove) => ({
        ...valuesFromObjectAbove, // Look here!
        adminProjects: valuesFromObjectAbove.projects.filter(a => a.admin === true),
        notAdminProjects: valuesFromObjectAbove.projects.filter(a => a.admin === false)
    }),
    (valuesFromFunctionAbove) => ({
        ...
    })
);
```

By using the spread operator, we're saying that we want to pass down everything. This means that `valuesFromFunctionAbove` contains all of the values from the first object (`projects`, `users`, `configuration` via `valuesFromObjectAbove`) and also the values from the second function (`adminProjects`, `notAdminProjects`). Bonus: It's all type safe!

But let's say we delete the spread operator:

```javascript
const getProjects = () => ([]);

const exampleFunction = () => pipe(
    {
        projects: getProjects(),
        users: [5],
        configuration: {}
    },
    (valuesFromObjectAbove) => ({
        // No spread operator
        adminProjects: valuesFromObjectAbove.projects.filter(a => a.admin === true),
        notAdminProjects: valuesFromObjectAbove.projects.filter(a => a.admin === false)
    }),
    (valuesFromFunctionAbove) => ({
        ...
    })
);
```

Now, the second function only has access to `adminProjects` and `notAdminProjects`.

That is the power of `pipe`. You always know what's ready to use 💥

If organized appropriately, `pipe` can contain everything that you would need to create your React component. So those `...` in the last two examples? That's where you could put in your JSX.

## More with `fp-ts`

This article only scratched the surface of what the `fp-ts` library can bring to a web application. There are many more functions and patterns that we use (`Either`, `chain`, `isLeft`, `isRight`, `Reader`). If you'd be interested in learning about these, [tweet at us](https://twitter.com/meeshkan) and let us know! 

In the meantime, check out the [`fp-ts` documentation](https://gcanti.github.io/fp-ts/).

