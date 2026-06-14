import {
  backend,
  chatzy,
  connectify,
  css,
  devcanvas,
  Devscreen,
  Ecom,
  express,
  git,
  html,
  javascript,
  MERN,
  mobile,
  mongodb,
  neosao,
  nextjs,
  nodejs,
  PixelForge,
  postgre,
  quickbite,
  REACT_JS,
  reactjs,
  tailwind,
  Twitter,
  typescript,
  web,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "certificates",
    title: "Certificates",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yash-lagare-814b37299",
    icon: "FaLinkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/YashLagare",
    icon: "FaGithub",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/yashlagare/?hl=en",
    icon: "FaInstagram",
  },
  {
    name: "Twitter",
    url: "https://x.com/YashLagare",
    icon: "FaTwitter",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Responsive Web Applications",
    icon: mobile,
  },
  // {
  //   title: "Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
    position: [0, 0, 0],
  },
  {
    name: "Next JS",
    icon: nextjs,
    position: [2, 0, 0],
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgre,
  },
  // {
  //   name: "sql",
  //   icon: sql,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  // {
  //   name: "Java",
  //   icon: java,
  // },
  // {
  //   name: "JWT",
  //   icon: jwt,
  // },
  // {
  //   name: "NextAuth",
  //   icon: nextauth,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const projects = [
  {
    slug: "pixelforge",
    tagline:
      "AI-powered image transformation platform built with Next.js and OpenAI.",
    quickFacts: {
      Category: "Full Stack SaaS",
      Duration: "3 Weeks",
      Role: "Full Stack Developer",
      Status: "Production Ready",
    },
    name: "PixelForge AI Studio",
    description:
      "PixelForge AI Studio is a full-stack AI-powered image restyling platform built with Next.js and TypeScript, designed to transform user-uploaded images into high-quality artistic outputs using OpenAI’s image models. The project leverages AI-assisted development and advanced prompt engineering to accelerate feature development while maintaining strong type safety and scalability. TypeScript is used across the application to enforce strict typing for API contracts, database models, and application state, improving reliability and maintainability. The platform features a modern studio interface with curated style presets, along with secure authentication via Clerk, optimized image handling using ImageKit, and scalable data management with PostgreSQL and Drizzle ORM.",

    features: [
      "Built with TypeScript for strong type safety across frontend and backend.",
      "AI-assisted development using advanced prompt engineering.",
      "AI-powered image transformation using OpenAI GPT Image models.",
      "Dynamic prompt generation for consistent artistic outputs.",
      "Upload and restyle images into multiple presets (Anime, 3D, Clay, etc.).",
      "Secure authentication and session management using Clerk.",
      "Optimized image upload and delivery using ImageKit.",
      "Generation history tracking with PostgreSQL and Drizzle ORM.",
      "Quota-based usage system with Free, Pro, and Studio tiers.",
      "Real-time preview system for uploaded and generated images.",
      "Responsive UI built with Next.js, Tailwind CSS, and Radix UI.",
    ],

    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
      { name: "PostgreSQL", color: "orange-text-gradient" },
      { name: "Drizzle ORM", color: "blue-text-gradient" },
      { name: "OpenAI", color: "green-text-gradient" },
      { name: "Prompt Engineering", color: "pink-text-gradient" },
      { name: "Clerk", color: "blue-text-gradient" },
      { name: "ImageKit", color: "orange-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "shadcn", color: "orange-text-gradient" },
    ],

    image: PixelForge,

    source_code_link: "https://github.com/YashLagare/pixelForge",
    live_link: "https://pixel-forge-zeta.vercel.app/",
  },

  {
    slug: "devcanvas",
    tagline: "Community-driven code sharing platform with real-time sync.",
    quickFacts: {
      Category: "Web Application",
      Duration: "2 months",
      Role: "Full Stack Developer",
      Status: "Production Ready",
    },
    name: "DevCanvas",
    description:
      "DevCanvas is a full-stack community-driven code sharing platform built with Next.js, Convex, and Clerk, enabling developers to create, discover, and manage code snippets seamlessly. The platform features secure authentication, real-time database synchronization, interactive commenting, and snippet bookmarking through a star system. Convex powers scalable backend operations, while Monaco Editor provides an enhanced code viewing experience. Clerk webhooks automatically synchronize user data, and Lemon Squeezy integration enables Pro subscriptions with premium language execution features. A modern, responsive UI ensures an engaging experience across all devices.",
    features: [
      "Secure authentication and user management using Clerk.",
      "Create, browse, search, and manage community code snippets.",
      "Interactive commenting system with ownership-based moderation.",
      "Star and bookmark favorite snippets for quick access.",
      "Read-only Monaco Editor integration for code viewing.",
      "Automatic user synchronization through Clerk webhooks.",
      "Pro subscription support with Lemon Squeezy payment integration.",
      "Language-based premium feature gating and execution tracking.",
      "Responsive and modern UI optimized for all screen sizes.",
    ],
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Convex", color: "green-text-gradient" },
      { name: "Clerk", color: "pink-text-gradient" },
      { name: "Tailwind CSS", color: "orange-text-gradient" },
      { name: "Monaco Editor", color: "blue-text-gradient" },
      { name: "Lemon Squeezy", color: "green-text-gradient" },
      { name: "Framer Motion", color: "pink-text-gradient" },
      { name: "TypeScript", color: "orange-text-gradient" },
    ],
    image: devcanvas,
    source_code_link:
      "https://github.com/YashLagare/DevCanvas-Your-Coding-Workspace",
    live_link: "https://dev-canvas-your-coding-workspace.vercel.app/",
  },

  {
    slug: "connectify",
    tagline: "Real-time communication platform for messaging and video calls.",
    quickFacts: {
      Category: "Real-time Communication",
      Duration: "1 Month",
      Role: "Full Stack Developer",
      Status: "Live",
    },
    name: "Connectify",
    description:
      "Connectify is a full-stack real-time communication platform built with React, Express, MongoDB, Clerk, and Stream, enabling teams to collaborate through instant messaging and video calls. The application provides secure authentication, real-time chat, direct messaging, channel management, and high-quality video conferencing. Stream Chat and Stream Video power seamless real-time interactions, while Inngest automates user lifecycle synchronization between Clerk, MongoDB, and Stream services. A modern responsive interface ensures a smooth collaboration experience across desktop and mobile devices.",

    features: [
      "Secure authentication and user management using Clerk.",
      "Real-time messaging powered by Stream Chat.",
      "One-to-one direct messaging with unread message indicators.",
      "Public and private channel creation with member management.",
      "Invite users to channels and manage channel memberships.",
      "Pinned messages and interactive threaded conversations.",
      "High-quality video calling powered by Stream Video.",
      "Automatic user synchronization using Inngest event-driven workflows.",
      "Protected backend APIs with Clerk authentication middleware.",
      "Responsive modern UI optimized for desktop and mobile devices.",
    ],

    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Express.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "Clerk", color: "orange-text-gradient" },
      { name: "Stream Chat", color: "blue-text-gradient" },
      { name: "Stream Video", color: "green-text-gradient" },
      { name: "Inngest", color: "pink-text-gradient" },
      { name: "Tailwind CSS", color: "orange-text-gradient" },
    ],

    image: connectify,
    source_code_link: "https://github.com/YashLagare/Connectify",
    live_link: "https://connectify-frontend-alpha.vercel.app/auth",
  },

  {
    slug: "devscreen",
    tagline: "MERN stack online interview platform with secure communication.",
    quickFacts: {
      Category: "Interview Platform",
      Duration: "2 Months",
      Role: "Full Stack Developer",
      Status: "Live",
    },
    name: "DevScreen",
    description:
      "DevScreen is a full-stack online interview platform built using the MERN stack, designed to streamline technical interviews with secure authentication and real-time communication. The platform uses Clerk for robust user authentication and Stream Chat for real-time messaging between candidates and interviewers. Scalable backend APIs were developed with Express and Mongoose to manage users, interviews, and chat workflows. React Query and Axios enable efficient data fetching, while a clean, responsive UI ensures a smooth experience across devices. Automated workflows powered by Inngest improve system reliability and overall performance.",
    features: [
      "Secure authentication and user management using Clerk.",
      "Real-time chat and communication powered by Stream Chat.",
      "Role-based workflows for candidates and interviewers.",
      "Scalable backend APIs for interviews, users, and messaging.",
      "Optimized data fetching using React Query and Axios.",
      "Clean, fully responsive UI for seamless interview experiences.",
      "Automated background workflows using Inngest for improved reliability.",
    ],
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "NodeJs", color: "green-text-gradient" },
      { name: "ExpressJs", color: "pink-text-gradient" },
      { name: "MongoDB", color: "orange-text-gradient" },
      { name: "Clerk", color: "blue-text-gradient" },
      { name: "Stream Chat", color: "green-text-gradient" },
      { name: "React Query", color: "pink-text-gradient" },
      { name: "Inngest", color: "orange-text-gradient" },
    ],
    image: Devscreen,
    source_code_link: "https://github.com/YashLagare/Online-interview-platform",
    live_link: "https://online-interview-platform-r8d4.onrender.com",
  },

  {
    slug: "chatzy",
    tagline: "Responsive real-time chat application powered by Socket.IO.",
    quickFacts: {
      Category: "Chat Application",
      Duration: "2 Months",
      Role: "Full Stack Developer",
      Status: "Live",
    },
    name: "Chatzy",
    description:
      "Chatzy is a fully responsive real-time chat web application built using the MERN stack, designed for seamless one-to-one messaging with live user presence. It features a clean, modern UI crafted with TailwindCSS, DaisyUI, and Lucide Icons, along with React Hot Toast for instant user feedback. The app leverages Socket.IO for real-time communication, Zustand for efficient state management, and JWT-based authentication for secure access. This project strengthened my expertise in real-time systems, full-stack development, and modern UI engineering. 🌐 Hosted on Render.",
    features: [
      "Real-time one-to-one messaging powered by Socket.IO.",
      "Live user online/offline status updates.",
      "Secure authentication and authorization using JWT.",
      "Fully responsive and modern UI with instant toast notifications.",
    ],
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "green-text-gradient",
      },
      {
        name: "Socket.io",
        color: "pink-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "orange-text-gradient",
      },
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
    ],
    image: chatzy,
    source_code_link: "https://github.com/YashLagare/fullstack-chat-app",
    live_link: "https://fullstack-chat-app-ygde.onrender.com",
  },

  {
    slug: "e-com-store",
    tagline: "Secure e-commerce web application with RESTful APIs.",
    quickFacts: {
      Category: "E-Commerce",
      Duration: "2 Months",
      Role: "Full Stack Developer",
      Status: "Live",
    },
    name: "E-Com Store",
    description:
      "E-Com Store is a full-stack e-commerce web application built to deliver a secure and seamless online shopping experience. The platform supports user authentication, product browsing, cart management, and secure checkout. It follows a scalable MERN-based architecture with RESTful APIs and a responsive UI for smooth usage across devices.",
    features: [
      "JWT-based authentication with secure login and signup flows.",
      "Browse products with detailed views including pricing and descriptions.",
      "Add, update, and remove products from the shopping cart.",
      "Order placement and basic order management functionality.",
      "RESTful APIs enabling smooth frontend–backend communication.",
      "MongoDB database integration for users, products, and orders.",
      "Fully responsive UI optimized for desktop and mobile devices.",
    ],
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "REST API", color: "green-text-gradient" },
      { name: "ExpressJs", color: "pink-text-gradient" },
      { name: "MongoDB", color: "orange-text-gradient" },
      { name: "TailwindCSS", color: "blue-text-gradient" },
      { name: "NodeJs", color: "green-text-gradient" },
      { name: "Strip-payment", color: "orange-text-gradient" },
    ],
    image: Ecom,
    source_code_link: "https://github.com/YashLagare/E-Com-Store",
    live_link: "https://e-com-store-1-mk69.onrender.com",
  },

  {
    slug: "quickbite",
    tagline: "Production-style multi-role food ordering and delivery platform.",
    quickFacts: {
      Category: "Delivery",
      Duration: "2 Months",
      Role: "Full Stack Developer",
      Status: "Live",
    },
    name: "QuickBite",
    description:
      "QuickBite is a production-style full-stack food ordering and delivery platform built using the MERN stack, designed around a real-world multi-role ecosystem (User, Shop Owner, Delivery Partner). The system implements secure JWT authentication via HTTP-only cookies, real-time order broadcasting and tracking using Socket.IO, Razorpay payment verification with server-side signature validation, and geo-based shop filtering using 2dsphere indexing. It follows a modular MVC backend architecture with role-based authorization, scalable folder structuring, and Redux Toolkit with state persistence on the frontend. This project reflects my ability to design and implement complex, real-time, multi-actor systems beyond standard CRUD applications.",
    features: [
      "Multi-role architecture (User, Owner, Delivery Partner) with role-based protected routes.",
      "Secure JWT authentication stored in HTTP-only cookies with middleware-based verification.",
      "Real-time order lifecycle updates (Pending → Preparing → Out for Delivery → Delivered) using Socket.IO.",
      "Razorpay integration with backend signature verification for secure online payments.",
      "Geo-location based shop discovery using MongoDB 2dsphere indexing.",
      "Cloudinary-based image upload pipeline using Multer middleware.",
      "Redux Toolkit with persistence for cart, session, and state synchronization.",
      "Modular MVC backend with clear separation of routes, controllers, models, and middleware.",
    ],
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "orange-text-gradient",
      },
      {
        name: "Socket.io",
        color: "blue-text-gradient",
      },
      {
        name: "ReduxToolkit",
        color: "green-text-gradient",
      },
      {
        name: "Razorpay",
        color: "pink-text-gradient",
      },
      {
        name: "Cloudinary",
        color: "orange-text-gradient",
      },
    ],
    image: quickbite,
    source_code_link: "https://github.com/YashLagare/QuickBite",
    live_link: "https://quickbite-9jda.onrender.com",
  },

  {
    slug: "twitter-clone",
    tagline: "Full-stack social media web application inspired by Twitter.",
    quickFacts: {
      Category: "Social Media",
      Duration: "3 Weeks",
      Role: "Full Stack Developer",
      Status: "Live",
    },
    name: "Twitter Clone",
    description:
      "Twitter Clone is a full-stack social media web application inspired by Twitter, built using the MERN stack. It enables users to securely register and log in, post tweets, like posts, and manage profiles in real time. The backend is powered by Express.js and MongoDB with JWT authentication and bcrypt.js for secure data handling, while Cloudinary enables seamless image uploads. The application features a clean, modern, and fully responsive UI and is deployed on Render for reliable performance.",
    features: [
      "User authentication and authorization using JWT and bcrypt.js.",
      "Create, read, like, and manage tweets in real time.",
      "User profile management with profile image uploads via Cloudinary.",
      "Secure backend APIs built with Express.js and MongoDB.",
      "Responsive and modern UI optimized for all screen sizes.",
      "Deployed on Render for production-ready performance.",
    ],
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "REST API", color: "green-text-gradient" },
      { name: "ExpressJs", color: "pink-text-gradient" },
      { name: "MongoDB", color: "orange-text-gradient" },
      { name: "NodeJs", color: "green-text-gradient" },
      { name: "Cloudinary", color: "blue-text-gradient" },
    ],
    image: Twitter,
    source_code_link: "https://github.com/YashLagare/TWITTER-CLONE",
    live_link: "https://twitter-clone-c1gj.onrender.com",
  },
];

const certificates = [
  {
    title: "Full-stack Developer Certificate",
    issuer: "30dc.graphy.com",
    date: "13 November 2025",
    credential_url:
      "https://30dc.graphy.com/verify-certificate?serialno=N3NS5WJH",
    image: MERN,
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Express", color: "orange-text-gradient" },
      { name: "NodeJs", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "TailwindCSS", color: "orange-text-gradient" },
      { name: "JavaScript", color: "green-text-gradient" },
      { name: "HTML & CSS", color: "blue-text-gradient" },
    ],
  },
  {
    title: "JavaScript and React JS Certificate",
    issuer: "30dc.graphy.com",
    date: "05 June 2026",
    credential_url:
      "https://30dc.graphy.com/verify-certificate?serialno=UC7UIZRO",
    image: REACT_JS,
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "JavaScript", color: "yellow-text-gradient" },
      { name: "HTML", color: "orange-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
    ],
  },
];

const experiences = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Frontend Developer Intern",
    company_name: "NeoSao Services Pvt. Ltd.",
    icon: neosao,
    iconBg: "#E6DEDD",
    date: "July 2025 - June 2026",
    points: [
      "Contributed to real-world client projects using React.js, Next.js, TypeScript, and Tailwind CSS. Built reusable frontend components, integrated REST APIs, improved application performance, and collaborated in a team environment using modern development workflows and version control.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

export {
  certificates,
  experiences,
  //  testimonials,
  projects,
  services,
  technologies
};

