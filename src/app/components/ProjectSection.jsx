"use client" ;
import React, { useState ,useRef } from "react" ;
import ProjectCard from "./ProjectCard" ;
import ProjectTag from "./ProjectTag" ;
import {motion, useInView} from "framer-motion";



const projectsData = [
    {
      id: 1,
      title: "React Portfolio Website",
      description: "In this project i create porfolio for Myself where I used react with Tailwind CSS",
      image: "/images/projects/1.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Train ticket booking system",
      description: "Based on C++ and inside it concept of files where you have to know train timing rent and availablity of ticket ",
      image: "/images/projects/ticket_booking1.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "E-commerce Application",
      description: "Based on react for frontend webpage and stripe payment method for payment and also we used backend as Node.js  ",
      image: "/images/projects/Ecart1.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "Landing page using Html,Css and javascript ",
      description: "Here in this web page html css and javascript are used for landing page of a Date Shop ",
      image: "/images/projects/Date_shop.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "Food Ordering Application",
      description: "Project 4 description",
      image: "/images/projects/4.png",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl: "/",
    },
   
    // {
    //   id: 6,
    //   title: "Full-stack Roadmap",
    //   description: "Project 5 description",
    //   image: "/images/projects/6.png",
    //   tag: ["All", "Web"],
    //   gitUrl: "/",
    //   previewUrl: "/",
    // },
  ];


const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref= useRef(null);
  const isInView = useInView(ref , {once:true })

  const handleTagChange = (newTag) => {
    setTag(newTag);

  };

const filteredProjects = projectsData.filter((project) =>
project.tag.includes(tag)
);

const cardVariants = {
  initial: {y: 50 , opacity:0},
  animate: {y:0 , opacity:1},
};




  return (
    <section>
    <h2 className="text-4xl font-bold text-white mb-4">
      My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}s
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
    
    <ul ref={ref} className ="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project,index) => (
          <motion.li
          key={index}
           variant={cardVariants} 
           initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration:0.3, delay: index* 0.4}}
            >
         <ProjectCard 
         key={project.id} 
         title={project.title} 
         description={project.description}
          imgUrl={project.image} 
          gitUrl={project.gitUrl}
          previewUrl={project.previewUrl}    
          />
          </motion.li>
          ))}
          </ul>
    </section>
    
  );
};

export default ProjectSection ;
