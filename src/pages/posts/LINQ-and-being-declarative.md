---
title: "LINQ and Learning To Be Declarative"
date: "2025-04-20"

layout: ../../layouts/PostLayout.astro
description: "LINQ is familiar to those who know SQL, but can be jarring to C# newcomers."

img_path : "/declare.png"
img_alt: "C# logo with Declarative Programming text below the image"

tags: ["C#", "#Coding", "#Tech", "#LINQ"]
---

## [PERMALINK](https://sieep-coding.github.io/posts/LINQ-and-being-declarative#LINQ-and-Learning-To-Be-Declarative)

# LINQ and Learning To Be Declarative
If you're familiar with [functional programming](https://en.wikipedia.org/wiki/Functional_programming) concepts, you may enjoy the idea of declarative programming using [LINQ](https://en.wikipedia.org/wiki/Language_Integrated_Query) or **Language Integrated Query**. Querying data is a common solution to a lot of problems in business, but within itself we get a lot of different issues. What's the best way to query data? [SQL](https://en.wikipedia.org/wiki/SQL) is by far the weapon of choice for most developers. It's simple to pickup and is performant as long as your DBA has some sense of professionalism. 

After you learn the quirks of your specific _flavor_ of SQL, it's straightforward to solve the majority of problems you encounter. While LINQ and SQL both facilitate data querying, their use cases diverge. LINQ integrates directly into the host language and can operate over in-memory collections or data providers, whereas SQL remains for direct interaction with relational databases. SQL is still preferred for relational data problems and large-scale ETL. The question remains: What if you don't have access to SQL directly? Data is often stored in strange places, like an XML document or a random unstructured format.

As said by C# language designer [Eric Lippert](https://x.com/ericlippert):

> When querying a database, functional programming works extraordinarily well. LINQ is entirely based on the idea of constructing immutable query objects that can be turned into efficient database queries. - [Eric Lippert on his blog in 2016](https://ericlippert.com/2016/01/14/functional-style-follow-up/)

Functional programming isn't an afterthought in C#, it's effective and you should learn it if you haven't already. Being declarative is a legitimate style of programming here and can be used to your advantage to write incredibly concise one-liners that will make your code easier to read.

> [https://en.wikipedia.org/wiki/Functional_programming](https://en.wikipedia.org/wiki/Functional_programming)

> [https://en.wikipedia.org/wiki/Language_Integrated_Query](https://en.wikipedia.org/wiki/Language_Integrated_Query)

> [https://en.wikipedia.org/wiki/SQL](https://en.wikipedia.org/wiki/SQL)

> [https://x.com/ericlippert](https://x.com/ericlippert)

> [https://ericlippert.com/2016/01/14/functional-style-follow-up/](https://ericlippert.com/2016/01/14/functional-style-follow-up/)

### From Imperative to Declarative

#### The Business Problem

You're a **backend engineer** working in a C#/.NET stack at a prominent retailer for electronic products such as smartphones.

You are asked by a coworker to display a list of exclusive products on the website as they are going on sale soon.

LINQ makes solving this problem easier.

> LINQ enables you to write code that expresses the **intent**, not the **mechanism**.

Consider the following C# code that returns a list of `exclusive products`:

```csharp

List<Product> GetExclusiveProducts(List<Product> source)
{
  List<Product> res = new List<Product>();
  foreach (Product p in source)
  {
    if (p.ProductTitle == "iPhone")
    {
      res.Add(p);
    }
  }
  res.Sort(new ProductTypeComparer());
  return res;
}

class ProductTypeComparer : IComparer<Product>
{
  public int Compare(Product a, Product b)
  {
    return a.TypeOfPhone.CompareTo(b.TypeOfPhone);
  }
}
```
Great! We solved the problem, boss. Ship it!

Well, not quite. This is an example of how we can solve the problem but it is obviously verbose and uses too much [boilerplate](https://en.wikipedia.org/wiki/Boilerplate_code). I would expect a sharp junior who hasn't quite dived into language specifics to offer this approach. For this to work, we have to separate the logic into two different functions just to achieve a single result. This approach is less efficient in both runtime performance and memory allocation due to redundant data structures and lack of deferred execution. It will **waste memory** and you cannot use [`yield return`](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/yield) because of the sorting.

We can begin to pare this down a bit by introducing LINQ instead.

Consider the following LINQ code:

```csharp
List<Product> GetExclusiveProducts(List<Product> source)
{
  return from p in source
         where p.ProductTitle == "iPhone"
         orderby p.TypeOfPhone
         select p;
}
```

This is far more readable than the previous example. If you're even slightly familiar with SQL, this will feel right at home. C# allows you to write LINQ this way, as many SQL developers will have this exact mental model for solving problems. It is straightforward in the sense that we can read it and immediately tell what it's doing. We are selecting a product title of *iPhone* then sorting it by *TypeOfPhone* which could represent different versions of the iPhone.

> [https://en.wikipedia.org/wiki/Boilerplate_code](https://en.wikipedia.org/wiki/Boilerplate_code )

> [https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/yield](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/yield)

### But what if I told you we could make it simpler.
*Insert Morpheus*
![Morpheus](../photo/whatif.jpg "Morpheus")

The simplest way to write this would be to use [lambdas](https://en.wikipedia.org/wiki/Anonymous_function) within your LINQ. No, I'm not talking about Valve or your ability to hand-write differential calculus. In C#, we denote lambdas by using `=>`.

```csharp
List<Product> GetExclusiveProducts(List<Product> source)
{
  return source.Where(p => p.ProductTitle == "iPhone").OrderBy(p => p.TypeOfPhone);
}
```

What took us 21 lines of code initially has been pared down to 4, with a one-liner for the actual logic. This is by far the superior way to write sustainable, easy-to-read, and easy-to-scale code. Your coworkers and QA will thank you for learning LINQ and ditching the imperative methods that plague your Python brain.

> [https://en.wikipedia.org/wiki/Anonymous_function](https://en.wikipedia.org/wiki/Anonymous_function)

### Conclusion

In a lot of situations, SQL will still be your best friend. Reliable, quick to respond, and simple to understand.

Sometimes in business, simple is not the solution and you need to use other tools in your toolbox. LINQ offers a way to solve problems around querying data and by leveraging lambdas you can write the cleanest code on your team.

If you want to become an expert in LINQ, I recommend starting by reading the [docs](https://learn.microsoft.com/en-us/dotnet/csharp/linq/) and then by setting up a simple database to query yourself!

Thanks for reading.

Written By [_Nick Stambaugh_](https://www.linkedin.com/in/nick-s-694241139/)

> [https://learn.microsoft.com/en-us/dotnet/csharp/linq/](https://learn.microsoft.com/en-us/dotnet/csharp/linq/)