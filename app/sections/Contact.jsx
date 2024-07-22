import React from "react";
import DiscussProjectCard from "../components/DiscussProjectCard";

function Contact() {
  return (
    <div className="px-[10%] py-[10%] w-full flex flex-row max-sm:flex-col max-md:flex-col items-center justify-between max-sm:justify-center max-md:justify-center bg-[linear-gradient(90deg,_#FABC1F_0%,_#7CA546_100%)]">
      <div className="flex flex-col w-full">
        <div className="text-[36px] text-[#ffffff] font-bold mb-6 w-[40%] max-sm:w-[100%] max-md:w-[100%]">
          Let{"'"}s discuss Your project
        </div>
        <div className="text-[15px] text-[#ffffff] font-medium w-[60%] max-sm:w-[100%] max-sm:mb-10 max-md:w-[100%] max-md:mb-10">
          Let{"'"}s figure out how to create an effective application, its cost
          and terms of its development
        </div>
      </div>
      <div className="w-[80%]">
        <DiscussProjectCard />
      </div>
    </div>
  );
}

export default Contact;
