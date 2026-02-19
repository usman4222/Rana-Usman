import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaWordpress,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiShopify,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

// data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        icons: [
          { icon: FaHtml5, name: "HTML5" },
          { icon: FaCss3Alt, name: "CSS3" },
          { icon: FaJs, name: "JavaScript" },
          { icon: FaReact, name: "React" },
          { icon: SiNextdotjs, name: "Next.js" },
          { icon: SiRedux, name: "Redux" },
          { icon: SiTailwindcss, name: "Tailwind CSS" },
          { icon: SiFramer, name: "Framer Motion" },
          { icon: SiTypescript, name: "TypeScript" },
          { icon: FaNodeJs, name: "Node.js" },
          { icon: SiExpress, name: "Express.js" },
          { icon: SiMongodb, name: "MongoDB" },
          { icon: FaGitAlt, name: "Git" },
          { icon: FaGithub, name: "GitHub" },
          { icon: FaNpm, name: "NPM" },
          { icon: SiPostman, name: "Postman" },
          { icon: SiFirebase, name: "Firebase" },
          { icon: SiVercel, name: "Vercel" },
          { icon: SiNetlify, name: "Netlify" },
          { icon: FaWordpress, name: "WordPress" },
          { icon: SiShopify, name: "Shopify" }, 
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      { title: "Code Olympics - Winner", stage: "2026 (University of Lahore)" },
      { title: "Web Competition - Winner", stage: "2025 (University of Lahore)" },
      { title: "Web Competition - Runner Up", stage: "2024 (University of Lahore)" },
    ],
  },
  {
    title: "experience",
    info: [
      { title: "MERN Stack Developer - Wixpa (Pvt.) Ltd.", stage: "Dec 2024 – Mar 2026" },
      { title: "MERN Stack Developer - Enfotrix (Pvt.) Ltd.", stage: "Apr 2024 – Nov 2024" },
      { title: "MERN Stack Developer - Soriic (Pvt.) Ltd.", stage: "Nov 2023 – Apr 2024" },
    ],
  },
  {
    title: "credentials",
    info: [
      { title: "Software Engineer - University of Lahore", stage: "2022 - 2026" },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            3 years ago, I began my journey as a MERN Stack Developer. Since then,
            I’ve built scalable full-stack applications using MongoDB, Express,
            React, and Node.js — working with agencies, collaborating with startups,
            and delivering digital solutions for businesses and consumers.
          </motion.p>

          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience.
                </div>
              </div>

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={25} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients.
                </div>
              </div>

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={100} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects.
                </div>
              </div>

              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

<div className="py-2 xl:py-6 w-full flex flex-col justify-start">
  {aboutData[index].title === "skills" ? (
    <div className="w-full flex justify-start">
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-6">
        {aboutData[index].info[0].icons.map((tech, iconI) => {
          const IconComponent = tech.icon;
          return (
            <div
              key={iconI}
              className="relative group flex justify-start"
            >
              <IconComponent className="text-3xl text-white hover:text-accent transition duration-300 cursor-pointer" />

              {/* Tooltip */}
              <span className="absolute -bottom-8 scale-0 group-hover:scale-100 transition duration-200 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    aboutData[index].info.map((item, itemI) => (
      <div
        key={itemI}
        className="w-full py-2 flex justify-between items-center text-white"
      >
        <div className="font-medium whitespace-nowrap">
          {item.title}
        </div>
        <div className="hidden md:flex">-</div>
        <div className="text-sm text-white/90 whitespace-nowrap">
          {item.stage}
        </div>
      </div>
    ))
  )}
</div>

        </motion.div>
      </div>
    </div>
  );
};

export default About;
