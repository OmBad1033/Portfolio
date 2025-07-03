// index.js
export const servicesData = [
  {
    title: "Full Stack Web Development",
    description:
      "I build robust, secure, and high-performance web applications using modern technologies like Next.js, React, Node.js, and Symfony. From database design to interactive UIs, your project will be future-proof and scalable.",
    items: [
      {
        title: "Modern Frontend",
        description:
          "(Next.js 14+, React 18+, TailwindCSS, Radix UI, TypeScript, Responsive UI/UX)",
      },
      {
        title: "Scalable Backend",
        description:
          "(Node.js, Express.js, Symfony 6.4+, REST & GraphQL APIs with Apollo, Clerk Auth)",
      },
      {
        title: "Database Solutions",
        description:
          "(MySQL, MongoDB, Prisma ORM, Optimized Queries, Schema Design)",
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    description:
      "I ensure smooth deployment and operations with AWS solutions like S3, EC2, Lambda, Amplify, Route 53, API Gateway, and CloudFront. CI/CD pipelines and Docker keep your product reliable at any scale.",
    items: [
      {
        title: "Cloud Infrastructure",
        description:
          "(AWS EC2, S3, Lambda, API Gateway, CloudFront, Route 53, Amplify Hosting)",
      },
      {
        title: "CI/CD & Containers",
        description: "(GitHub Actions, Docker, Automated Deployments)",
      },
      {
        title: "Performance & Monitoring",
        description: "(Caching, Compression, Lighthouse Optimization, Logging)",
      },
    ],
  },
  {
    title: "Security & Best Practices",
    description:
      "I prioritize clean code, secure systems, and reliable integrations. From OAuth and Clerk Auth to secure payments with Stripe, your app stays protected and trusted.",
    items: [
      {
        title: "Authentication & Authorization",
        description: "(OAuth, Clerk Auth, Secure Session Management)",
      },
      {
        title: "Payments & E-Commerce",
        description:
          "(Stripe Integration, Checkout Flows, Secure Transactions)",
      },
      {
        title: "Code Quality & Audits",
        description:
          "(Refactoring, Pen Testing, Vulnerability Checks, Tech Debt Cleanup)",
      },
    ],
  },
  {
    title: "AI/ML & Automation",
    description:
      "I integrate AI/ML solutions using OpenAI, DeepSeek, or Mistral for advanced features like chatbots, content generation, or smart automation to boost your product’s edge.",
    items: [
      {
        title: "Generative AI",
        description: "(OpenAI GPT-4.1 nano Integration, AI Assistants)",
      },
      {
        title: "Data Processing",
        description: "(Custom ML Scripts in Python, Smart Automation)",
      },
      {
        title: "API Integrations",
        description: "(Secure AI/ML APIs, Custom Workflows)",
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "MultiChat – AI Social Media Manager",
    description:
      "An AI-powered tool that connects to users’ social media profiles and auto-responds to messages/comments. Offers analytics dashboards, automated workflows, and paid plans with Stripe.",
    href: "https://github.com/OmBad1033/Many-Chat",
    image: "/projectImages/multichat.png",
    bgImage: "/assets/backgrounds/ai.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "DeepSeek API" },
      { id: 4, name: "Prisma ORM" },
      { id: 5, name: "Clerk Auth" },
      { id: 6, name: "Stripe" },
      { id: 7, name: "Redux" },
      { id: 8, name: "Radix UI" },
    ],
  },
  {
    id: 2,
    name: "MySocials – Social Media Web App",
    description:
      "A real-time social media platform inspired by Twitter with live messaging, post feeds, likes/comments, and secure JWT-based auth. Includes Socket.io for live chat and read receipts.",
    href: "https://mysocials-om.onrender.com/auth",
    image: "/projectImages/my-socials.png",
    bgImage: "/assets/backgrounds/social.jpg",
    frameworks: [
      { id: 1, name: "React 18" },
      { id: 2, name: "Express.js" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "JWT" },
      { id: 6, name: "Chakra UI" },
      { id: 7, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "Space BackOffice CMS - Stellantis",
    description:
      "A multi-brand CMS platform serving 14 global automotive brands across 20+ countries, empowering 100+ editors to manage localized content, digital assets, and widget configurations. Reduced manual updates by 70% and improved deployment speed by 60%.",
    href: "#",
    image: "/projectImages/space-bo.png",
    bgImage: "/assets/backgrounds/automotive.jpg",
    frameworks: [
      { id: 1, name: "Symfony 6.4" },
      { id: 2, name: "Twig" },
      { id: 3, name: "MySQL" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "AWS S3" },
      { id: 6, name: "Bootstrap" },
      { id: 7, name: "JavaScript" },
      { id: 8, name: "jQuery" },
      { id: 9, name: "LDAP" },
    ],
  },
  {
    id: 4,
    name: "Global Policy Portal - Stellantis",
    description:
      "A centralized policy portal for routing users to localized privacy/legal pages and support contacts. Powered by a fully manageable JSON structure. Processed 115,000+ global requests in the first month alone.",
    href: "https://preprod.gp.stellantis.com/home",
    image: "/projectImages/gp.png",
    bgImage: "/assets/backgrounds/privacy.jpg",
    frameworks: [
      { id: 1, name: "Next.js 14" },
      { id: 2, name: "Tailwind CSS" },
    ],
  },
  {
    id: 5,
    name: "GraphQL Expense Tracker",
    description:
      "An intuitive expense tracker built with Apollo GraphQL and MongoDB. Visualizes spending with graphs, real-time updates, and category-based analytics.",
    href: "https://gql-expensetracker-om.xyz/login",
    image: "/projectImages/expense-tracker.png",
    bgImage: "/assets/backgrounds/finance.jpg",
    frameworks: [
      { id: 1, name: "React 18" },
      { id: 2, name: "Express.js" },
      { id: 3, name: "Apollo GraphQL" },
      { id: 4, name: "MongoDB" },
    ],
  },
];

export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/ali.sanatidev/reels/" },
  {
    name: "Youtube",
    href: "https://www.youtube.com/channel/UCZhtUWTtk3bGJiMPN9T4HWA",
  },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ali-sanati/" },
  { name: "GitHub", href: "https://github.com/Ali-Sanati" },
];

export const contactInfo = {
  email: "om.badavanache05@gmail.com", // Replace with your actual email
  linkedin: "https://www.linkedin.com/in/ombdvche/", // Replace with your LinkedIn
  github: "https://github.com/OmBad1033", // Replace with your GitHub
  instagram: "https://www.instagram.com/om_bdvch/", // Replace with your Instagram
  resumeUrl: "/om_bdvche_CV.pdf",
};

export const techStackData = {
  // Languages
  typescript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  javascript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  php: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  sql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",

  // Frameworks & Libraries
  nextjs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  react:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  express:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  nodejs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  symfony:
    "https://imgs.search.brave.com/ZZDZXB928jC0JZXey3Ivk3cfwMyJVc3H_dtJFhtghSg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJhbmRmZXRjaC5p/by9pZEtuV2Z0SkhG/L3cvNDAwL2gvNDAw/L3RoZW1lL2Rhcmsv/aWNvbi5wbmc_Yz0x/YnhpZDY0TXVwN2Fj/emV3U0FZTVgmdD0x/NzUwOTAyMjY0Mzk3",
  graphql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  tailwind:
    "https://imgs.search.brave.com/VXppz4fZeZ14qHLF3d-Jv2hIoqW5sAxSpjrA_A6EN3Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9icmFuZHMt/YW5kLXNvY2lhbC1t/ZWRpYS90YWlsd2lu/ZC1jc3MtaWNvbi5w/bmc",

  // Databases
  mongodb:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  mysql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",

  // AWS Services (Individual)
  s3: "https://imgs.search.brave.com/icld-Jox4ZgpgfOnt67qaB9L_W_lvIMNRWjKF5HZQEs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY29u/LmljZXBhbmVsLmlv/L0FXUy9zdmcvU3Rv/cmFnZS9TMy1vbi1P/dXRwb3N0cy5zdmc",
  ec2: "https://imgs.search.brave.com/ZrcJPhl0g-UAnwLQ-cKJVjAettiMzNU1BxCY5lE5EAo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2xpZmZ5LmNvbS9z/aXRlcy9kZWZhdWx0/L2ZpbGVzL2lubGlu/ZS1pbWFnZXMvQW1h/em9uLUVDMl9kYXJr/LWJnLmpwZw",
  lambda:
    "https://imgs.search.brave.com/3knoUko1ie7cMvnhlRgp0gG5o9qBIVSoz4zb5TKyedk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9icmFuZHMt/YW5kLXNvY2lhbC1t/ZWRpYS9sYW1iZGEt/aWNvbi5wbmc",
  amplify:
    "https://imgs.search.brave.com/nE93UsRs1X78gBWAT1-NdQJkcwQI3n_aahEiXuGKuJQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdHls/ZXMucmVkZGl0bWVk/aWEuY29tL3Q1XzJx/dm50L3N0eWxlcy9j/b21tdW5pdHlJY29u/X2xzYXVoczM1dDJ1/NTEucG5n",
  route53:
    "https://imgs.search.brave.com/MGFYLn5FvcB09IK7MkWx4BGjDZdnTrMSeG8Bx2i2yJ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3ZncmVwby5jb20v/c2hvdy8zNTM0NTkv/YXdzLXJvdXRlNTMu/c3Zn",
  apigateway:
    "https://imgs.search.brave.com/3hkeC6Gfucj1FrkRkauz0jI6oWWhcqoqkgwdJHkA9ns/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXppbGxhLmNv/bS9jbGlwYXJ0cy83/Nzk2NTg2L2F3cy1h/cGktZ2F0ZXdheS1p/Y29uLWNsaXBhcnQt/c20ucG5n",
  cloudfront:
    "https://imgs.search.brave.com/C_8_cZW08iir3e7K6uPQFs3rHmAjRm3EaElg-9Q852I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY29u/LmljZXBhbmVsLmlv/L0FXUy9zdmcvTmV0/d29ya2luZy1Db250/ZW50LURlbGl2ZXJ5/L0Nsb3VkRnJvbnQu/c3Zn",

  // AI/ML Tools
  openai:
    "https://imgs.search.brave.com/rttXvzyH_CMm9o93y0cAxJ2Ewmjm8XZFkAOp15O2d6k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY4MTE0MjUw/M29wZW5haS1pY29u/LXBuZy5wbmc",
  deepseek:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", // placeholder
  mistral:
    "https://imgs.search.brave.com/WESnJSzJNJxlTRt2IsiV75LqynwnEvNjmb91IvZlpPc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RyZWFtbGlu/ZWhxLmNvbS9pbWFn/ZS9wcml2YXRlL3df/MzAwLGhfMzAwLGFy/XzEvZl9hdXRvL3Yx/L2ljb25zLzQvbWlz/dHJhbC1haS1pY29u/LTNkamtwanlrczY0/NWFoM2JnNnpieG8u/cG5nL21pc3RyYWwt/YWktaWNvbi03Mndm/MDl0NnlsbHdxZmt5/NGptM3FsLnBuZz9f/YT1EQVRBZHRYeVpB/QTA", // placeholder

  // Tools & Platforms
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  github:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  stripe:
    "https://imgs.search.brave.com/Eh0mv0eOyoF4ZmUpni97fyPawNZQU2EVnnvsQezb4nQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3RyaXBlYXNz/ZXRzLmNvbS9mem4y/bjFuenE5NjUvSFRU/T2xvTlBoaXNWOVA0/aGxNUE5BL2NhY2Yx/YmI4OGI5ZmM0OTJk/ZmFkMzQzNzhkODQ0/MjgwL1N0cmlwZV9p/Y29uXy1fc3F1YXJl/LnN2Zz9xPTgwJnc9/MTA4Mg",
  prisma:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  redux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  radixui:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", // placeholder
  clerk:
    "https://imgs.search.brave.com/c9fH307Af8azxJq8UBdS3iK_VGWGuBKM1JucNKhfeEQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdXBh/YmFzZS5jb20vX25l/eHQvaW1hZ2U_dXJs/PWh0dHBzOi8vb2J1/bGRhbnJwdGxva3R4/Y2Zmdm4uc3VwYWJh/c2UuY28vc3RvcmFn/ZS92MS9vYmplY3Qv/cHVibGljL2ltYWdl/cy9pbnRlZ3JhdGlv/bnMvY2xlcmsvY2xl/cmstaWNvbi1uZXcu/c3ZnJnc9MTI4JnE9/NzU", // placeholder
};
