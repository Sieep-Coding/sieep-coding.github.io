export const info = {
  name: "Nick Stambaugh",
  brief_description:
    "Full Stack Enterprise Application Engineer",
  role: "Full Stack Engineer",
  picture: "/img.jpg",
  picture_alt: "Nick Stambaugh",
  location: "Grand Rapids, MI",
  cv: "/Nick_Stambaugh-Resume.pdf",

  about: {
    description: `I'm a full-stack engineer with a background in business intelligence, blending technical problem-solving with data-driven decision-making. 
    My career started in analytics, where I built dashboards, automated reports, and made complex data more accessible. 
    Now, I focus on developing enterprise software that optimizes business and production processes. 
    When I’m not coding, you’ll probably find me running, gaming, or hanging out with my dog, Bruce. 
    I enjoy tackling new challenges, whether it's building games in C++, optimizing workflows with C#, or experimenting with TypeScript/Python/Go/Lua in my side projects.`,
    education: [
      {
        title: "BS in Economics and Philosophy",
        date: "Grand Valley State University",
        location: "Grand Valley State University",
        // gpa: "3.4",
        thesis: "Deepened my understanding of economic systems and philosophical reasoning, which translates well into software development.",
      },
    ],
    experience: [
      {
        title: "Junior Application Developer",
        date: "2025 - Present",
        location: "Display Pack Inc",
        description:
          `Developing enterprise software to automate business and production processes.
          Working with C#, JavaScript, and .NET MVC while applying Test-Driven Development principles with xUnit.
          Helping modernize and streamline internal tools that drive real-world manufacturing efficiency.`,
      },
      {
        title: "Data Analyst",
        date: "2024 - 2025",
        location: "NxGen MDx",
        description:
           `Transformed complex data into meaningful insights, helping drive business decisions.
            Streamlined reporting processes to improve efficiency for leadership and sales teams.`,
      },
      {
        title: "Business Intelligence Developer",
        date: "2023 - 2024",
        location: "National Nail",
        description:
        "Creating impactful visualizations, automating reporting processes, and providing analytical support to enhance business performance.",
      },
      {
        title: "Business Intelligence Analyst",
        date: "2022 - 2023",
        location: "The Right Place, Inc.",
        description:
        `Built interactive dashboards and automated reports to enhance business performance.
        Provided analytical support to inform executive decision-making.`,
      },
      {
        title: "Researcher",
        date: "2021",
        location: "University of Michigan Nuclear Engineering & Radiological Sciences",
        description:
        `Conducted economic analysis of U.S. nuclear power plants, focusing on feasibility and efficiency.
        Worked on data modeling and analysis, contributing to a deeper understanding of nuclear energy economics.`,
      },
    ],

    skills: [ {
      Languages: ["C#", "Python", "JavaScript", "TypeScript", "Go", "Lua", "HTML", "CSS", "SQL", "C/C++", "Bash", "R",],
      Frameworks: ["React", ".NET", "Node.js", "Electron", "Astro", "TailwindCSS", "Bootstrap", "HTMX", "Alpine.js", "Flask", "Django", "Express.js",],
      Libraries: ["xUnit", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "D3.js", "Chart.js", "Three.js", "TensorFlow",],
      Databases: ["SQLite", "SQL Server", "Microsoft AX", "Salesforce", "MongoDB", "Zoho"],
      Concepts: ["TDD", "OOP", "MVC", "Data Analysis", "Business Intelligence", "Data Visualization", "Machine Learning", "Web Development", "API Development", "Agile Methodologies",],
      Tools: ["VSCode", "Visual Studio", "Bitbucket", "Neovim", "Git", "Docker", "PowerBI", "Tableau",],
    } ],
  },

  projects: [
    {
      title: "REPL in C#",
      date: "2025",
      description:
        "A toy SQL-like language written in C#.",
      link: "https://github.com/Sieep-Coding/SimpSQL/",
      tech: ["C#", "VS"],
      img_alt: "Photo of C# hitting a SQL database with a hammer.",
      img_path: "hacking_sql.png",
    },
    {
      title: "spark",
      date: "2025",
      description:
        "A system for managing business data.",
      link: "https://github.com/Sieep-Coding/spark",
      tech: ["Python", "tkinter"],
      img_alt: "spark application interface.",
      img_path: "p.png",
    },
    {
      title: "Full-Stack Website",
      date: "2024",
      description:
        "My Grand Rapids based non-profit dedicated to device recycling.",
      link: "https://accessgr.vercel.app/",
      tech: ["Astro", "VSCode"],
      img_alt: "Photo a nonprofit site.",
      img_path: "access.png",
    },
    {
      title: "Full-Stack Website",
      date: "2024",
      description:
        "MiTalent360 is a virtual educational assessment tool.",
      link: "https://mitalent360.com/",
      tech: ["React", "Node.js","JavaScript"],
      img_alt: "Photo of Mitalent360",
      img_path: "mitalent.png",
    },
    {
      title: "Lua Testing Framework",
      date: "2024",
      description:
        "A single-file, minimal Lua testing framework.",
      link: "https://github.com/Sieep-Coding/check-your-lua",
      tech: ["Lua", "Neovim"],
      img_alt: "Photo of check your lua docs",
      img_path: "cyl.png",
    },
    {
      title: "Information Tracking System in Go",
      date: "2024",
      description:
        "This is a tool to manage device donations to my non-profit.",
      link: "https://github.com/Sieep-Coding/laptop-cli",
      tech: ["Go", "Neovim"],
      img_alt: "Photo of CLI terminal",
      img_path: "cli.jpg",
    },
    {
      title: "Chat Server in Go",
      date: "2024",
      description:
        "A single file chat server written in Go.",
      link: "https://github.com/Sieep-Coding/chatserver",
      tech: ["Go", "Neovim"],
      img_alt: "Photo of Code",
      img_path: "/chatserver.png",
    },
    {
      title: "Go + HTMX + Alpine.js",
      date: "2024",
      description:
        "A simple todo app in HTMX, alpinejs, and Go.",
      link: "https://github.com/Sieep-Coding/todo-htmx-alpine-go",
      tech: ["Go", "Alpine.js", "HTMX"],
      img_alt: "Photo of Site",
      img_path: "site.png",
    },
    {
      title: "Web Server in C",
      date: "2024",
      description:
        "A web-server written in pure C.",
      link: "https://github.com/Sieep-Coding/web-server",
      tech: ["C", "Neovim", "Makefile"],
      img_alt: "Photo of Code",
      img_path: "server.png",
    },
    {
      title: "NoteZone",
      date: "2024",
      description:
        "NoteZone is a note-taking app built with Electron.",
      link: "https://github.com/Sieep-Coding/notezone",
      tech: ["Electron", "Node.js", "JavaScript"],
      img_alt: "Photo of Notezone",
      img_path: "note.png",
    },
    {
      title: "Web Crawler",
      date: "2024",
      description:
        "A simple web crawler with customizable paramaters.",
      link: "https://github.com/Sieep-Coding/web-crawler",
      tech: ["Go", "Neovim"],
      img_alt: "Photo of Crawler",
      img_path: "crawler.png",
    },
  ],

  contact: {
    email: "nickstambaugh@proton.me",
    linkedin: "https://www.linkedin.com/in/nick-s-694241139/",
    github: "https://github.com/Sieep-Coding/",
    RSS: "/rss.xml",
  },
};
