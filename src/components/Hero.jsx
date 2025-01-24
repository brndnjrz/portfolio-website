// background for website 
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas, CarCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
        {/* <div className='w-5 h-5 rounded-full bg-[#b3b4bd]' /> */}
        {/* <div className='w-1 sm:h-80 h-40 gray-gradient' /> */}
        </div>

        {/* <div className='flex flex-row justify-center items-center'>
          <h1 className={`${styles.heroHeadText} text[#00078c]`}>
            Hey
            <br className='sm:block hidden' />
            I'm <span className='text-[#435278]'>Brandon</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#6377ab]`}>
            I develop applications,  <br className='sm:block hidden' />
            with an interest in computer vision and AI
          </p>
        </div> */}
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              // little circle that goes up and down
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;