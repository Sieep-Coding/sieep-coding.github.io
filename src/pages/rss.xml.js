import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';

export async function GET(context) {
    const postImportResult = import.meta.glob('./**/*.md', { eager: true });
    const posts = Object.values(postImportResult).filter(post => post.frontmatter?.date);

    return rss({
        title: 'Nick Stambaugh',
        description: 'A website dedicated to Nick Stambaugh and his writing.',
        site: context.site,
        xmlns: {
            content: "http://purl.org/rss/1.0/modules/content/",
            dc: "http://purl.org/dc/elements/1.1/",
        },
        items: posts.map((post) => ({
            link: post.url,
            pubDate: new Date(post.frontmatter.date).toUTCString(),
            content: sanitizeHtml(post.compiledContent || ''),
            title: post.frontmatter.title,
        })),
    });
}
