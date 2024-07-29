import React from "react";
import Planet from "../assets/Planet.png";
import Image from "next/image";

function Logo() {
  const list = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];

  const renderImages = (count) => (
    <div
      style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
      className="grid gap-4"
    >
      {list.slice(0, count).map((item) => (
        <div key={item.id} className="w-fit">
          <Image src={Planet} alt="Planet" className="size-40" />
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className="block md:hidden">{renderImages(2)}</div>
      <div className="hidden md:block lg:hidden">{renderImages(3)}</div>
      <div className="hidden lg:block xl:hidden">{renderImages(5)}</div>
      <div className="hidden xl:block">{renderImages(6)}</div>
    </>
  );
}

export default Logo;
