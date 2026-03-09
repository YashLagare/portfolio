'use client'
import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-parallax-tilt";

import Image from "next/image";
import { HiExternalLink } from "react-icons/hi";
import color_sharp from "../assets/color_sharp.png";
import { certificates } from "../constants/constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./hoc";

const CertificateCard = ({ index, title, issuer, date, credential_url, image, tags }) => {
  const ref = React.useRef(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const onMouseLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)}>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.15}
        glareColor="#915EFF"
        glarePosition="all"
        glareBorderRadius="20px"
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        tiltEnable={true}
        perspective={1000}
        className="w-full"
      >
        <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div className="bg-tertiary bg-opacity-90 rounded-[20px] p-6 flex flex-col sm:flex-row gap-6 items-start">

            {/* Certificate Image */}
            {image && (
              <div className="w-full sm:w-[220px] flex-shrink-0">
                <div className="relative w-full h-[140px] sm:h-[150px] rounded-xl overflow-hidden border border-[#915EFF33]">
                  <img
                    src={image.src || image}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#915EFF11] to-transparent pointer-events-none" />
                </div>
              </div>
            )}

            {/* Certificate Info */}
            <div className="flex flex-col justify-between flex-1 gap-3">
              <div>
                <h3 className="text-white font-bold text-[20px] sm:text-[22px] leading-snug">
                  {title}
                </h3>
                <p className="text-[#915EFF] font-semibold text-[15px] mt-1">
                  {issuer}
                </p>
                <p className="text-secondary text-[13px] mt-1 tracking-wide uppercase">
                  {date}
                </p>
              </div>

              {/* Skill Tags */}
              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-1">
                  {tags.map((tag) => (
                    <span
                      key={tag.name}
                      className={`text-[13px] font-semibold ${tag.color}`}
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              )}

              {/* View Credential Button */}
              {credential_url && (
                <motion.div
                  ref={ref}
                  onMouseMove={onMouseMove}
                  onMouseLeave={onMouseLeave}
                  animate={{ x: position.x * 0.15, y: position.y * 0.15 }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 10,
                    mass: 0.1,
                  }}
                  className="mt-2 w-fit"
                >
                  <button
                    onClick={() => window.open(credential_url, "_blank")}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-secondary text-[#915EFF] font-semibold text-[13px] hover:scale-105 hover:bg-[#915EFF15] transition-all duration-200"
                  >
                    <HiExternalLink size={16} />
                    View Credential
                  </button>
                </motion.div>
              )}
            </div>

          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <>
      <div className="relative">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Achievements</p>
          <h2 className={styles.sectionHeadText}>Certificates.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          A collection of certifications that reflect my commitment to continuous learning and professional growth across various technologies and domains.
        </motion.p>

        <Image
          src={color_sharp}
          alt="color-sharp"
          className="absolute z-[-1] h-80 -left-60 w-screen -top-20"
        />
      </div>

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {certificates.map((cert, index) => (
          <CertificateCard key={`cert-${index}`} index={index} {...cert} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates");