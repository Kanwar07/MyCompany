"use client";

import React from "react";
import FAQAccordion from "../components/FAQAccordion";
import { motion } from "framer-motion";

function FAQ() {
  const list = [
    {
      id: 1,
      question: "What is the cost of a mobile application?",
      ans: "Simple apps cost between $10,000 and $60,000, average complexity apps fall between $60,000 and $150,000, and highly advanced apps start at around $300,000.",
    },
    {
      id: 2,
      question: "Do you provide a guarantee for the mobile application?",
      ans: "If you’ve developed your mobile application and don’t want it to be used for nefarious means, we have great news for you! We at Lean Security offer comprehensive services for end to end mobile application penetration test!",
    },
    {
      id: 3,
      question: "How long will development take?",
      ans: "Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.Average development time from start to finished application:Medium projects up to 3 months.Large projects about 4-6 months.To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality.",
    },
    {
      id: 4,
      question: "I will not tell my idea, do you guarantee confidentiality?",
      ans: "Before you start the conflict resolution process, you need to explain to the parties what confidentiality means, why it is important, and what are the limits and exceptions to it. You also need to obtain their consent and agreement to respect confidentiality, and document it in a written contract or statement. This way, you can establish a common understanding and avoid misunderstandings or breaches later on.",
    },
  ];
  return (
    <div className="px-[10%] py-[10%]">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{
          once: true,
        }}
        className="grid grid-cols-2 max-lg:grid-cols-1 gap-8"
      >
        {list.map((item) => {
          const { id, question, ans } = item;
          return (
            <div key={id}>
              <FAQAccordion {...{ question, ans }} />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default FAQ;
