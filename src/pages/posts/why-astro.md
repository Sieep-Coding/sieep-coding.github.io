---
title: "Why I Chose Astro for My Portfolio"
date: "2024-12-14"

layout: ../../layouts/PostLayout.astro
description: "Astro's lightweight, optimized approach made it the perfect choice for my personal portfolio."

img_path: "/astro.png"
img_alt: "A comparison of modern web frameworks."

tags: ["#Astro", "#Coding", "#Tech"]
---

## Why [Astro](https://astro.build/) Stood Out for [My Portfolio](https://nickstambaugh.vercel.app/)
Choosing a framework for a portfolio website can be overwhelming with so many options available. 

After experimenting with several frameworks, I landed on Astro, and it quickly became the clear winner for my needs.

# My Experience with Hugo
[Hugo](https://gohugo.io/) seemed like a perfect option for me initially, a lot of other developers used it and I'm familar enough with [Go.](https://go.dev/)

When I got started with it, I found myself fighting with VS Code, and the entire build process no matter what template I used.

I know, _user error._

Which is a fair statement. 

Once I found Astro, I never turned back due to how easy it was for me to build with [Node.](https://nodejs.org/en) 

# Astro's Focus on Performance
Astro’s architecture is built around delivering optimized performance out of the box. 

Unlike traditional frameworks like React or Vue, which often bundle unnecessary JavaScript for static content, Astro ships zero JavaScript to the client unless it’s needed.

For a portfolio site, where much of the content is static, this approach drastically improves load times and overall user experience. 

# 1. Simplicity in Design
One of my key goals for the [portfolio](https://nickstambaugh.vercel.app/) was to keep things minimalist. 

Astro’s file-based routing and markdown support made it incredibly simple to design a structure that just worked.

For example, setting up pages like `/projects` and `/blog` required minimal configuration:

```javascript
import Layout from '../../layouts/BaseLayout.astro';

<Layout>
  <h1>My Projects</h1>
  <p>Explore the things I've worked on!</p>
</Layout>
```
This ease of use allowed me to focus on content rather than boilerplate code.

# 2. Partial Hydration
Astro’s support for [partial hydration](https://en.wikipedia.org/wiki/Hydration_(web_development)) is a game-changer. 

Instead of hydrating an entire page—as frameworks like `Next.js` often do—Astro only hydrates interactive components. 

This is ideal for a portfolio site where many sections, like the About Me or static blog posts, don’t need JavaScript.

Here’s an example of how I used Astro’s integration to hydrate only the `ProjectCarousel` component in my [projects section](https://nickstambaugh.vercel.app/#projects):

```javascript
import ProjectCarousel from '../components/ProjectCarousel.jsx';

<section>
  <h2>Featured Projects</h2>
  <ProjectCarousel client:load />
</section>
```
This approach keeps the site lightweight while still delivering interactive elements where needed.

# 3. Flexibility with Integrations
Astro’s integrations make it incredibly flexible. Need `TailwindCSS`? A simple plugin gets you up and running. 

Want to add a `React` or `Svelte` component? No problem—Astro supports a variety of frameworks.

For my portfolio, I used Astro’s `TailwindCSS` integration to style the site and seamlessly integrated `React` components for dynamic functionality.

`npm install @astrojs/tailwind`

Then, in the `astro.config.mjs`:

```javascript
import tailwind from '@astrojs/tailwind';

export default {
  integrations: [tailwind()],
};
```
This flexibility allowed me to tailor the project to my exact needs without compromise.

## Why I Didn’t Choose Other Frameworks
While frameworks like `Next.js`, `Gatsby`, and `Vue` are powerful, they didn’t align perfectly with my vision for this portfolio:

- **Next.js**: Excellent for full-stack applications, but the overhead felt unnecessary for a static portfolio.
- **Gatsby**: Great for static sites, but its build times and reliance on GraphQL felt like overkill.
- **Vue**: A solid choice, but Astro’s optimized static-first approach won me over.
- **Hugo**: Couldn't figure it out.

# Conclusion
Astro offers a perfect balance of **simplicity, performance, and flexibility** for my [portfolio website.](https://nickstambaugh.vercel.app/) 

It allows me to focus on what matters most: **creating a fast, visually appealing, and maintainable site.**

I highly recommend giving Astro a try.

Written by [_Nick Stambaugh_](https://www.linkedin.com/in/nick-s-694241139/)