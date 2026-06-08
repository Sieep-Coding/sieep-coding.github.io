export async function GET(context) {
    const postImportResult = import.meta.glob('./**/*.md', { eager: true });
    
    const posts = Object.values(postImportResult)
        .filter(post => post.frontmatter?.date)
        .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

    const baseUrl = 'https://nickstambaugh.dev';
    
    // We remove the leading slash from post.url if it exists, 
    // then manually construct the URL with exactly one slash.
    const allUrls = [
        { url: `${baseUrl}/`, lastmod: new Date().toISOString() },
        { url: `${baseUrl}/about/`, lastmod: new Date().toISOString() },
        { url: `${baseUrl}/posts/`, lastmod: new Date().toISOString() },
        ...posts.map(post => ({
            url: `${baseUrl}${post.url.startsWith('/') ? post.url : '/' + post.url}`,
            lastmod: new Date(post.frontmatter.date).toISOString(),
        }))
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
  </url>`).join('\n')}
</urlset>`;

    return new Response(sitemap, {
        status: 200,
        headers: { 'Content-Type': 'application/xml' },
    });
}