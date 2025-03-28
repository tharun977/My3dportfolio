import lostandfound from "../assets/lost&found.png";
import spot from "../assets/spot.png";
import algorithms from "../assets/algorithms.png";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const experiences = [
  {
    title: "Front-End Developer Intern",
    company_name: "Dcinfotech",
    date: "Sep 2024",
    details: [
      "Completed a front-end development internship at Dcinfotech.",
      "Built some responsive and interactive web-apps.",
      "Used React.js, Tailwind CSS, and JavaScript to enhance user experience.",
      "GitHub Repository: <a href='https://github.com/tharun977/Dcinfotech' target='_blank' class='text-blue-500 underline'>View Project</a>",
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "Prodigy Infotech",
    date: "Oct 2024",
    details: [
      "Developed a K-means clustering model for retail consumer data.",
      "Analyzed and visualized customer segmentation using Python and Scikit-Learn.",
      "Worked with real-world datasets to gain insights into customer behavior.",
      "GitHub Repository: <a href='https://github.com/tharun977/PRODIGY_ML_03' target='_blank' class='text-blue-500 underline'>View Project</a>",
    ],
  },
  {
    title: "Django Developer (Self-Employed)",
    company_name: "Rumi Press",
    date: "Jul 2024 - Present",
    details: [
      "Developing a Django-based web application to manage book distribution.",
      "Implemented CRUD functionalities for book categories and distribution expenses.",
      "Designed and optimized database models for better performance.",
      "GitHub Repository: <a href='https://github.com/tharun977/Projects/tree/main/rumipress' target='_blank' class='text-blue-500 underline'>View Project</a>",
    ],
  },
  {
    title: "Cloud Engineer Intern",
    company_name: "Cloud Counselage Pvt. Ltd.",
    date: "Oct 2024 - Present",
    details: [
      "Learning the fundamentals of cloud computing and infrastructure management.",
      "Working with AWS services like EC2, S3, and IAM for basic cloud operations.",
      "Setting up and managing virtual machines and storage solutions.",
      "Exploring CI/CD concepts and automation using GitHub Actions.",
      "Assisting in monitoring cloud resources and improving deployment processes.",
    ],
  },
];

export const portfolio = [
  {
    name: "Lost & Found React App",
    description:
      "A React front-end for a Django-based lost and found system, ensuring smooth UI/UX and efficient search functionality.",
    image: lostandfound,
  },
  {
    name: "SPOT - Smart Parking Organization Tool",
    description:
      "A Django-based smart parking system with automated payments and modern UI.",
    image: spot,
  },
  {
    name: "3d Portfolio Website",
    description:
      "A sleek, responsive 3d portfolio website built with Vite-React and Tailwind CSS with threejs and framer motion, showcasing my projects and experience.",
    image: algorithms,
  },
];
