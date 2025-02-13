import {
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  travelnest,
  quizine,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "git",
    icon: git,
  }
];



const projects = [
  {
    name: "TravelNest",
    description:
      "Web-based platform for short-term vacation rentals, allowing users to list, search, and book homes seamlessly. Built with Express.js and Node.js for a robust backend, MongoDB for scalable data storage, and EJS for dynamic server-side rendering.",

    tags: [
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "yellow-text-gradient",
      },
      {
        name: "ejs",
        color: "pink-text-gradient",
      },
    ],

    image: travelnest,
    source_code_link: "https://github.com/fasih-mohammad/TravelNest",
    source_code_link1: "https://wanderlust-kox1.onrender.com/listings",
  },
  {
    name: "Quizine",
    description: 
  "Quizine is a web application that generates short MCQ-type questions based on user input from text files and multiple PDFs. It includes user authentication and utilizes Python NLP techniques for question generation, with SQLite for efficient data storage.",

tags: [
  {
    name: "python",
    color: "blue-text-gradient",
  },
  {
    name: "nlp",
    color: "green-text-gradient",
  },
  {
    name: "html",
    color: "yellow-text-gradient",
  },
  {
    name: "javascript",
    color: "purple-text-gradient",
  },
  {
    name: "sqlite",
    color: "orange-text-gradient",
  },
],
    image: quizine,
    source_code_link: "https://github.com/",
    source_code_link1: "https://github.com/"
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
    source_code_link1: "https://github.com/"
  },
];

export { services, technologies, projects };
