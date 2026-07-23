---
title: "Tinkering With the Site"
date: "2026-07-23"

layout: ../../layouts/PostLayout.astro
description: "A rundown of some recent changes to nickstambaugh.dev: a new recipes page, sparklines on the blog, and a footer bug that took way longer to fix than it should have."

img_path: "/mac.jpg"
img_alt: "Old Macintosh Computer"

tags: ["#Tech", "#Coding"]
---

# Tinkering With the Site

I spent a chunk of this week doing something I probably should do more often: actually improving this site instead of just writing on it.

Everything here is built with [Astro](https://astro.build/), which I still think is one of the best tools out there for a site like mine. Mostly static, occasionally interactive, and it doesn't fight me when I want to drop in a little vanilla JavaScript instead of reaching for a whole framework. If you haven't looked into it and you're building something content-heavy, [check it out](https://astro.build/).

Here's what changed.

## A Recipes Page

I added a [Recipes page](/recipes), which has been on my list for a while. I cook a lot, my [Reuben sandwich](https://en.wikipedia.org/wiki/Reuben_sandwich) recipe specifically has been requested by more people than I expected, and I wanted somewhere to put that stuff besides my Notes app.

The first version was fine, but it was basically a wall of ingredients and directions stacked on top of each other. Scrolling through ten recipes like that felt like reading a phone book. So I turned it into an accordion instead: each recipe collapses down to a title, cook time, servings, and a short description, and you tap it open to see the full ingredient list and directions. Much easier to scan.

I also borrowed the same search-and-tag-filter pattern I already use on the [Posts page](/posts), so you can filter recipes by tag ("italian," "quick," "jewish," etc.) or just search for something by name. Recipes range from an [Italian carbonara](https://en.wikipedia.org/wiki/Carbonara) adapted from Rachael Ray, to a [Thai basil chicken](https://en.wikipedia.org/wiki/Pad_krapow) I make more often than I'd like to admit.

The accordion itself is nothing fancy, just plain JavaScript toggling a `max-height` on click:

```javascript
items.forEach((item) => {
  const toggleBtn = item.querySelector(".recipe-toggle");
  const recipePanel = item.querySelector(".recipe-panel");
  const recipeArrow = item.querySelector(".recipe-arrow");

  toggleBtn.addEventListener("click", () => {
    const isOpen = toggleBtn.getAttribute("aria-expanded") === "true";
    toggleBtn.setAttribute("aria-expanded", String(!isOpen));

    if (isOpen) {
      recipePanel.style.maxHeight = "0px";
      recipeArrow.style.transform = "rotate(0deg)";
    } else {
      recipePanel.style.maxHeight = recipePanel.scrollHeight + "px";
      recipeArrow.style.transform = "rotate(180deg)";
    }
  });
});
```

## Sparklines on the Blog

Next to "Recent Writing" on the homepage, and again at the top of the [Posts page](/posts), there's now a small [sparkline](https://en.wikipedia.org/wiki/Sparkline) next to the post count. 

It's a tiny inline chart showing how many posts I've written per month, which sounds like a minor thing, but I like it a lot. It's a quiet way of holding myself accountable. If the line goes flat for a few months, that's on me.

The homepage version is subtle, just a little line next to the post count. The one on the Posts page is bigger and more prominent, with a filled area under the line and hover tooltips so you can see exactly how many posts I put out in a given month. Both are just inline SVGs generated from the frontmatter dates on my `.md` files, no charting library needed.

## The Footer Bug

This one was dumber than I'd like to admit.

The footer's bottom bar (copyright, Privacy, License & Terms, etc.) was wrapping onto two lines on mobile, which bugged me every time I looked at the site on my phone. My first attempt was to force it onto one line with `flex-nowrap` and horizontal scrolling. That was a mistake. Instead of scrolling nicely, the content just got clipped off-screen with no visible scrollbar. Genuinely worse than the two-line version.

The actual fix was simpler than forcing anything: shorten the labels on small screens ("License & Terms" becomes "Terms," "Buy me a coffee" becomes "Coffee"), hide the lowest-priority links (looking at you, `/llms.txt` and `/sitemap.xml`) below the `sm` breakpoint, and let everything expand back to full text on larger screens. No JavaScript, no scroll hijacking, just responsive Tailwind classes doing what they're supposed to do.

Sometimes the fix isn't "make the container smarter," it's "have less stuff in the container."

## Final Thoughts

None of this is groundbreaking, but I like keeping this site in a state where I'm comfortable pushing small changes whenever I think of them. It's built in a way where I can go from "I should add a recipes page" to it actually existing in an afternoon, which is exactly what a personal site should feel like.

If you want to see the actual code, it's all on [GitHub](https://github.com/sieep-coding/sieep-coding.github.io), and the site itself is deployed through [Vercel](https://vercel.com/).

More changes coming whenever I get around to them.