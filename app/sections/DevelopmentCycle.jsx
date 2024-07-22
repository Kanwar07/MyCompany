import React from "react";
import Logo from "../components/Logo";
import Technologies from "../components/Technologies";
import DevelopmentServices from "../components/DevelopmentServices";

function DevelopmentCycle() {
  return (
    <div className="flex flex-col justify-center items-center w-full pb-20">
      <div className="relative w-full border-y-2 px-4 z-10 bg-[#ffffff]">
        <Logo />
      </div>
      <div className="flex flex-row max-md:flex-col justify-start bg-[#ffffff] z-10 w-full px-[10%] pt-20">
        <div className="mr-28 w-[50%] max-md:w-full max-md:mb-10">
          <Technologies />
        </div>
        <div>
          <DevelopmentServices />
        </div>
      </div>
    </div>
  );
}

export default DevelopmentCycle;
