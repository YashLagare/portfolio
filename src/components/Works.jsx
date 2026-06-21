'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import color_sharp from "../assets/color_sharp.png";
import { projects } from "../constants/constants";
import { styles } from "../styles";
import { SectionWrapper } from "./hoc";
import ProjectCard from "./ProjectCard";

const featuredProjects = [
  "InvoicePilot",
  "PixelForge AI Studio",
  "Connectify",
  "Chatzy",
  "DevCanvas",
  "E-Com Store",
];

const Works = () => {
  const [showAll, setShowAll] = useState(false);

  // Sort projects: featured first, then others
  const sortedProjects = [...projects].sort((a, b) => {
    const indexA = featuredProjects.indexOf(a.name);
    const indexB = featuredProjects.indexOf(b.name);

    // If both are featured, sort by their order in featuredProjects
    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    // If only A is featured, it comes first
    if (indexA !== -1) return -1;
    // If only B is featured, it comes first
    if (indexB !== -1) return 1;
    // If neither is featured, keep original order
    return 0;
  });

  const displayedProjects = showAll
    ? sortedProjects
    : sortedProjects.slice(0, 6);

  return (
    <>
      <div className='relative'>
        <div>
          <p id="work" className={`${styles.sectionSubText} `}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </div>

        <div className='w-full flex'>
          <motion.p
            className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            These projects reflect my hands-on experience building modern web applications using React.js, Next.js, TypeScript, Node.js, and MongoDB. Each project demonstrates practical problem-solving, scalable development practices, and real-world implementation, with links to the source code and live demo.
          </motion.p>
          <Image src={color_sharp} alt="color-sharp" className="absolute z-[-1] h-80 sm:-left-60 -left-20 w-screen -top-20" />
        </div>
      </div>

      <div className='mt-20 grid grid-cols-1 lg:grid-cols-2 gap-7 items-stretch'>
        {displayedProjects.map((project, index) => (
          <ProjectCard
            key={`project-${project.name}`}
            index={index}
            {...project}
          />
        ))}
      </div>

      {sortedProjects.length > 6 && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-tertiary hover:bg-black-200 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 border border-secondary shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            {showAll ? "Show Less" : "Show More Projects"}
          </button>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Works, "work");
