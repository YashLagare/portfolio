import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-parallax-tilt";
import Link from "next/link";
import { HiLink } from "react-icons/hi";
import { ImGithub } from "react-icons/im";

const ProjectCard = ({
  index,
  slug,
  name,
  description,
  tags,
  image,
  source_code_link,
  features,
  live_link,
}) => {
  const refLiveLink = React.useRef(null);
  const refSourceCodeLink = React.useRef(null);
  const [positionLiveLink, setPositionLiveLink] = React.useState({ x: 0, y: 0 });
  const [positionSourceCodeLink, setPositionSourceCodeLink] = React.useState({ x: 0, y: 0 });

  const onMouseMoveLiveLink = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = refLiveLink.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPositionLiveLink({ x, y });
  };

  const onMouseMoveSourceCodeLink = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = refSourceCodeLink.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPositionSourceCodeLink({ x, y });
  };

  const onMouseLeave = () => {
    setPositionLiveLink({ x: 0, y: 0 });
    setPositionSourceCodeLink({ x: 0, y: 0 });
  };

  return (
    <div className='flex flex-col h-full bg-tertiary bg-opacity-70 p-5 rounded-2xl gap-4 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300'>
      <h3 className='text-white font-bold text-[28px] flex gap-2 items-center my-2 '>{name}<HiLink size={15} /></h3>
      
      <div className='flex flex-col lg:flex-row gap-5 lg:gap-10 lg:justify-between lg:items-center'>
        <Tilt className='lg:w-[90%] lg:h-[90%] w-full'>
          <div className='relative cursor-pointer flex justify-between transition-all duration-500'>
            <img
              src={image.src}
              alt='project_image'
              className='w-full h-auto lg:h-full object-cover rounded-2xl'
            />
          </div>
        </Tilt>
        <div className='flex flex-row lg:flex-col justify-center gap-8 mt-2 lg:mt-0'>
          <motion.div ref={refLiveLink} onMouseMove={onMouseMoveLiveLink} onMouseLeave={onMouseLeave}
            animate={{ x: positionLiveLink.x, y: positionLiveLink.y }}
            transition={{
              type: 'spring',
              stiffness: 130,
              damping: 50,
              mass: 0.1,
            }}>
            <button onClick={() => window.open(live_link, "_blank")} className="text-gradient lg:w-[10%] flex justify-center">
              <p className="font-semibold text-sm lg:text-[24px] hover:scale-105 transition-all duration-200 flex gap-2 items-center p-3 border-2 rounded-full border-secondary text-[#915EFF] ">
                <HiLink size={30} className=" " />
              </p>
            </button>
          </motion.div>
          <motion.div ref={refSourceCodeLink} onMouseMove={onMouseMoveSourceCodeLink} onMouseLeave={onMouseLeave}
            animate={{ x: positionSourceCodeLink.x, y: positionSourceCodeLink.y }}
            transition={{
              type: 'spring',
              stiffness: 130,
              damping: 50,
              mass: 0.1,
            }}>
            <button onClick={() => window.open(source_code_link, "_blank")} className="text-gradient lg:w-[10%] flex justify-center">
              <p className="text-white font-semibold text-sm lg:text-[24px] hover:scale-105 transition-all duration-200 flex gap-2 items-center p-3 border-2 rounded-full border-secondary hover:bg-black ">
                <ImGithub size={30} className="text-[#915EFF]" />
              </p>
            </button>
          </motion.div>
        </div>
      </div>

      <div className='flex-grow flex flex-col mt-2'>
        <div className='flex-grow'>
          <p className='text-gray-300 text-[19px] font-semibold mb-2 line-clamp-4'>{description}</p>
          
          <div className='mt-4 flex flex-wrap gap-3 mb-6'>
            {tags.map((tag) => (
              <p title={tag.name}
                key={`${name}-${tag.name}`}
                className={`text-[17px] font-semibold ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>

        <Link 
          href={`/projects/${slug}`}
          className="mt-auto self-start bg-transparent hover:bg-secondary text-white font-semibold py-2 px-4 border border-secondary hover:border-transparent rounded-lg transition-all duration-300"
        >
          View Case Study &rarr;
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
