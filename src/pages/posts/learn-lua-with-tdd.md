---
title: "Learn Lua With Tests"
date: "2026-05-17"

layout: ../../layouts/PostLayout.astro
description: "Today I started working on my first book, Learn Lua With Tests"

img_path : "/lua.png"
img_alt: "Lua logo"

tags: ["#Lua", "#Coding", "#Tech"]
---

> Today I started working on my first book, Learn Lua With Tests

[Lua](https://lua.org/) is such a great language. It is simple to understand but is capable of a lot.

I've [written about the most popular quirk of Lua](./lua) before and have been building projects with it instead of Python for over 2 years now.

Many other languages such as C#, Go have excellent resources about TDD in that language. Lua is lacking of a similar resource.

# Why write a book about it?

When I first started diving deep into Lua, I noticed a massive gap in the ecosystem. There are plenty of guides that teach you how to write tables or write loops, but almost nothing that teaches you how to write 'production ready' Lua from day one.

With the nature of the language, it is often picked up by people with non technical backgrounds. Unit testing may be a bit too difficult for beginners or non-programmers. I have my hopes up, though!

# What we are building

Over the course of the book, we will cover:

* **The Foundations of TDD:** Understanding the `Red-Green-Refactor` cycle using Lua's straightforward syntax.
* **Internals of Check Your Lua:** [Check Your Lua](https://github.com/sieep-coding/check-your-lua) is a unit testing framework for Lua made by me. Learn the process of `Describe It -> Check It -> Refactor It`
* **Testing the Quirks:** Mastering tables, metatables, and object-oriented patterns in Lua through strict unit tests.
* **Building Real Tools:** Rolling up our sleeves to understand how real software is built.

Stay tuned for updates as I draft the chapters. 

The code will be open-sourced on my [Github.](https://github.com/sieep-coding/)

# Learning Lua through test driven development

- Explore Lua and different unit testing libraries.

- Get started with TDD. Lua is excellent for unit testing due to its simplicity.

- Leave confident that you can build software in Lua with minimal bugs.

---

That is the core philosophy behind this project. Writing tests shouldn't be a chore you tack on at the end of a project. It should be the roadmap that guides how you write code from the very first line.

I will be posting updates here as the book progresses.