'use client'
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import Tilt from "react-parallax-tilt";

import Image from "next/image";
import color_sharp from "../assets/color_sharp.png";
import astronaut from "../assets/header.svg";
import { services, socialLinks } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'
    glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px"
    tiltMaxAngleX={30} tiltMaxAngleY={30} tiltEnable={true} perspective={1000}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div

        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <Image
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const router = useRouter();
  const basePath = router.basePath || '';
  const resumePath = `${basePath}/resume/Yash_Lagare_Resume.pdf`;

  return (
    <>
      <div className='relative overflow-hidden lg:overflow-visible'>
        <motion.div variants={textVariant()}>
          <p className={'sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'}>Introduction</p>
          <h2 className={'text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'}>Overview.</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[18px] max-w-3xl leading-[30px] font-semibold'
        >
          Hi, I’m Yash Yuvaraj Lagare, a passionate technology enthusiast from Kagal with a strong foundation in computer science. I enjoy building clean, scalable, and user-focused solutions while continuously learning new technologies. Driven by curiosity and a commitment to growth, I aim to create impactful digital experiences and contribute meaningfully to the IT industry.
        </motion.p>
        <motion.div
          variants={fadeIn("", "", 0.2, 1)}
          className='mt-8'
        >
          <a
            href={resumePath}
            download="Yash_Lagare_Resume.pdf"
            className='inline-flex items-center gap-3 px-6 py-3 font-semibold text-white rounded-lg border-2 border-secondary text-[#915EFF] shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105'
          >
            <HiDownload size={24} className='text-[#915EFF]' />
            <span className='text-gradient'>Download Resume</span>
          </a>
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.3, 1)}
          className='mt-8 flex gap-6'
        >
          <a href={socialLinks[0].url} target="_blank" rel="noopener noreferrer" className='text-[#915EFF] hover:text-white hover:scale-125 transition-all duration-200'>
            <FaLinkedin size={28} />
          </a>
          <a href={socialLinks[1].url} target="_blank" rel="noopener noreferrer" className='text-[#915EFF] hover:text-white hover:scale-125 transition-all duration-200'>
            <FaGithub size={28} />
          </a>
          <a href={socialLinks[2].url} target="_blank" rel="noopener noreferrer" className='text-[#915EFF] hover:text-white hover:scale-125 transition-all duration-200'>
            <FaInstagram size={28} />
          </a>
          {/* <a href={socialLinks[3].url} target="_blank" rel="noopener noreferrer" className='text-[#915EFF] hover:text-white hover:scale-125 transition-all duration-200'>
            <FaTwitter size={28} />
          </a> */}
        </motion.div>        <Image src={color_sharp} alt="color-sharp" className="absolute z-[-1] h-80 -left-60 w-screen -top-20" />
        <Image src={astronaut} alt="astronaut" className="absolute z-[-1] h-80 -right-20 animation top-28" />
      </div>

      <div className='mt-20 flex-wrap justify-center gap-10 hidden md:flex'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
