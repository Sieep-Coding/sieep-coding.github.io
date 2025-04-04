---
title: "[PART 1] Creating A SQL-Like Language in C#"
date: "2025-1-3"

layout: ../../layouts/PostLayout.astro
description: "Part 1 of creating a SQL-like language in C# for fun."

img_path: "/hacking_sql.png"
img_alt: "C# hitting a SQL database with a hammer."

tags: ["C#", "#.NET", "#Coding", "#Tech"]
---

[PART 1] Creating A SQL-Like Language in C#
-------------------------------------------

# [VIEW THE CODE](https://github.com/Sieep-Coding/SimpSQL/)

**Welcome to part one** of creating `SimpSQL`, a lightweight SQL-like REPL built entirely in **C#**. 

The goal of this project is to provide developers with a simple, hackable interface to practice database operations without the overhead of setting up a full-fledged SQL server.

[SQLite](https://www.sqlite.org/) is still the best SQL REPL tool out there, don't use this for anything serious!

What is SimpSQL?
================

`SimpSQL` is an in-memory SQL emulator designed to mimic some of the basic functionality of traditional SQL. 

It allows users to execute commands like `INSERT`, `SELECT`, `UPDATE`, and `DELETE`. 

Additionally, it features advanced options like random query generation, table insights, and the ability to save/load tables in `CSV`, `JSON`, or `XML` formats.

> **Note:** This project is open-source and available under the MIT License. 
> 
> You can find the code on my [GitHub](https://github.com/Sieep-Coding/).

Features of SimpSQL
-------------------

*   **Basic Operations:** Perform `INSERT`, `SELECT`, `UPDATE`, and `DELETE` commands.
*   **Table Insights:** Get column statistics, value distributions, and more.
*   **File Support:** Save and load tables in `CSV`, `JSON`, or `XML` formats.
*   **Help Command:** Get a quick-start guide directly in the console.

Code Highlights
---------------

The core of `SimpSQL` is in its ability to interpret and execute user commands REPL-style.

Below is a snippet showcasing the `Execute` method, which acts as the **entry point** for all operations:

```csharp
    public void Execute(string command)
    {
        var token = command.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
        if (token.Length == 0 || string.IsNullOrWhiteSpace(command))
        {
            Console.WriteLine("Invalid command");
            return;
        }
        var operation = token[0].ToUpper();
        switch (operation)
        {
            case "INSERT":
                ExecuteInsert(token);
                break;
            case "SELECT":
                ExecuteSelect(token);
                break;
            case "UPDATE":
                ExecuteUpdate(token);
                break;
            case "DELETE":
                ExecuteDelete(token);
                break;
            case "HELP":
                PrintHelp(token);
                break;
            case "RANDOM":
                ExecuteRandomQuery(token);
                break;
            case "INSIGHTS":
                PrintTableInsights();
                break;
            case "SAVE":
                ExecuteSave(token);
                break;
            case "LOAD":
                ExecuteLoad(token);
                break;
            default:
                Console.WriteLine("Invalid operation. Type 'HELP' for a quick-start.");
                break;
        }
    }
```

Insights
========

Using one commands, `INSIGHTS`, I can get a quick overview of our table/database.

Here is a sample output from running `INSIGHTS`:

```text
>> INSIGHTS

Table has 15 rows.
Columns: name, age

Column 'name' Statistics:
    Non-numeric column - no statistics available.

Column 'age' Statistics:
    Count: 15
    Sum: 467
    Average: 31.133333333333333
    Min: 15
    Max: 52

Value Distribution:
  15.00 - 18.70: ##
  18.70 - 22.40:
  22.40 - 26.10: #####
  26.10 - 29.80: #
  29.80 - 33.50: #
  33.50 - 37.20: ##
  37.20 - 40.90: #
  40.90 - 44.60:
  44.60 - 48.30: ##
  48.30 - 52.00: #
```

The code to handle the histogram is straightforward, with us iterating over an array of integers and printing `#` when there is an item that falls within a bin.


```csharp
 Console.WriteLine("\n    Value Distribution:");
 var bins = 10;
 var range = (max - min) / bins;
 var histogram = new int[bins];

 foreach (var value in numericValues)
 {
     var binIndex = (int)((value - min) / range);
     binIndex = Math.Min(binIndex, bins - 1);
     histogram[binIndex]++;
 }

 for (int i = 0; i < bins; i++)
 {
     var binStart = min + i * range;
     var binEnd = binStart + range;
     var bar = new string('#', histogram[i]);
     Console.WriteLine($"  {binStart:F2} - {binEnd:F2}: {bar}");
 }
```

What's Next?
------------

In the next part, I'll dive deeper into implementing some of the advanced features, such as random query generation and table insights. 

This demonstrates how `SimpSQL` can be used as a lightweight tool for learning and experimentation.

Conclusion
------------

Feel free to clone the repository, suggest enhancements, or report any issues you encounter. 

# [VIEW THE CODE](https://github.com/Sieep-Coding/SimpSQL/)

Written By [_Nick Stambaugh_](https://www.linkedin.com/in/nick-s-694241139/)
