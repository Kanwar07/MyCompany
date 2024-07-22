import React from "react";

function Technologies() {
  const webSkills = [
    { id: 1, tech: "PHP" },
    { id: 2, tech: "Javascript" },
    { id: 3, tech: "Node.JS" },
    { id: 4, tech: "Web Socket" },
    { id: 5, tech: "Socket.io" },
    { id: 6, tech: "Vue.js" },
    { id: 7, tech: "Nuxt" },
    { id: 8, tech: "MySQL" },
    { id: 9, tech: "Laravel" },
    { id: 10, tech: "GO lang" },
    { id: 11, tech: "django" },
    { id: 12, tech: "Python" },
  ];

  const mobileSkills = [
    { id: 1, tech: "Swift" },
    { id: 2, tech: "Kotlin" },
    { id: 3, tech: "Alamofire" },
    { id: 4, tech: "Firebase" },
    { id: 5, tech: "CoreData" },
    { id: 6, tech: "Room" },
    { id: 7, tech: "Realm" },
    { id: 8, tech: "Coroutine" },
    { id: 9, tech: "RxJava" },
    { id: 10, tech: "RxSwift" },
    { id: 11, tech: "Unit Test" },
    { id: 12, tech: "Navigations" },
  ];
  return (
    <div className="flex flex-col w-full">
      <div className="text-[#101828] text-[36px] mb-4">
        Full development cycle
      </div>
      <div className="text-[#101828] text-[15px] mb-4">
        We use proven technologies
      </div>
      <div className="mb-4 flex flex-col">
        <div className="text-[#101828] text-[20px] mb-2">Web</div>
        <div className="flex flex-row flex-wrap">
          {webSkills.map((item) => {
            const { id, tech } = item;
            return (
              <button key={id} className="flex flex-row">
                <div className="text-[17px] text-[#344054] mx-4 hover:underline hover:decoration-solid decoration-[#80A948]">
                  {tech}
                </div>
                <div>{" / "}</div>
              </button>
            );
          })}
        </div>
      </div>
      <div className="mb-4 flex flex-col">
        <div className="text-[#101828] text-[20px] mb-2">Mobile</div>
        <div className="flex flex-row flex-wrap">
          {mobileSkills.map((item) => {
            const { id, tech } = item;
            return (
              <button key={id} className="flex flex-row">
                <div className="text-[17px] text-[#344054] mx-4 hover:underline hover:decoration-solid decoration-[#80A948]">
                  {tech}
                </div>
                <div>{" / "}</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Technologies;
