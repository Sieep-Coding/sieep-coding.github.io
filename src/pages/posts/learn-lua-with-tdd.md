---
title: "Learn Lua With Tests"
date: "2026-05-17"
layout: ../../layouts/PostLayout.astro
description: "Today I started working on my first book, Learn Lua With Tests"
img_path : "/lua.png"
img_alt: "Lua logo"
tags: ["#Coding", "#Tech"]
---
> Today I started working on my first book, Learn Lua With Tests
>
> [See live updates!](https://learn-lua-with-tests.vercel.app/)

[Lua](https://lua.org/) is such a great language. Simple to understand but capable of a lot.

I've [written about the most popular quirk of Lua](./lua) before and have been building projects with it instead of Python for over 2 years now.

Many other languages such as C#, Go have excellent resources about TDD in that language. Lua is lacking of a similar resource.

I wanted to create a new way of writing Lua. Since I am opinionated as hell, I also created a [unit testing library](https://github.com/sieep-coding/check-your-lua) to go along with the [book.](https://learn-lua-with-tests.vercel.app/)

# Why write a book about it?

When I first started diving deep into Lua, I noticed a massive gap in the ecosystem. There are plenty of guides that teach you how to write tables or write loops, but almost nothing that teaches you how to write 'production ready' Lua from day one.

With the nature of the language, it is often picked up by people with non technical backgrounds. Unit testing may be a bit too difficult for beginners or non-programmers. I have my hopes up, though!

# What we are building

Over the course of the book, we will cover:

* **The Foundations of TDD:** Understanding the `Red-Green-Refactor` cycle using Lua's straightforward syntax.
* **Internals of 'Check Your Lua':** [Check Your Lua](https://github.com/sieep-coding/check-your-lua) is a unit testing framework for Lua made by me. Learn the process of `Describe It -> Check It -> Refactor It`. I will also cover `LuaUnit`, the most popular and XUnit-derived library for unit testing in Lua.
* **Testing the Quirks:** Mastering tables, metatables, and object-oriented patterns in Lua through strict unit tests.
* **Building Real Tools:** Rolling up our sleeves to understand how real software is built.

Stay tuned for updates as I draft the chapters.

The code will be open-sourced on my [Github.](https://github.com/sieep-coding/)

# Learning Lua through test driven development

- Explore Lua and different unit testing libraries.
- Get started with TDD. Lua is excellent for unit testing due to its simplicity.
- Leave confident that you can build software in Lua with minimal bugs.

---

That is the core philosophy behind this project. Writing tests shouldn't be a chore you tack on at the end. It should be the roadmap that guides you.

# A sneak peek

Run setup or teardown logic before and after every `it` block within the current scope.

```lua
describe("database suite", function()
  local db
  cyl.before(function() db = connect_db() end)
  cyl.after(function() db:close() end)

  it("queries records", function() expect.exist(db) end)
end)
```

#### Skipping Tests
Pass `false` as the third argument to `it()` to skip execution temporarily.

```lua
it("wip feature", function()
  expect.equal(1, 2)
end, false)
```

The `Red-Green-Refactor` loop in Lua feels natural because the language gets out of your way. Write the test, watch it fail, make it pass, clean it up.

# What makes Lua different

Lua is not like most languages you have tested in before. A few things to be aware of:

| Lua Quirk | What it means for testing |
|---|---|
| Tables are everything | You will write a lot of table assertion helpers |
| 1-based indexing | Off-by-one errors are more common than you think |
| No classes, just metatables | OOP patterns need explicit testing |
| `nil` is falsy, `false` is falsy | Easy to write bad assertions without knowing it |
| Global by default | `local` discipline is something TDD will force on you |

These quirks are not problems. They are just things you need to understand before you can test around them confidently. The book covers all of them.

# The testing libraries

There are two libraries covered in the book:

**[Check Your Lua](https://github.com/sieep-coding/check-your-lua)** - my own library. Built around the `Describe It -> Check It -> Refactor It` pattern. Lightweight and opinionated. If you are starting fresh, this is the one I recommend.

**LuaUnit** - the most widely used Lua testing library. XUnit-style, battle tested, and you will likely encounter it in existing codebases. Knowing both is worth your time.

---

I will be posting updates here as the book progresses.

[See live updates here.](https://learn-lua-with-tests.vercel.app/)