export const info = {
  name: "Nick Stambaugh",
  brief_description:
    "Entrepreneur & Enterprise Software Engineer",
  role: "Full Stack Engineer",
  picture: "/img.jpg",
  picture_alt: "Nick Stambaugh",
  location: "Grand Rapids, MI",
  cv: "/Nick_Stambaugh-Resume.pdf",

  about: {
    description: `

    I'm the founder of Luniv Consulting, LLC. I am also a full-stack engineer, an expert & former professional
    in business intelligence, data analysis, and economics. 


    My journey began by making complex data accessible through academic reports, dashboards 
    and automated reports, and it evolved into building robust enterprise 
    software that streamlines business and production processes.  I partner 
    with stakeholders to not only understand their vision but to actively 
    bring it to life through a blend of technical expertise and strategic insight.  
    While my professional work focuses on C#, .NET, and JavaScript, 
    I also enjoy experimenting with new technologies like TypeScript, Python, Go, and Lua in my spare time. 
    Beyond coding, I have a strong background in economics and philosophy,
    which enriches my approach to problem-solving and decision-making in the tech world.`,
    education: [
      {
        title: "BS in Economics and Philosophy",
        date: "Grand Valley State University",
        location: "Grand Valley State University",
        // gpa: "3.4",
        thesis: "Deepened my understanding of economic systems and critical reasoning, offering me unique perspectives on leadership, business, & software development.",
      },
    ],
    experience: [
      {
        title: "Founder",
        date: "2022 - Present",
        location: "luniv.tech",
        link: "https://www.luniv.tech/",
        description:
          `Book a free consultation today: luniv.tech`,
      },
      {
        title: "Junior Application Developer",
        date: "2025 - Present",
        location: "Display Pack Inc",
        link: "https://www.displaypack.com/",
        description:
          `Developing enterprise software to automate business and production processes.
          Working with C#, JavaScript, and .NET MVC while applying Test-Driven Development principles with xUnit.
          Helping modernize and streamline internal tools that drive real-world manufacturing efficiency.`,
      },
      {
        title: "Data Analyst",
        date: "2024 - 2025",
        location: "NxGen MDx",
        link: "https://www.nxgenmdx.com/",
        description:
           `Transformed complex data into meaningful insights, helping drive business decisions.
            Streamlined reporting processes to improve efficiency for leadership and sales teams.`,
      },
      {
        title: "Business Intelligence Developer",
        date: "2023 - 2024",
        location: "National Nail",
        link: "https://www.nationalnail.com/",
        description:
        "Creating impactful visualizations, automating reporting processes, and providing analytical support to enhance business performance.",
      },
      {
        title: "Business Intelligence Analyst",
        date: "2022 - 2023",
        location: "The Right Place, Inc.",
        link: "https://www.rightplace.org/",
        description:
        `Built interactive dashboards and automated reports to enhance business performance.
        Provided analytical support to inform executive decision-making.`,
      },
      {
        title: "Researcher",
        date: "2021",
        location: "University of Michigan Nuclear Engineering & Radiological Sciences",
        link: "https://ners.engin.umich.edu/",
        description:
        `Conducted economic analysis of U.S. nuclear power plants, focusing on feasibility and efficiency.
        Worked on data modeling and analysis, contributing to a deeper understanding of nuclear energy economics.`,
      },
    ],

    skills: [ {
      Languages: ["C#", "Python", "JavaScript", "TypeScript", "Go", "Lua", "HTML", "CSS", "SQL", "C/C++", "Bash", "R",],
      Frameworks: ["React", ".NET", "Node.js", "Electron", "Astro", "TailwindCSS", "Bootstrap", "HTMX", "Express.js",],
      Libraries: ["xUnit", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "D3.js", "Chart.js",],
      Databases: ["SQLite", "SQL Server", "Dynamics AX", "Salesforce", "Zoho"],
      Concepts: ["TDD", "Software Architect", "OOP", "MVC", "Data Analysis", "Data Viz", "Web Dev", "API Development", "Agile Methods",],
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
    website: "https://luniv.tech",
  },
};
