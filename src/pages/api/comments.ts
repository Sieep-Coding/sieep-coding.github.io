import type { APIRoute } from "astro";
import { turso } from "../../lib/turso";

export const prerender = false;

const lastPostByIp = new Map<string, number>();

export const GET: APIRoute = async ({ url }) => {
  const slug = url.searchParams.get("slug");
  if (!slug) {
    return new Response(JSON.stringify({ error: "Missing slug" }), { status: 400 });
  }

  const result = await turso.execute({
    sql: `SELECT id, author_name, body, created_at
          FROM comments
          WHERE post_slug = ? AND approved = 1
          ORDER BY created_at ASC`,
    args: [slug],
  });

  return new Response(JSON.stringify(result.rows), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const { slug, name, body } = await request.json();

  if (!slug || !body || typeof body !== "string" || !body.trim()) {
    return new Response(JSON.stringify({ error: "Missing slug or body" }), { status: 400 });
  }
  if (body.length > 2000) {
    return new Response(JSON.stringify({ error: "Comment too long" }), { status: 400 });
  }

  const now = Date.now();
  const last = lastPostByIp.get(clientAddress) ?? 0;
  if (now - last < 20_000) {
    return new Response(JSON.stringify({ error: "Slow down a bit" }), { status: 429 });
  }
  lastPostByIp.set(clientAddress, now);

  const authorName = name && typeof name === "string" && name.trim()
    ? name.trim().slice(0, 60)
    : "Anonymous";

  await turso.execute({
    sql: `INSERT INTO comments (post_slug, author_name, body) VALUES (?, ?, ?)`,
    args: [slug, authorName, body.trim()],
  });

  return new Response(JSON.stringify({ ok: true }), { status: 201 });
};