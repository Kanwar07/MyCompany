"use client";

import React from "react";
import arrow from "../assets/arrow.png";
import Image from "next/image";
import { motion } from "framer-motion";

function DevelopmentServices() {
  const list = [
    { id: 1, name: "IOS development" },
    { id: 2, name: "Android development" },
    { id: 3, name: "Web development" },
    { id: 4, name: "UI/UX design" },
    { id: 5, name: "Testing" },
    { id: 6, name: "Launch" },
    { id: 7, name: "IT consulting" },
  ];
  return (
    <div className="flex flex-col gap-6">
      {list.map((item) => {
        const { id, name } = item;
        return (
          <motion.div
            initial={{ x: -100, scale: 0 }}
            whileInView={{ x: 0, scale: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
            viewport={{
              once: true,
            }}
            key={id}
          >
            <button className="flex flex-row items-center hover:underline hover:decoration-solid decoration-[#80A948]">
              <div className="mr-2">{name}</div>
              <div>
                <Image src={arrow} alt="arrow" />
              </div>
            </button>
          </motion.div>
        );
      })}
    </div>
  );
}

export default DevelopmentServices;
