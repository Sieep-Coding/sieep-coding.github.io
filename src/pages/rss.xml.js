import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';

export async function GET(context) {
    const postImportResult = import.meta.glob('./**/*.md', { eager: true });
    const posts = Object.values(postImportResult);

    return rss({
        title: 'Nick Stambaugh',
        description: 'A website dedicated to Nick Stambaugh and his writing.',
        site: context.site,
        items: posts.map((post) => ({
            link: post.url,
            pubDate: post.frontmatter.date,
            content: sanitizeHtml(post.compiledContent()),
            title: post.frontmatter.title,
            ...post.frontmatter,
        })),
    });
}