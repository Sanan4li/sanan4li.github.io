export const profile = {
  name: "Sanan Ali",
  shortName: "SANAN",
  title: "AI Software Engineer",
  roles: [
    "AI Software Engineer",
    "Full Stack JavaScript Developer",
    "React & React Native Expert",
    "AI / LLM Integration Engineer",
    "Electron Desktop App Developer",
  ],
  location: "Lahore, Pakistan",
  email: "alisanan620@gmail.com",
  phone: "+92 346 4674965",
  summary:
    "Highly motivated AI Software Engineer with 6+ years of industry experience building and maintaining Web, Desktop and Mobile applications. Skilled in JavaScript, TypeScript, React, Electron, and AI/LLM integration. Effective team player with strong analytical skills and a proven ability to deliver complex, production-grade solutions.",
  social: {
    github: "https://github.com/Sanan4li",
    linkedin: "https://www.linkedin.com/in/Sanan4li",
    twitter: "https://twitter.com/Sanan4li",
    facebook: "https://www.facebook.com/Sanan4li",
  },
};

export const stats = [
  { label: "Years of Experience", value: 6, suffix: "+" },
  { label: "Projects Delivered", value: 30, suffix: "+" },
  { label: "Technologies Mastered", value: 20, suffix: "+" },
  { label: "Hackathon Won", value: 1, suffix: "" },
];

export const experience = [
  {
    company: "ByteMage",
    role: "Senior Software Engineer",
    period: "Jun 2023 — Present",
    location: "Lahore, Pakistan",
    current: true,
    points: [
      "Revamped AskHumans with React and NestJS — built the frontend architecture, integrated 3rd party services and libraries, implemented features, and maintained the application.",
      "Integrated OpenAI APIs for survey response insights; leveraged vector databases and RAG architecture to scale the application.",
      "Developed and maintained a cross-platform Desktop Application built with Electron JS, integrating Swift plugins and Windows binary files for system audio recording, with automated releases and auto-updates via GitHub.",
      "Translated Figma designs to pixel-perfect, mobile-adaptive UIs using React and TailwindCSS.",
      "Participated in client meetings for requirement gathering, aligned requirements with the UI/UX designer, and delegated tasks to junior developers.",
    ],
  },
  {
    company: "ByteMage",
    role: "Software Engineer",
    period: "Jun 2021 — Jun 2023",
    location: "Lahore, Pakistan",
    current: false,
    points: [
      "Maintained OfficeTour and HomeTour with React and TailwindCSS, implementing new user-requested features across frontend and backend.",
      "Worked on Spacetrics using VueJS and Vuex with Ruby on Rails on the backend for feature maintenance and development.",
      "Integrated 3rd party error monitoring tools including Sentry and PostHog to ensure reliable, error-free applications.",
    ],
  },
  {
    company: "Bruantech",
    role: "Web Developer",
    period: "Sep 2020 — Jun 2021",
    location: "Remote",
    current: false,
    points: [
      "Collaborated with designers to deliver multiple client websites including SeatTeamPaintball, LeisureSportsPaintball, and MyHomesNG.",
      "Architected website frontends and handled backend integration with MySQL via PHP; deployed applications to web hosting with domain setup and SSL configuration.",
      "Bug fixes in developed applications, integration of backend APIs and 3rd party services and WordPress plugin integrations.",
    ],
  },
  {
    company: "Fiverr & Upwork",
    role: "Freelance Web Designer",
    period: "Aug 2019 — Sep 2020",
    location: "Remote",
    current: false,
    points: [
      "Delivered client web projects including e-commerce sites and mobile applications using React Native, Redux, Firebase, and SQL.",
      "Built projects including a Shopping App (React Native, Redux, Firebase) and various web apps (HTML, TailwindCSS, PHP, MySQL).",
    ],
  },
];

export const work = [
  {
    role: "Senior Software Engineer",
    period: "2021 — Present",
    place: "ByteMage — Lahore, Pakistan",
  },
  {
    role: "Freelancer",
    period: "2019 — 2021",
    place: "Web & Mobile Development — Fiverr & Upwork",
  },
];

export const education = [
  {
    degree: "BS Software Engineering",
    period: "2015 — 2019",
    school: "University of Gujrat — Hafiz Hayat Campus",
  },
  {
    degree: "DAE (Electronics)",
    period: "2013 — 2015",
    school: "Punjab Board of Technical Education — Lahore",
  },
];

export const skills = [
  {
    category: "Frontend",
    command: "ls ./frontend",
    items: [
      "React JS",
      "Next JS",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Vue JS",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Backend",
    command: "ls ./backend",
    items: ["Node JS", "Nest JS", "RESTful APIs", "JavaScript (ES6+)", "PHP"],
  },
  {
    category: "Mobile & Desktop",
    command: "ls ./native",
    items: [
      "React Native",
      "Electron JS",
      "Swift (macOS)",
      "C# (Windows)",
      "IPC Architecture",
    ],
  },
  {
    category: "Databases",
    command: "ls ./databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Firebase"],
  },
  {
    category: "AI & ML",
    command: "ls ./ai",
    items: [
      "OpenAI APIs",
      "Deepgram APIs",
      "RAG Architectures",
      "Vector Databases",
      "LLM Integration",
      "Prompt Engineering",
    ],
  },
  {
    category: "Cloud, DevOps & Tools",
    command: "ls ./tools",
    items: [
      "GitHub Actions",
      "Google Cloud Platform",
      "Git & GitHub",
      "Postman",
      "Notion",
      "Figma",
      "VS Code",
    ],
  },
];

export type Project = {
  title: string;
  image: string;
  tags: string[];
};

export const projectCategories = [
  {
    id: "web-design",
    label: "Web Design",
    projects: [
      {
        title: "Seal Team Paintball",
        image: "/images/seal-team.jpg",
        tags: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "Seal Team Paintball — Store",
        image: "/images/seal-team-2.jpg",
        tags: ["WordPress", "WooCommerce"],
      },
      {
        title: "Perform Sports",
        image: "/images/perform.jpg",
        tags: ["HTML", "TailwindCSS"],
      },
      {
        title: "Kikki Nails",
        image: "/images/kikki-nails.jpg",
        tags: ["HTML", "CSS", "JS"],
      },
      {
        title: "Main Land Group",
        image: "/images/main-land-group.jpg",
        tags: ["HTML", "CSS", "PHP"],
      },
      {
        title: "Bruantech",
        image: "/images/bruantech.jpg",
        tags: ["HTML", "TailwindCSS"],
      },
      {
        title: "MyHomesNG",
        image: "/images/my-homes-ng.jpg",
        tags: ["HTML", "CSS", "PHP"],
      },
      {
        title: "ASI Hospital",
        image: "/images/asi-hospital.jpg",
        tags: ["HTML", "CSS", "PHP"],
      },
      {
        title: "Never Go Alone",
        image: "/images/never-go-alone.jpg",
        tags: ["HTML", "CSS", "JS"],
      },
      {
        title: "Odgres",
        image: "/images/odgres.jpg",
        tags: ["HTML", "CSS", "JS"],
      },
      {
        title: "Paintball Arena",
        image: "/images/paint-ball-2.jpg",
        tags: ["HTML", "CSS", "JS"],
      },
      {
        title: "Complete Solutions",
        image: "/images/complete.png",
        tags: ["HTML", "CSS", "JS"],
      },
    ] as Project[],
  },
  {
    id: "web-dev",
    label: "Web Development",
    projects: [
      {
        title: "AskHumans",
        image: "/images/survey.jpg",
        tags: ["React", "NestJS", "OpenAI", "RAG"],
      },
      {
        title: "Hall Booking Platform — Search",
        image: "/images/search-hall.png",
        tags: ["React", "Node JS", "MongoDB"],
      },
      {
        title: "Hall Booking Platform — Online Booking",
        image: "/images/book-online.png",
        tags: ["React", "Node JS", "Stripe"],
      },
      {
        title: "Marriage Hall Listings",
        image: "/images/marriage-hall.png",
        tags: ["React", "Redux", "REST APIs"],
      },
    ] as Project[],
  },
  {
    id: "mobile",
    label: "Mobile Apps",
    projects: [
      {
        title: "Music Player App",
        image: "/images/music.jpg",
        tags: ["React Native", "Redux"],
      },
      {
        title: "Books App",
        image: "/images/books.jpg",
        tags: ["React Native", "Firebase"],
      },
      {
        title: "Shopping App",
        image: "/images/shooping.jpg",
        tags: ["React Native", "Redux", "Firebase"],
      },
      {
        title: "Quotes App",
        image: "/images/quotes.jpg",
        tags: ["React Native"],
      },
      {
        title: "COVID-19 Tracker",
        image: "/images/coronavirus.jpg",
        tags: ["React Native", "REST APIs"],
      },
      {
        title: "Contribute Now — BuildForCovid19 Winner",
        image: "/images/contribute.jpg",
        tags: ["React Native", "Firebase", "Hackathon 🏆"],
      },
    ] as Project[],
  },
  {
    id: "desktop",
    label: "Desktop Apps",
    projects: [
      {
        title: "Audio Recorder — Dashboard",
        image: "/images/1.png",
        tags: ["Electron JS", "Swift", "C#"],
      },
      {
        title: "Audio Recorder — Sessions",
        image: "/images/2.png",
        tags: ["Electron JS", "IPC"],
      },
      {
        title: "Audio Recorder — Recording",
        image: "/images/3.png",
        tags: ["Electron JS", "Swift Plugins"],
      },
      {
        title: "Audio Recorder — Settings",
        image: "/images/4.png",
        tags: ["Electron JS", "Auto Updates"],
      },
      {
        title: "Audio Recorder — Releases",
        image: "/images/5.png",
        tags: ["Electron JS", "GitHub Actions"],
      },
    ] as Project[],
  },
];

export const achievements = [
  {
    title: "BuildForCovid19 Worldwide Hackathon Winner",
    description:
      "Won the worldwide hackathon organized by Facebook Developer Circles with the Contribute Now project.",
    icon: "trophy",
  },
  {
    title: "Developer Circles Gujrat — Volunteer",
    description:
      "Successfully organized various events in Developer Circles Gujrat as a volunteer.",
    icon: "users",
  },
  {
    title: "Study Head — Software Engineering Society",
    description:
      "Led study initiatives as Study Head in the Software Engineering Society, University of Gujrat.",
    icon: "book",
  },
];
