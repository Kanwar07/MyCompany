import React from "react";
import Image from "next/image";

function AppDevelopmentCard({ description, image, name, number }) {
  return (
    <div className="flex flex-row border border-2 p-6 rounded-xl shadow-2xl mb-6">
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <Image src={image} alt="image" className="mr-6 my-2" />
          <div className="text-[20px] text-[#101828] font-semibold">{name}</div>
        </div>
        <div className="text-[15px] text-[#101828] font-normal">
          {description}
        </div>
      </div>
      <Image src={number} alt="number" className="size-28" />
    </div>
  );
}

export default AppDevelopmentCard;
