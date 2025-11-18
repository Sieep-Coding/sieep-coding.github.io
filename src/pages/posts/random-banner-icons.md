---
title: "Astro/JS Randomized Banner Icons"
date: "2025-11-18"

layout: ../../layouts/PostLayout.astro
description: "A guide to creating dynamic, randomized banner icons."

img_path: "/try-banner.png"
img_alt: "Screenshot of multiple colorful banners with icons"

tags: ["#Astro", "#TailwindCSS", "#WebDev"]
---

## [PERMALINK](https://nickstambaugh.dev/posts/randomized-banner-icons#Randomized-Banner-Icons)

> Dynamic website elements don’t have to be static. Randomized banner icons can improve engagement and give your site a polished, interactive feel.

# Randomized Banner Icons in Astro

For websites, small interactive details can create significant visual appeal. One practical approach is to **randomize banner icons and colors** for top-of-page promotions or highlights. This keeps the UI fresh and encourages repeated engagement.

At [Luniv](https://luniv.tech), we often use Astro for these dynamic components, paired with TailwindCSS for styling. Here’s a walkthrough.

---

### Randomization Logic

We pre-render all banner components server-side but initially hide them. 

A client-side script then selects one banner at random and applies a random Tailwind background color each time the page loads or the user navigates client-side. This ensures a dynamic experience without multiple imports or rerendering issues.

#### 1. Pre-render Banners

We import all banners and render them in hidden slots:

```astro
---
import TopBanner from './TopBanner.astro';
import TopBanner2 from './TopBanner2.astro';
import TopBanner3 from './TopBanner3.astro';
import TopBanner4 from './TopBanner4.astro';
import TopBanner5 from './TopBanner5.astro';
import TopBanner6 from './TopBanner6.astro';
import TopBanner7 from './TopBanner7.astro';

const banners = [TopBanner, TopBanner2, TopBanner3, TopBanner4, TopBanner5, TopBanner6, TopBanner7];
---

<div id="banner-wrapper" class="w-full">
  {banners.map((Banner) => (
    <div class="random-banner-slot" style="display: none;">
      <Banner color="js-color-target transition-colors duration-300" />
    </div>
  ))}
</div>


```

Each <div> acts as a slot for one banner. The js-color-target class marks the element that will receive the randomly selected Tailwind color.

#### 2. Randomization Script

The following script runs on every page load and client-side navigation via astro:page-load:

```js
<script is:inline>
document.addEventListener('astro:page-load', () => {
  const colors = [
    'cyan','orange','amber','lime','emerald','teal',
    'sky','indigo','violet','fuchsia','rose','pink',
    'red','yellow','green','blue','purple'
  ];

  const bgClassMap = {
    cyan: 'bg-cyan-600 hover:bg-cyan-700',
    orange: 'bg-orange-600 hover:bg-orange-700',
    amber: 'bg-amber-600 hover:bg-amber-700',
    lime: 'bg-lime-600 hover:bg-lime-700',
    emerald: 'bg-emerald-600 hover:bg-emerald-700',
    teal: 'bg-teal-600 hover:bg-teal-700',
    sky: 'bg-sky-600 hover:bg-sky-700',
    indigo: 'bg-indigo-600 hover:bg-indigo-700',
    violet: 'bg-violet-600 hover:bg-violet-700',
    fuchsia: 'bg-fuchsia-600 hover:bg-fuchsia-700',
    rose: 'bg-rose-600 hover:bg-rose-700',
    pink: 'bg-pink-600 hover:bg-pink-700',
    red: 'bg-red-600 hover:bg-red-700',
    yellow: 'bg-yellow-500 hover:bg-yellow-600',
    green: 'bg-green-600 hover:bg-green-700',
    blue: 'bg-blue-600 hover:bg-blue-700',
    purple: 'bg-purple-600 hover:bg-purple-700',
  };

  const wrapper = document.getElementById('banner-wrapper');
  const bannerSlots = wrapper.querySelectorAll('.random-banner-slot');

  bannerSlots.forEach(el => el.style.display = 'none');

  const randomBannerIndex = Math.floor(Math.random() * bannerSlots.length);
  const randomColorKey = colors[Math.floor(Math.random() * colors.length)];
  const classesToAdd = bgClassMap[randomColorKey].split(' ');

  const activeSlot = bannerSlots[randomBannerIndex];

  if (activeSlot) {
    const targetElement = activeSlot.querySelector('.js-color-target');

    if (targetElement) {
      targetElement.classList.remove('js-color-target');
      targetElement.classList.add(...classesToAdd);
    }

    activeSlot.style.display = 'block';
  }
});
</script>

```

### Example Banner Component

Each banner component can be simple, using the color prop to set background and hover states:

```ts
import { Icon } from "astro-icon/components";
export interface Props {
  color: string;
}
const { color } = Astro.props;

```

```astro
<div class="mt-2 w-full flex justify-center">
  <a
    href="https://luniv.tech/services/process-automation-and-ai-solutions"
    rel="noopener noreferrer"
    class={`inline-flex items-center rounded-full ${color} px-3 py-0.5 text-[10px] sm:text-xs font-medium text-white shadow-sm transition-colors hover:underline`}
  >
    <Icon name="tabler:robot" class="mr-1 w-3 h-3 flex-shrink-0" />
    Introducing <b class="mx-1">LunivAI</b>: New automation AI for your workflows &raquo;
  </a>
</div>

```
### Why This Approach Works

- Dynamic Navigation: Using `astro:page-load` ensures the same behavior occurs on client-side navigation, keeping the page experience consistent.

- Randomization: Keeps the interface fresh for returning users.

- Scalable: Easily add new banners or colors without changing the logic.

- Reusable: The same Banner logic can be used across multiple pages.

At [Luniv](https://www.luniv.tech/), this technique is part of our approach to dynamic web presentation, improving both usability and user engagement.

### Next Steps

- Add more banner variations for different campaigns or product highlights.

- Experiment with animated icons or gradient backgrounds for extra flair.

## KEY TO SUCCESS:

- **Combine with A/B testing to determine which banner combinations maximize click-throughs, optimize towards lead gen (i.e. contact form).**

## In Closing...

Randomized banners are a simple but effective way to create a lively experience for site visitors. Astro makes it easy to combine JS logic with templated components.

Written By [Nick Stambaugh](https://www.linkedin.com/in/nick-s-694241139/)