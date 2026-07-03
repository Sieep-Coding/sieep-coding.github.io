// src/pages/api/checkout.ts
// Astro API route — place at src/pages/api/checkout.ts
// Install: npm install stripe

import type { APIRoute } from "astro";
import Stripe from "stripe";

const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY, {
});

export const POST: APIRoute = async ({ request }) => {
  const { priceId } = await request.json();

  if (!priceId) {
    return new Response(JSON.stringify({ error: "Missing priceId" }), { status: 400 });
  }

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${import.meta.env.SITE}/shop/success`,
    cancel_url: `${import.meta.env.SITE}/shop`,
    shipping_address_collection: {
      allowed_countries: ["US"],
    },
  });

  return new Response(JSON.stringify({ url: session.url }), { status: 200 });
};