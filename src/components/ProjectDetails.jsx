'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectDetails = ({ project, previousProject, nextProject }) => {
  return (
    <div className="w-full flex flex-col gap-16 mt-16">
      
      {/* Quick Facts Section */}
      {project.quickFacts && (
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-tertiary bg-opacity-50 rounded-3xl border border-white/5"
        >
          {Object.entries(project.quickFacts).map(([key, value]) => (
            <div key={key} className="flex flex-col gap-2">
              <span className="text-secondary text-sm uppercase tracking-wider font-semibold">{key}</span>
              <span className="text-white font-medium text-lg">{value}</span>
            </div>
          ))}
        </motion.section>
      )}

      {/* Overview Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-white font-bold text-3xl mb-6 flex items-center gap-4">
          <span className="w-8 h-1 bg-[#915EFF] rounded-full"></span>
          Overview
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
          {project.description}
        </p>
      </motion.section>

      {/* Key Features Section */}
      {project.features && project.features.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-white font-bold text-3xl mb-8 flex items-center gap-4">
            <span className="w-8 h-1 bg-[#915EFF] rounded-full"></span>
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-tertiary bg-opacity-30 border border-white/5 hover:bg-opacity-50 transition-colors duration-300">
                <FaCheckCircle className="text-[#915EFF] mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-300 text-base">{feature}</span>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Technology Stack Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-white font-bold text-3xl mb-6 flex items-center gap-4">
          <span className="w-8 h-1 bg-[#915EFF] rounded-full"></span>
          Technology Stack
        </h2>
        <div className="flex flex-wrap gap-4 max-w-4xl">
          {project.tags.map((tag) => (
            <div 
              key={`detail-${tag.name}`}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-tertiary border border-white/10 hover:border-white/30 transition-colors duration-300"
            >
              <span className={`text-lg font-bold ${tag.color}`}>#{tag.name}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Navigation Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-12 pt-12 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-8"
      >
        {previousProject ? (
          <Link 
            href={`/projects/${previousProject.slug}`}
            className="flex items-center gap-4 group w-full sm:w-auto"
          >
            <div className="p-4 rounded-full bg-tertiary group-hover:bg-[#915EFF] transition-colors duration-300">
              <FaArrowLeft className="text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-secondary text-sm font-semibold">Previous Project</span>
              <span className="text-white font-bold text-lg group-hover:text-[#915EFF] transition-colors duration-300">{previousProject.name}</span>
            </div>
          </Link>
        ) : <div className="hidden sm:block w-[200px]"></div>}

        {nextProject ? (
          <Link 
            href={`/projects/${nextProject.slug}`}
            className="flex items-center gap-4 group w-full sm:w-auto sm:text-right flex-row-reverse sm:flex-row"
          >
            <div className="flex flex-col items-start sm:items-end">
              <span className="text-secondary text-sm font-semibold">Next Project</span>
              <span className="text-white font-bold text-lg group-hover:text-[#915EFF] transition-colors duration-300">{nextProject.name}</span>
            </div>
            <div className="p-4 rounded-full bg-tertiary group-hover:bg-[#915EFF] transition-colors duration-300">
              <FaArrowRight className="text-white" />
            </div>
          </Link>
        ) : <div className="hidden sm:block w-[200px]"></div>}
      </motion.section>

    </div>
  );
};

export default ProjectDetails;
