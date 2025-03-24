---
title: "Lua is weird..."
date: "2024-09-16"

layout: ../../layouts/PostLayout.astro
description: "Let me explain myself! 1-based indexing is not as bad as you think."

img_path : "/lua.png"
img_alt: "Lua logo"

tags: ["#Lua", "#Coding", "#Tech"]
---

# Lua is strange...
Lua has some quirks that can trip you up at first but once you get the hang of it, it can end up being intuitive.

Why is it strange?

### Because of '1-Based Indexing': 
Unlike many other languages (C, Java, etc.) where arrays start at 0, Lua starts at 1. 

It might seem odd at first, but it actually fits well with how we naturally count things.

In the code below, we have a list of fruits.

To any human, the FIRST item in the array would be number ONE.

Now, I don't know how you we're taught to count lists, but I start at 1 for the first item.

Lua's way of handling arrays is different & strange compared to most programming languages but I got to admit, it has grown on me this weekend.

```lua
local fruits = {"apple", "bannana", "cherry"}
print("First Fruit:", fruits[1])

table.insert(fruits, 'blueberry')
print("Fourth Fruit:", fruits[4])


-- It can be intuitive...
for i = 1, #fruits do
  print("Fruit at position:",i,"is",fruits[i])
end

--output
--[[
First Fruit:    apple
Fourth Fruit:   blueberry
Fruit at position:      1       is      apple
Fruit at position:      2       is      bannana
Fruit at position:      3       is      cherry
Fruit at position:      4       is      blueberry
--]]
```

### Conclusion

While Lua has some quirks, it is a fun language to learn and write. 
