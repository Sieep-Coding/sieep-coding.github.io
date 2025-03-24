---
title: "Creating a Game of Life Simulation in Lua"
date: "2024-09-22"

layout: ../../layouts/PostLayout.astro
description: "Learn how to build a simple Game of Life simulation in Lua using basic arrays, logic, and user input."

img_path : "/gol.gif"
img_alt: "Conway's Game Of Life Simulation"

tags: ["#Lua", "#Coding", "#Tech"]
---

## Building a Game of Life Simulation in Lua

### Introduction

The [Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life), invented by **John Conway**, is a fascinating simulation that illustrates how complex patterns can emerge from simple rules. 

In this post, I'll guide you through creating **a Game of Life simulation using Lua,** where each cell follows basic rules for birth, survival, and death.

[Lua's](https://www.lua.org/) simplicity makes it a great language for small-scale simulations like this. 

We’ll take user input for grid density and the number of generations, simulate the evolution of the grid, and print the results right in the terminal.

### What is the Game of Life?

For those not familiar, Conway's Game of Life is computer graphical simulation based on [cellular automation](https://en.wikipedia.org/wiki/Cellular_automaton).

Every cell interacts with its eight neighbors, which are the cells that are horizontally, vertically, or diagonally adjacent. 

At each step in time, the following transitions occur:

- Any live cell with fewer than two live neighbours dies, as if by underpopulation.
- Any live cell with two or three live neighbours lives on to the next generation.
- Any live cell with more than three live neighbours dies, as if by overpopulation.
- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.


### Setting up the Universe

We first initialize a 50x50 universe grid, N and M, and an empty array uni that will represent our universe's state. 

Each cell will either be **"alive" (X) or "dead" ( ).** 

A directional array ` dir ` is used to check neighboring cells for each position.

```lua
local N = 50 
local M = 50
local uni = {}

-- Directional array that allows a cell to check nearby neighbors
local dir = {
    {-1, -1}, {0, -1}, {1, -1},
    {1, 0}, {1, 1},
    {0, 1}, {-1, 1}, {-1, 0},
}
```

### Getting User Input

We get **user input** for the initial ` density ` of the universe and the number of generations. 

The density controls how likely each cell starts as alive. 

If you want to experiment with various setups, **adjusting the density can drastically change the evolution patterns.**

```lua
local function getUserInputDensity()
    local density
    while true do
        io.write("Universe Density (Float between 0 and 1): ")
        density = io.read()
        density = tonumber(density)
        if density == nil or density < 0 or density > 1 then
            print("Please enter a valid number between 0 and 1.")
        else
            break
        end
    end
    io.write("Selected density: ", density, "!\n")
    return density
end

local function getUserInputGeneration()
    local generations 
    while true do
        io.write("Number of Generations (positive integer): ")
        generations = io.read()
        generations = tonumber(generations)
        if generations == nil or generations <= 0 then
            print("Please enter a valid number greater than 0.")
        else
            break
        end
    end
    io.write("Selected generations: ", generations, "!\n")
    return generations
end

```

### Creating the Universe

The ` newUniverse ` function generates the grid based on the chosen density. 

Each cell is randomly initialized as **either alive (X) or dead ( ),** based on the density parameter.

```lua

local function newUniverse(density)
    local newUni = {}
    for x = 1, N do
        newUni[x] = {}
        for y = 1, M do
            if math.random() < density then
                newUni[x][y] = "X"
            else
                newUni[x][y] = " "
            end
        end
    end
    return newUni
end
```

### Counting Neighbors

For each cell in the universe, we need to count its alive neighbors. 

This function uses our ` directional array ` to check neighboring cells.

```lua

local function countNeighbors(universe, x, y)
    local count = 0
    for i = 1, #dir do
        local row = (x + dir[i][1] - 1) % N + 1
        local col = (y + dir[i][2] - 1) % M + 1
        if universe[row][col] == "X" then
            count = count + 1
        end
    end
    return count
end
```

### Updating the Universe

Reminder, the rules of **Conway's Game of Life** are simple:

- A cell with fewer than 2 or more than 3 neighbors dies (under/overpopulation).
- A cell with exactly 3 neighbors is born.
- A cell with 2 or 3 neighbors survives to the next generation.

We apply these rules to create a new universe with updated states.

```lua

local function updateUniverse(universe)
    local newUni = {}
    for x = 1, N do
        newUni[x] = {}
        for y = 1, M do
            local neighbors = countNeighbors(universe, x, y)
            local cell = universe[x][y]
            if cell == "X" then
                if neighbors < 2 or neighbors > 3 then
                    newUni[x][y] = " " -- cell dies
                else
                    newUni[x][y] = "X" -- cell survives
                end
            else
                if neighbors == 3 then
                    newUni[x][y] = "X" -- new cell is born
                else
                    newUni[x][y] = " "
                end
            end
        end
    end
    return newUni
end
```

### Printing the Universe

Lastly, we print the universe in the terminal after each generation. 

This is a simple visual representation, **where each X represents a living cell.**

```lua

local function printUniverse(universe)
    for x = 1, N do
        for y = 1, M do
            io.write(universe[x][y] .. " ")
        end
        print()
    end
end
```

### Running the Simulation

We initialize the universe with **user-defined density** and run it for the specified number of generations, updating the grid and printing it after each step.

```lua

local density = getUserInputDensity()
uni = newUniverse(density)
local generations = getUserInputGeneration()

for gen = 1, generations do
    print("Generation:", gen)
    printUniverse(uni)
    uni = updateUniverse(uni)
end
```

## Conclusion

This basic Game of Life simulation in Lua is a great way to experiment with how patterns emerge from simple rules. 

Lua's flexibility and easy-to-read syntax make it perfect for small simulations like this, allowing you to focus on logic rather than complexity. 

*Written By [Nick Stambaugh](https://www.linkedin.com/in/nick-s-694241139/)*

[View the full code on Github!](https://github.com/Sieep-Coding/game-of-life-lua/) 