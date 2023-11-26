"use client" ;
import React from 'react' ;
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import  {motion}  from  "framer-motion" ;

const HeroSection = () => {
  return (
    <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div
             initial={{opacity:0, scale:0.5 }}
             animate={{opacity:1, scale:1}}
             transition={{duration:0.5}}
             className = "col-span-8 place-self-center text-center sm:text-left justify-self-start">
 <h1 className = "text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Hello,I am{" "} 
        </span>
        <br></br>
        <TypeAnimation
      sequence={[
        
        "Saquib Shadab",
        1000, 
        "Web Developer",
        1000,
        "Android Developer",
        1000,
        // "UI/UX Designer",
        // 1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />

    </h1>
 <p className = "text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl"> As a passionate computer science engineer and developer, 
  I consider my self a responsible and orderly person,Always eager to learn and grow.
    </p>
    <div>
       <a href="https://chat.whatsapp.com/KIoxVHYvuLTC8oBWH1iENF"  hire me ="Hire Me">
        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-state-200 text-white">
            Hire Me
            </button>  
            </a>

            <a href="images/CV.pdf" download="Download CV" >
        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 hover:bg-state-800 text-white mt-3">
          <span className="block bg-[#121212] hover:bg-state-800 rounded-full px-5 py-2"> Download CV </span> 
            </button>
            </a>
    </div>
   </motion.div>

   <motion.div
             initial={{opacity:0, scale:0.5 }}
             animate={{opacity:1, scale:1}}
             transition={{duration:0.5}}
              className = "col-span-4 place-self-center mt-5 lg:mt-0">
    <div className="square-full bg-[#181818] w-[302px]  h-[305px] lg:w-[310px] lg:h-[325px] relative ">
    <Image
    src="/images/heromain01.png"
    alt="hero image"
    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  "
    width={255}
    height={250}
/>
   </div>
   </motion.div>
   </div>
    </section>
  );
}

export default HeroSection ;
