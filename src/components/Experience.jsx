import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const experiences = [
  {
    title: "Front-End Developer Intern",
    company_name: "Dcinfotech",
    date: "Sep 2024",
    details: [
      "Completed a front-end development internship at Dcinfotech.",
      "Built some responsive and interactive  web-apps.",
      "Used React.js, Tailwind CSS, and JavaScript to enhance user experience.",
      'GitHub Repository: <a href="https://github.com/tharun977/Dcinfotech" target="_blank" class="text-blue-500 underline">View Project</a>',
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
      'GitHub Repository: <a href="https://github.com/tharun977/PRODIGY_ML_03" target="_blank" class="text-blue-500 underline">View Project</a>',
    ],
  },
  {
    title: "Django Developer(self-employed)",
    company_name: "Rumi Press",
    date: "Jul 2024 - Present",
    details: [
      "Developing a Django-based web application to manage book distribution.",
      "Implemented CRUD functionalities for book categories and distribution expenses.",
      "Designed and optimized database models for better performance.",
      'GitHub Repository: <a href="https://github.com/tharun977/Projects/tree/main/rumipress" target="_blank" class="text-blue-500 underline">View Project</a>',

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

const ExperienceCard = ({ experience, onClick, isActive, isMobile }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer sm:mb-5 p-5 max-w-xl relative sm:text-left text-center ${
        isMobile ? "text-quaternary" : ""
      }`}
    >
      {(isActive || isMobile) && (
        <div className="absolute left-0 top-0 bottom-0 w-3 md:w-5 bg-tertiary my-6 sm:block hidden"></div>
      )}
      <h3
        className={`text-xl lg:text-2xl xl:text-3xl font-bold sm:pl-8 ${
          isActive || isMobile ? "text-quaternary" : "text-slate-600"
        }`}
      >
        {experience.title}
      </h3>
      <p
        className={`text-md lg:text-lg xl:text-2xl sm:font-medium pt-2 sm:pl-8 ${
          isActive || isMobile ? "text-white" : "text-slate-600"
        }`}
      >
        {experience.company_name} | {experience.date}
      </p>
    </div>
  );
};

const ExperienceDetails = ({ experience }) => {
  return (
    <div className="mt-5">
      <ul className="max-w-7xl list-none space-y-8 border-4 lg:border-8 rounded-xl lg:rounded-3xl p-6">
        {experience.details.map((detail, index) => (
          <li
            key={`experience-detail-${index}`}
            className="text-slate-500 font-semibold text-[10px] xs:text-[14px] md:text-[18px] lg:text-[22px] xl:text-[28px] lg:leading-[30px]"
            dangerouslySetInnerHTML={{ __html: detail }}
          />
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState(experiences[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="sm:my-20">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText} text-center`}>Experience</h2>
      </motion.div>

      <div className="relative mt-10 md:mt-20 md:p-20 flex flex-col items-center sm:flex-row sm:items-start">
        <div className="flex flex-col z-10 sm:w-auto sm:w-full">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              onClick={() => setSelectedJob(experience)}
              isActive={selectedJob === experience}
              isMobile={isMobile}
            />
          ))}
        </div>

        <div className="flex justify-end z-10 sm:block hidden">
          <ExperienceDetails experience={selectedJob} />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "portfolio");
