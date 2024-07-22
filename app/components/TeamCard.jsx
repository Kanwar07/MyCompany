"use client";

import React from "react";
import team from "../assets/team.png";
import Image from "next/image";
import { motion } from "framer-motion";

function TeamCard() {
  return (
    <div className="flex flex-row justify-between gap-8 max-lg:flex-col max-lg:justify-center">
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{
          once: true,
        }}
        className="flex flex-col w-[50%] gap-8 max-lg:w-[100%]"
      >
        <div className="text-[#101828] text-[36px] font-bold max-sm:text-center">
          Our team
        </div>
        <div className="text-[#101828] text-[15px] font-medium">
          Thousand is a full-cycle digital production company with its own
          product analytics, design, web and mobile development.
        </div>
        <div className="flex flex-row gap-8 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-col">
            <div className="text-[#101828] text-[48px] font-bold">28</div>
            <div className="text-[#667085] text-[15px] font-medium">
              team members
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-[#101828] text-[48px] font-bold">+100</div>
            <div className="text-[#667085] text-[15px] font-medium">
              projects
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-[#101828] text-[48px] font-bold flex-nowrap">
              7 years
            </div>
            <div className="text-[#667085] text-[15px] font-medium">
              in IT sphere
            </div>
          </div>
        </div>
        <div className="text-[#101828] text-[15px] font-medium max-lg:mb-10">
          All the necessary specialists - from a designer to a tester - are on
          our staff. We hire the best specialists in the market. It{"'"}s
          expensive but worth it
        </div>
      </motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        viewport={{
          once: true,
        }}
        className="w-[50%] max-lg:w-[100%] flex items-center"
      >
        <Image
          src={team}
          alt="team"
          className="rounded-xl shadow-[rgba(0,_0,_0,_0.35)_0px_5px_15px]"
        />
      </motion.div>
    </div>
  );
}

export default TeamCard;
