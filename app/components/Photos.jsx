import React from "react";
import Dashboard from "../assets/Dashboard.png";
import Meal from "../assets/Meal.png";
import Dues from "../assets/Dues.png";
import Room from "../assets/Room.png";
import Services from "../assets/Services.png";
import Tickets from "../assets/Tickets.png";
import Image from "next/image";

function Photos() {
  const list = [
    { id: 1, name1: "Meal", name2: "Room", image1: Meal, image2: Room },
    {
      id: 2,
      name1: "Dashboard",
      name2: "Services",
      image1: Dashboard,
      image2: Services,
    },
    { id: 3, name1: "Tickets", name2: "Dues", image1: Tickets, image2: Dues },
  ];
  return (
    <div className="flex flex-col w-64 h-64 transform rotate-[-12deg]">
      {list.map((item) => {
        const { id, name1, name2, image1, image2 } = item;
        return (
          <div key={id} className="flex flex-row gap-6 mb-8">
            <Image
              src={image1}
              alt={name1}
              className="w-[310px] h-[572px] rounded-lg"
            />
            <Image src={image2} alt={name2} className="w-[310px] h-[572px]" />
          </div>
        );
      })}
    </div>
  );
}

export default Photos;
