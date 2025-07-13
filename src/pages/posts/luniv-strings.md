---
title: "'Utility First' Thinking in JavaScript"
date: "2025-07-13"

layout: ../../layouts/PostLayout.astro
description: "Designing a minimalist, fast, and testable JavaScript library for string and numeric utilities."

img_path: "/luniv-strings.png"
img_alt: "Stylized JS logo with 'Utility First' text"

tags: ["#JavaScript", "#Coding", "#Utilities", "#LunivStrings"]
---
## [PERMALINK](https://sieep-coding.github.io/posts/luniv-strings#Utility_First_Thinking_in_JavaScript)

# Utility First Thinking in JavaScript

There are certain tasks you complete with JavaScript repeatedly when working on enterprise systems. A lot of times, building your own library can be beneficial—it gives you improved control over your code.

In this blog post, I'll breakdown some code of my [new string library (under development)](https://github.com/Sieep-Coding/luniv-strings/tree/main) and how it contributes to a utility-first approach in JavaScript that seems to have been lost in the age of frameworks.

---

### Why Build Your Own?

> Why write yet another utility library?

I'm curious about about the internal workings of JavaScript--primarily to improve at my day job. 

I've always been interested in library development, so I figured a good place to start would be a JavaScript string library. 

I think this library is performant, offers a lot of educational value through its creation, and is unit tested.

---

### Small, Explicit, Fast

Here is an overview of my library:
- **Minimal footprint** – no unnecessary abstractions.
- **Tested behavior** – predictable across edge cases.
- **Understandable code** – clear even for beginners, well-documented in-code.
- **Reusable patterns** – suited for larger apps and libraries.

> If you've ever written `typeof x === 'string' || x instanceof String`, you’ve already felt the pain Luniv Strings aims to solve.

---

### Design and Implementation

Let's go over two different use cases of my library. I decide to tackle the easy methods first.

## isString(value)

The purpose of `isString` is simple:

Check if any value is a string. This is a nice piece of code that can be added to forms as an extra layer of validation around user input, for example.

Below is the implentation:

```js
export default function isString(value) {
  return typeof value === 'string' || value instanceof String;
}
```
We use `instanceof` to return a boolean.

[Check out the unit tests.](https://github.com/Sieep-Coding/luniv-strings/blob/main/packages/isString/test/main.js)

## isNumeric(value)

`isNumeric` has a human approach to solving if a value is a number or not.

The function was the most fun to write so far, as it has a variety of checks.

Below is the implementation:

```js
export default function isNumeric(value) {
  
  if (value === null || value === undefined) {
    return false;
  }

  if (typeof value === 'number') {
    return isFinite(value);
  }

  if (typeof value === 'string' && value.trim() !== '') {
    const num = Number(value);
    return !isNaN(num) && isFinite(num);
  }

  return false;
}
```
We include a check for strings in the last `if` block.

This is a human way of evaluating a value: just because it is a string does not mean the value has to be non-numeric.

[Check out the unit tests.](https://github.com/Sieep-Coding/luniv-strings/blob/main/packages/isNumeric/test/main.js)

## Conclusion

Overall, my first attempt to develop a library has been fun. I even started a [document website](https://sieep-coding.github.io/luniv-strings/) to help beginners. It has been a blast!

Thanks for reading.

Writtten by [Nick](https://www.linkedin.com/in/nick-s-694241139/)