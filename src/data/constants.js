import html from '../images/html.svg'
import css from '../images/css.svg'
import javascript from '../images/js.svg';
import typescript from '../images/ts.svg';
import nextjs from '../images/nextjs.svg';
import react from '../images/react.svg';
import redux from '../images/redux.svg';
import vite from '../images/vite.svg';
import yarn from '../images/yarn.svg';
import tailwind from '../images/tailwind.svg';
import bootstrap from '../images/bootstrap.svg';
import materialui from '../images/material-ui.svg';
import sass from '../images/sass.svg';
import node from '../images/node.svg';
import express from '../images/express.svg';
import nestjs from '../images/nestjs.svg';
import graphql from '../images/graphql.svg';
import mongo from '../images/mongo.svg';
import cloudinary from '../images/cloudinary.svg';
import redis from '../images/redis.svg';
import prisma from '../images/prisma.svg';
import firebase from '../images/firebase.svg';
import aws from '../images/aws.svg';
import googlecloud from '../images/google-cloud.svg';
import docker from '../images/docker.svg';
import nginx from '../images/nginx.svg';
import git from '../images/git.svg';
import github from '../images/github.svg';
import vercel from '../images/vercel.svg';
import vscode3 from '../images/vscode3.svg';
import postman from '../images/postman.svg';
import jira from '../images/jira.svg';
import cic from '../images/cic.webp'
import mostaql from '../images/mostaql.webp'
import upwork from '../images/upwork.webp'
import sockit from '../images/sockit.webp'
import figma from '../images/figma.svg'
import swagger from '../images/swagger.svg'

export const Bio = {
  name: "Mahmoud Mohamed",
  roles: [
    "Software Developer",
    "Web Developer",
    "Full Stack Developer",
  ],
  description: "Hello I'm Mahmoud Mohamed a Full Stack Web Developer | Passionate about Building Scalable and High-Performance Applications.",
  github: "https://github.com/jackson0tr",
  resume: "",
  linkedin: "https://www.linkedin.com/in/mahmoudmohamed0tr/",
  facebook: "https://www.facebook.com/share/3BpaekvqE37YYrdN/?mibextid=qi2Omg",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        image: html
      },
      {
        name: "CSS",
        image: css
      },
      {
        name: "JavaScript",
        image: javascript
      },
      {
        name: "TypeScript",
        image: typescript
      },
      {
        name: "Next Js",
        image: nextjs
      },
      {
        name: "React Js",
        image: react
      },
      {
        name: "Redux",
        image: redux
      },
      {
        name: "Vite",
        image: vite
      },
      {
        name: "Yarn",
        image: yarn
      },
      {
        name: "TailwindCss",
        image: tailwind
      },
      {
        name: "Bootstrap",
        image: bootstrap
      },
      {
        name: "Material UI",
        image: materialui
      },
      {
        name: "Figma",
        image: figma
      },
      {
        name: "Sass",
        image: sass
      },
      {
        name: "Three Js",
        image: require('../images/threejs.webp')
      },
      {
        name: "Framer Motion",
        image: require('../images/framer-motion.webp')
      },
      {
        name: "GSAP",
        image: require('../images/gsap.webp')
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: node
      },
      {
        name: "Express Js",
        image: express
      },
      {
        name: "Nest Js",
        image: nestjs
      },
      {
        name: "Graph Ql",
        image: graphql
      },
      {
        name: "MongoDB",
        image: mongo
      },
      {
        name: "Cloudinary",
        image: cloudinary
      },
      {
        name: "Redis",
        image: redis
      },
      {
        name: "Prisma",
        image: prisma
      },
      {
        name: "Firebase",
        image: firebase
      },
      {
        name: "Sockit.io",
        image: sockit
      },
    ],
  },
  {
    title: "DevOps",
    skills: [
      {
        name: "AWS",
        image: aws
      },
      {
        name: "Google Cloud",
        image: googlecloud
      },
      {
        name: "Docker",
        image: docker
      },
      {
        name: "Nginx",
        image: nginx
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image: git
      },
      {
        name: "GitHub",
        image: github
      },
      {
        name: "Vercel",
        image: vercel
      },
      {
        name: "VS Code",
        image: vscode3
      },
      {
        name: "Postman",
        image: postman
      },
      {
        name: "Swagger",
        image: swagger
      },
      {
        name: "Jira",
        image: jira
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: mostaql,
    role: "Full Stack Developer",
    company: "Mostaql",
    date: "April 2023 - Present",
    desc: "A Passionate Full-Stack Developer & Creative Problem Solver With a strong background in web development and hands-on experience, I specialize in creating high-performance, user-centric applications that drive business growth. My expertise spans React, Next.js, TypeScript, Node.js, Tailwind CSS, and a wide array of modern technologies, enabling me to deliver innovative solutions tailored to your unique needs.",
    skills: [
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "Technical Expertise",
      "Problem-Solving Mindset",
      "Client-Centric Approach",
      "On-Time Delivery",
    ],
  },
  {
    id: 3,
    img: upwork,
    role: "Full Stack Developer",
    company: "Upwork",
    date: "Mars 2024 - Present",
    desc: "A Passionate Full-Stack Developer & Creative Problem Solver With a strong background in web development and hands-on experience, I specialize in creating high-performance, user-centric applications that drive business growth. My expertise spans React, Next.js, TypeScript, Node.js, Tailwind CSS, and a wide array of modern technologies, enabling me to deliver innovative solutions tailored to your unique needs.",
    skills: [
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "Technical Expertise",
      "Problem-Solving Mindset",
      "Client-Centric Approach",
      "On-Time Delivery",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: cic,
    school: "Canadian International College",
    date: "Oct 2022 - Sep 2026",
    grade: "Still Study",
    desc: "I am currently study Business Administration.",
    degree: "Business Administration",
  },
];

export const projects = [
  {
    id: 0,
    title: "Lerko",
    description: "LMS Website",
    image: require('../images/lerko.webp'),
    tags: [
      "Next",
      "TypeScript",
      "Tailwindcss",
      "Redux",
      "RTK",
      "Express",
      "MongoDB",
      "Cloudinary",
      "Redis",
      "Stripe",
    ],
    category: "lms",
    webapp: "https://lerko.vercel.app",
  },
  {
    id: 1,
    title: "Dotte",
    description: "E-commerce Website",
    image: require('../images/dotte.webp'),
    tags: [
      "React",
      "Yarn",
      "Redux",
      "RTK",
      "JavaScript",
      "Tailwindcss",
      "Express",
      "MongoDb",
      "Cloudinary",
      "Sockit.io",
      "Nodemailer",
      "Stripe",
    ],
    category: "ecommerce",
    webapp: "https://dotte.vercel.app",
  },
  {
    id: 2,
    title: "Mubasher Masr",
    description: "News Website",
    image: require('../images/mubasher.webp'),
    tags: [
      "Next",
      "JavaScript",
      "Tailwindcss",
      "Express",
      "MongoDb",
      "Cloudinary",
    ],
    category: "news",
    webapp: "https://mubashermasr.vercel.app",
  },
  {
    id: 3,
    title: "Little Ocean",
    description: "Restaurant Website",
    image: require('../images/littleocean.webp'),
    tags: [
      "React",
      "JavaScript",
      "Tailwindcss",
    ],
    category: "restaurant",
    webapp: "https://littleocean.vercel.app/",
  },
  {
    id: 3,
    title: "Foodora",
    description: "Food Ordering Website",
    image: require('../images/foodora.webp'),
    tags: [
      "React",
      "TypeScript",
      "Tailwindcss",
      "Shaden UI",
      "Express",
      "MongoDB",
      "Cloudinary",
      "Multer",
      "Stripe",
    ],
    category: "restaurant",
    webapp: "https://foodora-v1.vercel.app/",
  },
  {
    id: 5,
    title: "RestauMaster",
    description: "Food Ordering Website",
    image: require('../images/restaumaster.webp'),
    tags: [
      "React",
      "Vite",
      "Redux",
      "RTK",
      "TypeScript",
      "Express",
      "MongoDB",
      "Cloudinary",
      "Multer",
      "Stripe",
    ],
    category: "restaurant",
    webapp: "https://restaumaster.vercel.app",
  },
  {
    id: 5,
    title: "US News",
    description: "News Website",
    image: require('../images/usnews.webp'),
    tags: [
      "React",
      "Vite",
      "Redux",
      "RTK",
      "TypeScript",
      "Express",
      "MongoDB",
      "Cloudinary",
      "Multer",
      "Stripe",
    ],
    category: "news",
    webapp: "https://blog-44.vercel.app",
  },
  {
    id: 6,
    title: "ExchanSwap",
    description: "Saas Website",
    image: require('../images/exchanswap.webp'),
    tags: [
      "Next",
      "TypeScript",
      "Tailwindcss",
      "Framer Motion",
    ],
    category: "saas",
    webapp: "https://exchanswap.vercel.app",
  },
  {
    id: 7,
    title: "Bonic",
    description: "Landing Page",
    image: require('../images/bonic.webp'),
    tags: [
      "React",
      "JavaScript",
      "Css",
      "I18n",
    ],
    category: "landing",
    webapp: "https://bonic.vercel.app",
  },
];

