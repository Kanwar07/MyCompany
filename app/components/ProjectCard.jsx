"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function ProjectCard({
  name,
  description,
  skills,
  logo1,
  place,
  logo2,
  workType,
  userGrowth,
  activeUsers,
  logo3,
  logo4,
  logo5,
}) {
  return (
    <div className="flex flex-row justify-between items-center mb-10 max-lg:flex-col max-lg:justify-start">
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, transition: 1 }}
        viewport={{
          once: true,
        }}
        className="flex flex-col"
      >
        <div className="text-[36px] text-[#101828] font-bold mb-10">{name}</div>
        <div className="text-[15px] text-[#101828] font-normal mb-10">
          {description}
        </div>
        <div className="text-[17px] text-[#475467] font-normal mb-10">
          {skills}
        </div>
        <div className="flex flex-row mb-10">
          <div className="flex flex-row items-center mr-8">
            <div className="mr-2">
              <Image src={logo1} alt={name} />
            </div>
            <div>{place}</div>
          </div>
          <div className="flex flex-row items-center">
            <div className="mr-2">
              <Image src={logo2} alt={name} />
            </div>
            <div>{workType}</div>
          </div>
        </div>
        <div className="flex flex-row  items-center mb-10">
          <div className="flex flex-col justify-center items-center mr-6">
            <div className="text-[24px] text-[#101828] font-bold">
              {userGrowth}
            </div>
            <div className="text-[13px] text-[#667085] font-normal">
              User Growth
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-[24px] text-[#101828] font-bold">
              {activeUsers}
            </div>
            <div className="text-[13px] text-[#667085] font-normal">
              Active Users
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center mb-10">
          <div className="w-36 h-10 mr-4 rounded-lg">
            <Image src={logo3} alt={name} />
          </div>
          <div className="w-36 h-10 rounded-lg">
            <Image src={logo4} alt={name} />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, transition: 1 }}
        viewport={{
          once: true,
        }}
        className="mb-10"
      >
        <Image src={logo5} alt={name} />
      </motion.div>
    </div>
  );
}

export default ProjectCard;
