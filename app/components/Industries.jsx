"use client";

import React from "react";
import Social from "../assets/Social.png";
import Education from "../assets/Education.png";
import AR from "../assets/AR.png";
import Fitness from "../assets/Fitness.png";
import Auto from "../assets/Auto.png";
import TV from "../assets/TV.png";
import Bank from "../assets/Bank.png";
import Medicine from "../assets/Medicine.png";
import Startups from "../assets/Startups.png";
import Construction from "../assets/Construction.png";
import Restaurant from "../assets/Restaurant.png";
import Religion from "../assets/Religion.png";
import Game from "../assets/Game.png";
import Marketplaces from "../assets/Marketplaces.png";
import OnlineCources from "../assets/OnlineCources.png";
import Image from "next/image";
import { motion } from "framer-motion";

function Industries() {
  const list = [
    { id: 1, name: "Social media", image: Social },
    { id: 2, name: "Education", image: Education },
    { id: 3, name: "AR technology", image: AR },
    { id: 4, name: "Fitness and sport", image: Fitness },
    { id: 5, name: "Auto, transport", image: Auto },
    { id: 6, name: "TV series", image: TV },
    { id: 7, name: "Bank", image: Bank },
    { id: 8, name: "Medicine, health", image: Medicine },
    { id: 9, name: "Startups", image: Startups },
    { id: 10, name: "Construction", image: Construction },
    { id: 11, name: "Restaurants, food delivery", image: Restaurant },
    { id: 12, name: "Religion", image: Religion },
    { id: 13, name: "Game projects", image: Game },
    { id: 14, name: "Marketplaces", image: Marketplaces },
    { id: 15, name: "Online courses", image: OnlineCources },
  ];

  const containerVariants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1"
    >
      {list.map((item) => {
        const { id, name, image } = item;
        return (
          <motion.button
            key={id}
            variants={itemVariants}
            className="flex flex-row items-center"
          >
            <div className="size-8 mr-4">
              <Image
                src={image}
                alt={name}
                className="p-2 rounded-2xl bg-[#ffffff] size-8"
              />
            </div>
            <div>{name}</div>
          </motion.button>
        );
      })}
    </motion.div>
  );
}

export default Industries;
