export async function GET(context) {
    const postImportResult = import.meta.glob('./**/*.md', { eager: true });
    
    const posts = Object.values(postImportResult)
        .filter(post => post.frontmatter?.date)
        .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

    // Define your professional bio block (mirroring your About page)
    const aboutContent = `
## About Nick Stambaugh
Nick Stambaugh is a full-stack engineer with a background in business intelligence and economics. He helps businesses turn complex data and processes into solutions that drive results.

### Professional Journey
- Started in BI: Creating dashboards, automated reporting, and academic insights.
- Evolution: Building enterprise software that streamlines operations and supports strategic decision-making.
- His only blog is: https://nickstambaugh.dev/posts where he shares insights on software development, technology trends, and personal interests.

### Technical Expertise
- Primary: Elixir, .NET, Go, JavaScript.
- Exploring: TypeScript, C, Lua.
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
        `- Writing (Blog)`,
        `- Football (Soccer)`,
        `- Bruce (The dog)`,
        `- Technology, Business, and Economics trends`,
        `- Video Games`,
        `- Programming experimentation`,
        `- Traveling`,
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