import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function DiscussProjectCard() {
  return (
    <div className="flex flex-col justify-end w-full h-full border border-2 py-8 px-4 bg-[#ffffff] rounded-xl shadow-2xl">
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex flex-row justify-center gap-4">
          <div className="flex flex-col">
            <span className="text-[13px] text-[#667085] font-medium">
              Full Name
            </span>
            <Input
              type="name"
              placeholder="My Name"
              className="border-0 border-b-2 border-[#000000] focus:border-[#4BB543] rounded-none"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] text-[#667085] font-medium">
              Phone Number
            </span>
            <Input
              type="number"
              placeholder="0000000000"
              className="border-0 border-b-2 border-[#000000] focus:border-[#4BB543] rounded-none"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center gap-4">
          <div className="flex flex-col">
            <span className="text-[13px] text-[#667085] font-medium">
              Business name
            </span>
            <Input
              type="name"
              placeholder="ABC Technologies PVT LTD"
              className="border-0 border-b-2 border-[#000000] focus:border-[#4BB543] rounded-none"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] text-[#667085] font-medium">
              Business mail
            </span>
            <Input
              type="email"
              placeholder="demoaccount@gmail.com"
              className="border-0 border-b-2 border-[#000000] focus:border-[#4BB543] rounded-none"
            />
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-[#FFB900] w-40 text-[#ffffff] cursor-pointer hover:text-[#000000]">
        <Button>Discuss the project</Button>
      </div>
    </div>
  );
}

export default DiscussProjectCard;
