'use client';

import React from 'react';
import Link from 'next/link';
import { HiLink } from "react-icons/hi";
import { ImGithub } from "react-icons/im";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectHero = ({ project }) => {
  return (
    <div className="w-full flex flex-col gap-8">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="inline-flex items-center gap-2 text-secondary hover:text-white transition-colors duration-300 font-medium">
          <FaArrowLeft size={16} />
          Back to Projects
        </Link>
      </motion.div>

      <div className="flex flex-col gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
            {project.name}
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed">
            {project.tagline}
          </p>
        </motion.div>

        {/* Tech Stack Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-3 mt-2"
        >
          {project.tags.map((tag) => (
            <span
              key={`${project.name}-${tag.name}`}
              className={`text-sm md:text-base font-semibold px-4 py-2 rounded-full bg-tertiary bg-opacity-60 border border-white/10 ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4 mt-4"
        >
          <button
            onClick={() => window.open(project.live_link, "_blank")}
            className="flex items-center gap-2 bg-[#915EFF] hover:bg-[#7a4ee6] text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-[#915EFF]/20 hover:shadow-[#915EFF]/40 hover:-translate-y-1"
          >
            <HiLink size={24} />
            <span>Live Demo</span>
          </button>
          <button
            onClick={() => window.open(project.source_code_link, "_blank")}
            className="flex items-center gap-2 bg-black hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-xl border border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <ImGithub size={24} />
            <span>GitHub</span>
          </button>
        </motion.div>
      </div>

      {/* Large Screenshot */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="w-full mt-8 rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
        <img
          src={project.image.src}
          alt={project.name}
          className="w-full h-auto max-h-[70vh] object-cover object-top group-hover:scale-[1.02] transition-transform duration-700 ease-out"
        />
      </motion.div>
    </div>
  );
};

export default ProjectHero;
