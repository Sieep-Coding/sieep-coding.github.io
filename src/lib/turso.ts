import { createClient } from "@libsql/client";

export const turso = createClient({
  url: import.meta.env.TURSO_DATABASE_URL,
  authToken: import.meta.env.TURSO_AUTH_TOKEN,
});

export async function ensureSchema() {
  await turso.execute(`
    CREATE TABLE IF NOT EXISTS comments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      post_slug TEXT NOT NULL,
      author_name TEXT,
      body TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      approved INTEGER NOT NULL DEFAULT 1
    )
  `);
  await turso.execute(`
    CREATE INDEX IF NOT EXISTS idx_comments_post_slug ON comments(post_slug)
  `);
}