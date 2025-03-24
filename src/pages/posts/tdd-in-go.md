---
title: "Using TDD in Go: Gain Confidence Through Testing"
date: "2024-10-24"

layout: ../../layouts/PostLayout.astro
description: "Test Driven Development is a great way to write bulletproof & smart code that works the first time."

img_path : "/tdd.png"
img_alt: "Test-Driven Development graph."

tags: ["#Go", "#TDD", "#Coding", "#Tech"]
---
## Using TDD in Go: Gain Confidence Through Testing
When writing software, it is easy to make the mistake of not testing your code. 

You know that tests make your code more reliable and maintainable.

You just can't find the time! 

But you know unit tests, in specific, are important.

[Test-Driven Development (TDD)](https://en.wikipedia.org/wiki/Test-driven_development) in Go offers you a structured approach that circumvents this problem since you always write the test **first.**

# Clear Intent
Writing tests first may seem counterintuitive at first. In actuality, it creates **a clear understanding of the desired functionality.**

Consider the following code:

```go
package math

import "testing"

// Write the test first to achieve desired outcome.
func TestAdd(t *testing.T) {
    got := Add(2, 3)
    want := 5
    if got != want {
        t.Errorf("got %d, wanted %d", got, want)
    }
}

// Write the function with known result.
func Add(x, y int) int {
    return x + y
}
```
With this structure, the intent is clear from the testing what the desired function is.

> The *Add* function should return the sum of two integers. This is clearly shown in the test written.

# Control Over The Quality
**TDD** encourages developers to maintain control over the quality of their code.

By writing tests first, you are forced to think critically about your decision making, specifically around the functionality and behavior. 

This helps you from getting lost in the subtle implementation details.

Consider the following process:

```md
- Write a test for a specific behavior.
- Run the test to see it fail.
- Implement the code to make the test pass.
- Refactor for clarity and efficiency while keeping tests green.
```

# Run Anywhere
Go's testing framework is built into the language.

This allows Go to work easily on your local machine as well as a cloud environment.

You can run all your tests consistently by evoking:

```bash
go test ./...
```
# Best Practices
TDD encourages best practices and essentially forces you to write modular, smaller functions. This aligns well [with the philosophy of the Go language as a whole.](https://go.dev/doc/effective_go)

When your code is structured with testing in mind, it naturally leads to more maintainable projects. 

> You’re not just writing code; you’re crafting a well-defined contract that your implementation must adhere to.

# Conclusion
The testing framework in Go provides a refreshing approach to writing functions that emphasizes clarity and control. I commit to this development process to **streamline my workflow and make me a more productive programmer in the long run.** 

*Written By [Nick Stambaugh](https://www.linkedin.com/in/nick-s-694241139/)*

#### References:

For learning about TDD in Go, I highly recommend [this resource.](https://quii.gitbook.io/learn-go-with-tests)