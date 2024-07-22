"use client";

import React from "react";
import ProjectCard from "../components/ProjectCard";
import location from "../assets/location.png";
import realestate from "../assets/realestate.png";
import ios from "../assets/ios.png";
import andriod from "../assets/andriod.png";
import ProjectPreview from "../assets/ProjectPreview.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

function Projects() {
  const list = [
    {
      id: 1,
      name: "Project1",
      description:
        "Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels",
      skills: "Business analysis / iOS / Android / QA / UI/UX Design",
      logo1: location,
      place: "India",
      logo2: realestate,
      workType: "Real Estate",
      userGrowth: "400%",
      activeUsers: "+200000",
      logo3: ios,
      logo4: andriod,
      logo5: ProjectPreview,
    },
    {
      id: 2,
      name: "Project2",
      description:
        "Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels",
      skills: "Business analysis / iOS / Android / QA / UI/UX Design",
      logo1: location,
      place: "India",
      logo2: realestate,
      workType: "Real Estate",
      userGrowth: "400%",
      activeUsers: "+200000",
      logo3: ios,
      logo4: andriod,
      logo5: ProjectPreview,
    },
    {
      id: 3,
      name: "Project3",
      description:
        "Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels",
      skills: "Business analysis / iOS / Android / QA / UI/UX Design",
      logo1: location,
      place: "India",
      logo2: realestate,
      workType: "Real Estate",
      userGrowth: "400%",
      activeUsers: "+200000",
      logo3: ios,
      logo4: andriod,
      logo5: ProjectPreview,
    },
    {
      id: 4,
      name: "Project4",
      description:
        "Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels",
      skills: "Business analysis / iOS / Android / QA / UI/UX Design",
      logo1: location,
      place: "India",
      logo2: realestate,
      workType: "Real Estate",
      userGrowth: "400%",
      activeUsers: "+200000",
      logo3: ios,
      logo4: andriod,
      logo5: ProjectPreview,
    },
  ];
  return (
    <div className="px-[10%] pt-[5%] pb-20 bg-[#F2F4F7] w-full">
      <motion.div
        initial={{ scale: 0, opacity: 1 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{
          once: true,
        }}
        className="text-[36px] text-[#101828] font-bold w-[50%] mb-10 max-lg:w-full"
      >
        Projects we are proud of
      </motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 1 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{
          once: true,
        }}
        className="text-[15px] text-[#101828] font-medium w-[50%] mb-10 max-lg:w-full"
      >
        Our software development company is truly proud of the wonderful clients
        we have worked with. We enjoy a long-term partnership
      </motion.div>
      <Tabs defaultValue="project1">
        <TabsList className="mb-10 grid grid-cols-4 gap-4 max-lg:grid-cols-2 w-[50%] max-lg:w-[75%] max-lg:grid-cols-2 max-sm:w-[100%] max-sm:grid-cols-1 max-lg:mb-20 max-sm:mb-40">
          {list.map((item) => (
            <TabsTrigger key={item.id} value={`project${item.id}`}>
              <motion.div
                initial={{ scale: 0, opacity: 1 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{
                  once: true,
                }}
              >
                {item.name}
              </motion.div>
            </TabsTrigger>
          ))}
        </TabsList>
        {list.map((item) => (
          <TabsContent key={item.id} value={`project${item.id}`}>
            <ProjectCard
              name={item.name}
              description={item.description}
              skills={item.skills}
              logo1={item.logo1}
              place={item.place}
              logo2={item.logo2}
              workType={item.workType}
              userGrowth={item.userGrowth}
              activeUsers={item.activeUsers}
              logo3={item.logo3}
              logo4={item.logo4}
              logo5={item.logo5}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default Projects;
