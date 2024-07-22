"use client";

import React from "react";
import Analysis from "../assets/Analysis.png";
import Design from "../assets/Design.png";
import Development from "../assets/Development.png";
import Testing from "../assets/Testing.png";
import Launching from "../assets/Launching.png";
import Support from "../assets/Support.png";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
import five from "../assets/five.png";
import six from "../assets/six.png";
import Image from "next/image";
import AppDevelopmentCard from "../components/AppDevelopmentCard";
import DevelopmentPhone from "../assets/DevelopmentPhone.png";
import { motion } from "framer-motion";

function AppDevelopment() {
  let developmentlist = [
    {
      id: 1,
      description:
        "We craft precise technical specs, aligning with your business, technology, and user requirements.",
      image: Analysis,
      name: "Analysis",
      number: one,
    },
    {
      id: 2,
      description:
        "We adapt the customer's corporate identity to the platform guidelines. We draw convenient and understandable interfaces.",
      image: Design,
      name: "Design",
      number: two,
    },
    {
      id: 3,
      description:
        "We create an extensible architecture, write clean and stable code. We integrate with customer technologies.",
      image: Development,
      name: "Development",
      number: three,
    },
    {
      id: 4,
      description:
        "We carry out functional testing and do bug fixes. We adapt the application to different phone resolutions",
      image: Testing,
      name: "Testing",
      number: four,
    },
    {
      id: 5,
      description:
        "We design the application page and publish it in the App Store and Google Play stores.",
      image: Launching,
      name: "Launching",
      number: five,
    },
    {
      id: 6,
      description:
        "We monitor the stability of the application, update it for new devices and versions of iOS and Android.",
      image: Support,
      name: "Support",
      number: six,
    },
  ];

  return (
    <>
      <div className="flex flex-row justify-end items-center px-[10%] max-xl:flex-col">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{
            once: true,
          }}
          className="grid grid-cols-1 max-lg:mt-10"
        >
          {developmentlist.slice(0, 3).map((item) => {
            const { id, description, image, name, number } = item;
            return (
              <div key={id}>
                <AppDevelopmentCard {...{ description, image, name, number }} />
              </div>
            );
          })}
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{
            once: true,
          }}
        >
          <Image src={DevelopmentPhone} alt="DevelopmentPhone" />
        </motion.div>
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{
            once: true,
          }}
          className="grid grid-cols-1 max-lg:mb-10"
        >
          {developmentlist.slice(3, 6).map((item) => {
            const { id, description, image, name, number } = item;
            return (
              <div key={id}>
                <AppDevelopmentCard {...{ description, image, name, number }} />
              </div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
}

export default AppDevelopment;
