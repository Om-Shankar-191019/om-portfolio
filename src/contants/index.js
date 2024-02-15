import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  kbc_thumbnail,
  hospital_thumbnail,
  filmy_thumbnail,
  internshala_sym,
  icetl_sym,
  cpp_sym,
  python_sym,
  materialui_sym,
  firebase_sym,
  fruitables_thumbnail,
  realty_thumbnail,
  WebCompany_thumbnail,
  ajildone_icon,
  gfg_icon,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
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
    name: "Material UI",
    icon: materialui_sym,
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
    name: "Firebase",
    icon: firebase_sym,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "C plus plus",
    icon: cpp_sym,
  },
  {
    name: "Python",
    icon: python_sym,
  },
];

const experiences = [
  {
    title: "Full Stack Training",
    company_name: "Geeksforgeeks",
    icon: gfg_icon,
    iconBg: "#383E56",
    date: "NOV 2023 - Jan 2024",
    points: [
      "Developed robust server-side applications using Node.js and Express.",
      "Handling HTTP requests, build RESTful APIs, and implement middleware for efficient server-side operations.",
      "Gained expertise in NoSQL database management with MongoDB, including schema design, data modeling, and CRUD operations",
    ],
  },
  {
    title: "React.js Intern",
    company_name: "Ajiledone technologies private limited ",
    icon: ajildone_icon,
    iconBg: "#383E56",
    date: "June 2023 - July 2023",
    points: [
      "Created responsive and user-friendly web interfaces using React.js, HTML and CSS.",
      "Handled API requests and responses efficiently including error handling.",
      "Developed reusable React components to maintain a consistent UI across the application.",
    ],
  },
  {
    title: "React.js Training",
    company_name: "Internshala",
    icon: internshala_sym,
    iconBg: "#383E56",
    date: "July 2021 - Sept 2021",
    points: [
      "Proficiency in using popular React tools and libraries, such as React Router and Redux and build real-world applications.",
      "Ability to work collaboratively with other developers on React projects.",
      "Strong problem-solving skills and ability to debug React applications.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "RealtyEstate",
    description:
      "Innovative real estate web application for property transactions, empowering users to effortlessly buy and sell properties.",
    tags: [
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "react.js",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: realty_thumbnail,
    project_url: "https://realty-l0dp.onrender.com/",
    source_code_link: "https://github.com/Om-Shankar-191019/Realty",
  },

  {
    name: "Fruitables",
    description:
      "Dynamic e-commerce web application specializing in the buying and selling of fresh fruits and vegetables.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: fruitables_thumbnail,
    project_url: "https://fruitables.vercel.app/",
    source_code_link: "https://github.com/Om-Shankar-191019/Fruitables",
  },
  {
    name: "Hospital Tracker",
    description:
      "Hospital Tracker web app is built with wide range of features for users to find and review hospitals.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "mapbox api",
        color: "pink-text-gradient",
      },
    ],
    image: hospital_thumbnail,
    project_url: "https://hospital-tracker-2e2da.web.app/",
    source_code_link: "https://github.com/Om-Shankar-191019/HospitalTracker",
  },

  {
    name: "Filmy Dunia",
    description:
      "The movie website features a collection of movies with categorization and recommendations based on user preferences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tmdb api",
        color: "green-text-gradient",
      },
      {
        name: "material ui",
        color: "pink-text-gradient",
      },
    ],
    image: filmy_thumbnail,
    project_url: "https://movie-recomendation-tmdb.netlify.app/",
    source_code_link: "https://github.com/Om-Shankar-191019/fimly_duniya_imdb",
  },
  {
    name: "KBC",
    description:
      "The project is a quiz application inspired by the popular television show, Kaun Banega Crorepati featuring a game-like format.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "text-white",
      },
    ],
    image: kbc_thumbnail,
    project_url: "https://om-shankar-191019.github.io/KBCapp/",
    source_code_link: "https://github.com/Om-Shankar-191019/KBCapp",
  },
  {
    name: "VjA",
    description:
      "Dynamic and visually appealing website design company specializing in diverse web solutions for an engaging online presence.",
    tags: [
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "text-white",
      },
    ],
    image: WebCompany_thumbnail,
    project_url: "https://om-shankar-191019.github.io/web_company/",
    source_code_link: "https://github.com/Om-Shankar-191019/web_company",
  },
];

export { services, technologies, experiences, testimonials, projects };
