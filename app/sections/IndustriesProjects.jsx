import React from "react";
import Industries from "../components/Industries";

function IndustriesProjects() {
  return (
    <div className="px-[10%] pt-10 bg-[#F2F4F7]">
      <div className="text-[36px] text-[#101828] font-bold tracking-wide w-[50%] mb-16 max-lg:w-full">
        Developed more than <span className="text-[#80A948]">100</span> projects
        in <span className="text-[#80A948]">15</span> industries
      </div>
      <div>
        <Industries />
      </div>
    </div>
  );
}

export default IndustriesProjects;
