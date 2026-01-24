import {
  backend,
  chatzy,
  css,
  Devscreen,
  Ecom,
  express,
  git,
  html,
  javascript,
  mobile,
  mongodb,
  neosao,
  nextjs,
  nodejs,
  reactjs,
  tailwind,
  Twitter,
  typescript,
  web
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
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
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
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
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
    live_link: "https://online-interview-platform-32e2k.sevalla.app/",
  },

  {
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
    title: "Full stack Developer Intern",
    company_name: "NeoSao Services Pvt. Ltd.",
    icon: neosao,
    iconBg: "#E6DEDD",
    date: "July 2025 - Present",
    points: [
      "Contributing to real-world projects using the MERN stack, Next.js, and TypeScript in an agile team environment. Working across frontend and backend to build scalable, reusable components and full-stack features. Integrating REST APIs, managing application state, and delivering smooth, user-focused experiences. Developing and optimizing backend services using Node.js, Express, and MongoDB, including authentication flows and third-party integrations. Collaborating closely with designers and developers to maintain performance, code quality, and best practices while delivering production-ready features on tight timelines.",
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
  experiences,
  //  testimonials,
  projects,
  services,
  technologies
};

