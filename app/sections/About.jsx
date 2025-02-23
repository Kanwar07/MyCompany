"use client";

import React from "react";
import ContactForm from "../components/ContactForm";
import Photos from "../components/Photos";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <div className="flex flex-row justify-center bg-[#F2F4F7] pr-[10%]">
        <div className="relative flex flex-col justify-center items-start grow-0 pl-[10%] pt-[10%] pb-[10%] max-xl:pt-[12%] max-lg:pt-[22%] max-md:pt-[32%] max-sm:pt-[42%] w-full z-10">
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", delay: 0.5, duration: 0.5 }}
            viewport={{
              once: true,
            }}
            className="w-[45%] max-lg:w-full"
          >
            <h1 className="text-[#000000] mb-2">
              <span className="text-[#FFBA00] font-[Inter] text-[39px] leading-normal font-extrabold tracking-[0.326]">
                User-Centric Excellence
              </span>
              <span className="text-[#101828] font-[Inter] text-[39px] leading-normal font-semibold tracking-[0.326]">
                : Our
              </span>{" "}
              <span className="text-[#101828] font-[Inter] text-[39px] leading-normal font-bold tracking-[0.326]">
                App Development services Tackles Your Pain Points
              </span>
            </h1>
            <p className="text-[#000000] text-[18px] font-normal leading-normal tracking-tight">
              Experience a Seamless Digital Journey with{" "}
              <span className="text-[#80A948] font-extrabold">Desun</span> -
              Where Every Line of Code Resolves Your Challenges and{" "}
              <span className="text-[#FFBA00] font-bold">
                Elevates Your App Experience
              </span>{" "}
              to Unparalleled Heights.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", delay: 1, duration: 0.5 }}
            viewport={{
              once: true,
            }}
            className="my-10 w-[60%] max-lg:w-full"
          >
            <ContactForm />
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 500, x: 100, opacity: 0 }}
          whileInView={{ y: 0, x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          viewport={{
            once: true,
          }}
          className="absolute grow right-[25rem] top-[-30rem] block max-lg:hidden z-0"
        >
          <Photos />
        </motion.div>
      </div>
      <div className="mx-[10%]">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
          viewport={{
            once: true,
          }}
          className="absolute z-40 top-8 bg-[#ffffff] w-[80%] rounded-xl"
        >
          <NavBar />
        </motion.div>
      </div>
    </>
  );
}

export default About;
