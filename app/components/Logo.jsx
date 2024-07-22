import React from "react";
import Planet from "../assets/Planet.png";
import Image from "next/image";

function Logo() {
  const list = [
    { key: 1 },
    { key: 2 },
    { key: 3 },
    { key: 4 },
    { key: 5 },
    { key: 6 },
  ];

  const renderImages = (count) => (
    <div className={`grid grid-cols-${count} gap-4`}>
      {list.slice(0, count).map((item) => (
        <div key={item.key}>
          <Image src={Planet} alt="Planet" className="size-40" />
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className="block max-lg:hidden">{renderImages(6)}</div>
      <div className="hidden max-lg:block max-md:hidden">{renderImages(4)}</div>
      <div className="hidden max-md:block max-sm:hidden">{renderImages(3)}</div>
      <div className="hidden max-sm:block">{renderImages(2)}</div>
    </>
  );
}

export default Logo;
