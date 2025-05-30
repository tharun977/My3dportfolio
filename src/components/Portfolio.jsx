import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const portfolio = [
  {
    name: "Lost and Found App",
    description: "A React and Django-based web application for reporting and finding lost items.",
    image: "/assets/lost&found.png",
    repo: "https://github.com/tharun977/Lost-And-Found",
  },
  {
    name: "SPOT - Smart Parking Organization Tool",
    description: "A Django-based smart parking system with automated payments and modern UI.",
    image: "/assets/spot.png",
    repo: "https://github.com/tharun977/spot-main",
  },
  {
    name: "3D Portfolio Website",
    description: "A sleek, responsive 3D portfolio website built with Vite-React and Tailwind CSS with Three.js and Framer Motion.",
    image: "/assets/portfolio.png",
    repo: "https://github.com/tharun977/My3dportfolio",
  },
];

const ProjectCard = ({ index, name, description, image, repo }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up", "spring", 0, 0.75)}
      className={`w-full mt-[-2px] flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-5`}
    >
      <div className='relative w-full md:w-3/5'>
        <a href={repo} target="_blank" rel="noopener noreferrer">
          <img
            src={image}
            alt='project_image'
            className='w-full h-auto object-cover md:rounded-3xl cursor-pointer'
          />
        </a>
      </div>
      <div className={`w-full md:w-2/5 px-6 md:p-16 flex flex-col justify-center ${isEven ? "text-left md:text-left" : "text-left md:text-right"}`}>
        <h3 className='text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight'>{name}</h3>
        <p className='mt-4 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl'>{description}</p>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <div className='text-center md:text-left md:px-20 lg:px-40'>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>Portfolio</h2>
      </motion.div>
      <div className='mt-10 md:mt-20 flex flex-col gap-10 md:gap-20'>
        {portfolio.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Portfolio, "portfolio");