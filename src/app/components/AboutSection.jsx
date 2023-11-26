"use client" ;
import React , { useTransition , useState } from "react" ;
import Image from "next/image";
import TabButton from "./TabButton" ;


const TAB_DATA = [
  {
    title:"Skills" ,
    id:"skills",
    content : (
        <ul className="list-disc pl-2">
        <li>C/C++</li>
        <li>java</li>
        <li>Html & CSS</li>
        <li>javaScript</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Mongodb</li>
        <li>React</li>
        <li>Next.js</li>
        </ul>
    )
  },
  {
    title:"Education" ,
    id:"education" ,
    content : (
      <ul className="list-disc pl-2">
        <li> <b>B-Tech (I.T)</b>
          <p>University College of Engineering and Technology Hazaribagh, Jharkhand</p></li>
        <li><b>Intermediate(Science)</b>
        <p>Marwari College Ranchi </p></li>
        <li><b>Metriculation</b>
        <p>Shankari High school Itki Ranchi</p>
        </li>
      </ul>
    )
  },
    
  {
    title:"Certifications",
    id:"certifications",
    content: (
     <ul className="list-disc pl-2">
      <li>Full stack Developer authorized by IBM and offered through Coursera</li>
      <li> Google Digital Garage </li>
      <li>HackerRank SQL </li>
      <li>Linkedin Marketing Labs</li>
     </ul>

    )
  }
]




const AboutSection = () => {
  const [tab,setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(()  => {
      setTab(id);
    });
  }







  return(
  <section className ="text-white">
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Image src="/images/About-image.png" width={500} height={500} alt="about image" /> 
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
    <div>
        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications. 
        </p>
        <div className="flex flex-row justify-start mt-8">
          
          <TabButton 
           selectTab={()=> handleTabChange("skills")}
           active={tab=== "skills"}
           >
            {" "}
             Skills {" "}
           </TabButton>
          <TabButton 
          selectTab={()=> handleTabChange("education")}
           active={tab=== "education"}
           >
            {" "}
             Education{" "}
           </TabButton>
          <TabButton 
          selectTab={()=> handleTabChange("certifications")}
           active={tab=== "certifications"}
           >
            {" "}
             Certifications {" "}
           </TabButton>
        </div>
        <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
    </div> 
    </div>
   </div>
  </section>
  );
};

export default AboutSection;
