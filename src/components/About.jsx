import React from "react";
import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { h3, p } from "framer-motion/client";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          // alt='web-development'
          alt={title}
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
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       My technical proficiency include programming languages like JavaScript, TypeScript, Python, and HTML/CSS, as well as frameworks like React JS, Node JS, Express JS, Three JS, Streamlit. I'm also proficient in various development tools, such as Git/GitHub, Anaconda, Docker, Netlify, Ollama, VS Code, Xcode, PyCharm, and Adobe Photoshop. My ability to rapidly acquire new skills and technologies allows me to stay ahead of industry trends and build innovative solutions that meet the evolving needs of users.
       <br />
       <br />
       What sets me apart is my unique combination of technical expertise, customer support, adaptability, and passion for innovation. I'm a passionate and resilient worker dedicated to achieving my goals. When faced with challenges, I draw on my resourcefulness and determination to find creative solutions that deliver results.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
