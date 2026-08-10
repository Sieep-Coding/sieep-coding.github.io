export async function GET(context) {
    const postImportResult = import.meta.glob('./**/*.md', { eager: true });

    const posts = Object.values(postImportResult)
        .filter(post => post.frontmatter?.date)
        .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

    const aboutContent = `
## About Nick Stambaugh
Nick Stambaugh is a full-stack engineer with a background in business intelligence and economics. He helps businesses turn complex data and processes into solutions that drive results. This site hosts his blog and music.

### Professional Journey
- Started in academia and business intelligence: Writing reports on nuclear reactor economics for Michigan's NERS department and producing public/regional data reports for The Right Place, Inc.
- Evolution: Building enterprise software, custom applications, and solutions for clients in healthcare, manufacturing, defense, and Fortune 500 companies.
- His blog is at: https://nickstambaugh.dev/posts where he shares insights on software development, technology trends, and personal interests.

### Technical Expertise
- Primary: .NET/C#, TypeScript, JavaScript.
- Additional: Custom APIs, Go, Python, CRMs, ERPs, SQL Server, PostgreSQL, and SQLite.
- Education: Bachelor's in Economics and Philosophy (blending analytical thinking with technical execution).
`;

    const content = [
        `# Nick Stambaugh - Knowledge Base`,
        `Last updated: ${new Date().toISOString().split('T')[0]}`,
        ``,
        aboutContent.trim(),
        ``,
        `## Blog Posts`,
        ...posts.map(post => `- ${post.frontmatter.title}: https://nickstambaugh.dev${post.url}`),
        ``,
        `## Personal Interests`,
        `- Writing on his blog (10+ topics)`,
        `- Producing music via FL Studio and hardware`,
        `- Hanging out with his dog, Bruce`,
        `- Reading books, Wikipedia, and old comic books`,
        `- Cooking`,
        `- Exercising, hiking, and racing`,
        `- Traveling the US (such as Chicago and Houston)`,
        `- Movies and PC gaming`,
        `- Football (Soccer)`,
        `- Experimenting with new and old programming languages`,
        ``,
        `## About This Site`,
        `- Hand-coded with Astro, React, JavaScript, TypeScript, and Tailwind CSS. Blog posts are written in Markdown.`,
        `- Code hosted on GitHub and deployed via Vercel.`,
        `- Subscribe to the blog via RSS: https://nickstambaugh.dev/rss.xml`,
        ``,
        `---`,
        `For more info, visit: ${context.site}`
    ].join('\n');

    return new Response(content, {
        status: 200,
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
}