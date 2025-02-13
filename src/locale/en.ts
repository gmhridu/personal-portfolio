import React from "react";
import { FaCode, FaReact } from "react-icons/fa";
import {
  SiAsana,
  SiBootstrap,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJirasoftware,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import iPhoneImg from "../../public/projects/iPhone.png";
import Certificate from "../../public/certifications/certificate.png";

const en = {
  links: [
    {
      name: "Home",
      hash: "#home",
    },
    {
      name: "About",
      hash: "#about",
    },
    {
      name: "Projects",
      hash: "#projects",
    },
    {
      name: "Skills",
      hash: "#skills",
    },
    {
      name: "Certifications",
      hash: "#certifications",
    },
    {
      name: "Experience",
      hash: "#experience",
    },
    {
      name: "Contact",
      hash: "#contact",
    },
  ],
  intro: {
    greeting: "Golam Mahabub Redoy",
    heading: "Full-Stack Developer",
    main: "I develop high-quality web applications",
    second:
      "My main stack includes React, NextJs, TypeScript, NodeJs, MongoDB & Postgres among other key technologies.",
    contactButton: "Contact me here",
    downloadCV: "Download CV",
  },
  about: {
    title: "About me",
    first: `I am a passionate Front-End Developer with experience in building modern and responsive web applications. With expertise in HTML, CSS, JavaScript, React, Next.js, and TailwindCSS, I create user-friendly and visually appealing interfaces. I also have knowledge of Node.js, Express.js, and MongoDB, allowing me to work on full-stack projects.

    I am proficient in Git, GitHub, Netlify, and Vercel for version control and deployment, and I am familiar with Agile and Scrum methodologies. My dedication to clean, maintainable code and continuous learning drives me to develop high-quality projects.`,
    second: `I have built and contributed to various applications, including an e-commerce platform with Stripe payment integration and an Eraserio clone showcasing UI/UX and state management expertise. You can explore my work on GitHub and my portfolio website.

      As a native Bangla speaker with a strong command of English, I enjoy collaborating with diverse teams and bringing ideas to life.`,
    data: [
      {
        icon: React.createElement(SiReact),
        color: "#61dafb",
      },
      {
        icon: React.createElement(SiNextdotjs),
        color: "#000000",
      },
      {
        icon: React.createElement(SiTypescript),
        color: "#3178c6",
      },
      {
        icon: React.createElement(SiTailwindcss),
        color: "#38bdf8",
      },
      {
        icon: React.createElement(SiMongodb),
        color: "#44b78b",
      },
    ],
  },
  projects: {
    title: "My Projects",
    data: [
      {
        title: "iPhone 15 Pro Website Clone",
        description:
          "A visually stunning clone of Apple's iPhone 15 Pro website, built using React, Three.js, GSAP, and TailwindCSS. This project showcases 3D model rendering, smooth animations, and an interactive video carousel. It demonstrates expertise in React Three Fiber for realistic 3D models and GSAP for fluid animations, ensuring a seamless user experience. The website is fully responsive, adapting beautifully to different screen sizes.",
        tags: [
          "React",
          "Three.js",
          "React Three Fiber",
          "GSAP",
          "TailwindCSS",
          "Vite",
          "Frontend",
          "UI/UX",
          "3D Web Development",
        ],
        imageUrl: iPhoneImg,
        repositoryUrl: "https://github.com/gmhridu/iPhone-clone",
        demoType: "Deploy",
        demoUrl: "https://iphone-clone-lovat-tau.vercel.app",
      },
      // {
      //   title: "E-commerce Web Next.js",
      //   description:
      //     "Responsive design, user and Google authentication, intuitive shopping cart, Stripe payment integration, product reviews, dashboard for product and order management.",
      //   tags: [
      //     "Next.js",
      //     "React",
      //     "TypeScript",
      //     "Tailwind",
      //     "Mongo-DB",
      //     "Prisma",
      //   ],
      //   imageUrl: ecommerceAppImg,
      //   repositoryUrl: "https://github.com/hernanhawryluk/nextjs-commerce-app",
      //   demoType: "Deploy",
      //   demoUrl: "https://nextjs-commerce-app-pi.vercel.app",
      // },
    ],
  },
  skills: {
    title: "My Skills",
    data: [
      {
        skill: "HTML",
        icon: React.createElement(SiHtml5),
        color: "#e34f26",
      },
      {
        skill: "CSS",
        icon: React.createElement(SiHtml5),
        color: "#264de4",
      },
      {
        skill: "JavaScript",
        icon: React.createElement(SiJavascript),
        color: "#f0db4f",
      },
      {
        skill: "TypeScript",
        icon: React.createElement(SiTypescript),
        color: "#3178c6",
      },
      {
        skill: "React",
        icon: React.createElement(SiReact),
        color: "#61dafb",
      },
      {
        skill: "Node.js",
        icon: React.createElement(SiNodedotjs),
        color: "#8cc84b",
      },
      {
        skill: "Express",
        icon: React.createElement(SiExpress),
        color: "#000000",
      },
      {
        skill: "Next.js",
        icon: React.createElement(SiNextdotjs),
        color: "#000000",
      },
      {
        skill: "Tailwind",
        icon: React.createElement(SiTailwindcss),
        color: "#38bdf8",
      },
      {
        skill: "Bootstrap",
        icon: React.createElement(SiBootstrap),
        color: "#7952b3",
      },
      {
        skill: "Framer Motion",
        icon: React.createElement(SiFramer),
        color: "#000000",
      },

      {
        skill: "MongoDB",
        icon: React.createElement(SiMongodb),
        color: "#4db33d",
      },
      {
        skill: "Firebase",
        icon: React.createElement(SiFirebase),
        color: "#ffcb2b",
      },
      {
        skill: "PostgreSQL",
        icon: React.createElement(SiPostgresql),
        color: "#3498db",
      },
      {
        skill: "Prisma",
        icon: React.createElement(SiPrisma),
        color: "#4db33d",
      },
      {
        skill: "Git",
        icon: React.createElement(SiGit),
        color: "#f05032",
      },
      {
        skill: "GitHub",
        icon: React.createElement(SiGithub),
        color: "#000000",
      },
      {
        skill: "Figma",
        icon: React.createElement(SiFigma),
        color: "#f24e1e",
      },
      {
        skill: "Asana",
        icon: React.createElement(SiAsana),
        color: "#fc636b",
      },
      {
        skill: "Jira",
        icon: React.createElement(SiJirasoftware),
        color: "#0052cc",
      },
    ],
  },
  certifications: {
    title: "Certifications",
    data: [
      {
        imageUrl: Certificate,
      },
    ],
  },
  experience: {
    title: "My Experience",
    data: [
      {
        role: "Self-taught Student",
        location: "Platzi - Coursera",
        description:
          "I acquired skills in web design, object-oriented programming, version control, application development with React, Next.js, React Native, Node.js, Django, among other technologies.",
        icon: React.createElement(LuGraduationCap),
        date: "December 2021 - September 2023",
      },
      {
        role: "Full-Stack Developer",
        location: "Freelancer",
        description:
          "I developed numerous projects in various technologies, efficiently solving challenges without depending on a team. These experiences provided me with extensive expertise in both front-end and back-end.",
        icon: React.createElement(FaReact),
        date: "October 2023 - January 2024",
      },
      {
        role: "Mobile Developer",
        location: "Bytewave - Innovation in Software",
        description:
          "Currently, I work as a front-end developer, primarily focused on developing native and cross-platform mobile applications (Swift, Kotlin, React Native).",
        icon: React.createElement(FaCode),
        date: "February 2024 - Present",
      },
    ],
  },
  contact: {
    title: "Contact Me",
    message:
      "Don't hesitate to get in touch! I'm excited about new job opportunities. You can do so through this form, by sending me a direct email, or by connecting with me on LinkedIn or GitHub. Looking forward to connecting!",
    placeholderEmail: "Your email",
    placeholderMessage: "Your message",
    buttonSubmit: "Submit",
    buttonCopy: "Copy Email Address",
    toastSent: "Email sent successfully!",
    toastCaptcha: "Verify captcha before sending.",
    toastCopied: "Email address copied to clipboard!",
  },
  footer: {
    text: "All rights reserved.",
    subtitle: "About this website",
    about:
      "built with React, Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.",
  },
  buttons: {
    theme: "Change theme",
    language: "Change language",
  },
};

export default en;
