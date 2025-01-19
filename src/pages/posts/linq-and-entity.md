---
title: "What I've Learned about LINQ and MVC"
date: "2025-1-19"

layout: ../../layouts/PostLayout.astro
description: "An example of why I'm starting to love C# more than Go."

img_path: "/bonk_go.png"
img_alt: "C# hitting a Go gopher with a hammer."
---

What I've Learned about LINQ and MVC
------------------------------------

Learning about `C#` and the various facets of `MVC architecture` has been exciting. 


I am sharing an example of why using **LINQ with Lambdas** is quickly becoming my favorite feature in `C#`.


The Situation
-------------
Allow me to lay out this hypothetical for you: 

**You're setting up a complex front end with specific business requirements.**

You have a `model` representing a table of products in your database.

```csharp
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
    public int Stock { get; set; }
}
```

With **LINQ and Lambdas**, you gain an `idiomatic` abstraction over `SQL` queries that is both *straightforward and powerful.* 


> Business logic with becomes easy to define and maintain—structured in a familiar way to SQL when using LINQ.


In our example below, we can address the business requirements in a declarative fashion, reducing the need for maintenance and *limiting the introduction of bugs.*


Need a list of products with a **stock greater than 5** but ordered by the **cheapest price?**


Simple with **Lambdas and LINQ**:

```csharp
.Where(p => p.Stock > 5) 

.OrderBy(p => p.Price)

.ToList();
```

Full Controller Class
---------------------
```csharp
public class ProductsController : Controller
{
    private readonly AppDbContext _context;

    public ProductsController(AppDbContext context)
    {
        _context = context;
    }

    public IActionResult Index()
    {
        // Fetch all products
        var products = _context.Products.ToList();
        
        // Filter products with Price < 2
        var productsToRemove = products.Where(p => p.Price < 2)
        							   .ToList();

        // Remove each filtered product from the database
        _context.Products.RemoveRange(productsToRemove);

        // Save changes to persist the removal
        _context.SaveChanges();
        
        // Fetch a specific product by name
        var laptop = _context.Products.FirstOrDefault(p => p.Name == "Laptop");

        // Fetch products with stock greater than 5, ordered by cheapest price
        var inStock = _context.Products
                              .Where(p => p.Stock > 5)
                              .OrderBy(p => p.Price)
                              .ToList();
                              
        // Fetch up to 10 products named "Laptop"
        var laptops = _context.Products
                              .Where(p => p.Name == "Laptop")
                              .Take(10)
                              .ToList();
		
        // Pass the data to the view
        return View(products);
    }
}
```

Conclusion
------------
Instead of writing verbose SQL queries or manually iterating through collections, LINQ with Lambdas allows us to express business logic concisely.


Written By [_Nick Stambaugh_](https://www.linkedin.com/in/nick-s-694241139/)