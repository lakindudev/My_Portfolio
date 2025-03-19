import { link } from "fs";

export const navItems = [
  { name: "Home", link: "#" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Education", link: "#education" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a HealthCare Platform",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "LunaRest- sleep quality prediction platform",
    des: "LunaRest is a AI driven sleep quality prediction web application...",
    img: "/lunarest.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/spring.svg",
      "/java.svg",
      "/py.svg",
    ],
    link: "/ui.apple.com",
  },
  {
    id: 2,
    title: "Real time Ticketing System",
    des: "This project is a Real-Time Event Ticketing System that utilizes the Producer-Consumer pattern to handle concurrent ticket releases and purchases efficiently.",
    img: "/ticketing.png",
    iconLists: ["/spring.svg", "/re.svg", "/java.svg", "/tail.svg", "/js.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 3,
    title: "Estate Agent Project",
    des: " This is a responsive and interactive Web Application built with React.js, designed to function as an estate agent web platform. The application allows users to search for properties based on multiple criteria, view detailed property information, and save favorites for easy access—all without a server, using client-side storage.",
    img: "/estate.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg"],
    link: "https://heroic-medovik-2b97c6.netlify.app/",
  },
  {
    id: 4,
    title: "Healthcare Management System",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/healthcare.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
];

export const testimonials = [];

export const companies = [];

export const workExperience = [
  {
    id: 1,
    title: "Software Development Group Project",
    desc: "Making a AI driven Sleep Qulaity managemnet system.I am a fullstack Developer of that project.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/lakindudev",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/lakindu-perera-297b752b2/",
  },
  {
    id: 4,
    img: "/instagram.svg",
    link: "https://www.instagram.com/lakindu_x/",
  },
];

// ... your existing exports ...

export const techStackData = [
  {
    quote: "A JavaScript library for building user interfaces.",
    name: "React",
    title: "Frontend Framework",
    icon: "/re.svg",
  },
  {
    quote:
      "A programming language that conforms to the ECMAScript specification.",
    name: "JavaScript",
    title: "Scripting Language",
    icon: "/js.svg",
  },
  {
    quote: "A superset of JavaScript that compiles to plain JavaScript.",
    name: "TypeScript",
    title: "Typed Language",
    icon: "/ts.svg",
  },
  {
    quote: "A high-level, class-based, object-oriented programming language.",
    name: "Java",
    title: "Programming Language",
    icon: "/java.svg",
  },
  {
    quote: "A powerful framework for building Java applications.",
    name: "Spring Boot",
    title: "Java Framework",
    icon: "/spring.svg",
  },
  {
    quote: "A high-level programming language for general-purpose programming.",
    name: "Python",
    title: "Programming Language",
    icon: "/py.svg",
  },
  {
    quote: "A utility-first CSS framework for creating custom designs.",
    name: "Tailwind CSS",
    title: "CSS Framework",
    icon: "/tail.svg",
  },
  {
    quote: "A JavaScript library for creating 3D graphics.",
    name: "Three.js",
    title: "3D Library",
    icon: "/three.svg",
  },
  {
    quote: "A general-purpose programming language.",
    name: "C++",
    title: "Programming Language",
    icon: "/c.svg",
  },
];
