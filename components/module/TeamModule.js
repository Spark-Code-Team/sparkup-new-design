"use client";

import DefaultPerson from "../elements/DefaultPerson";
import { useState } from "react";

const TeamModule = ({ image, name }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div className="lg:w-[175px] h-[200px] rounded-2xl hover:bg-gray-300 transition duration-200 ex bg-gray-200 flex flex-col items-center justify-center pr-2 pl-2 relative group">
        <DefaultPerson
          width={100}
          height={100}
          className={`rounded-md ${hovered ? "hover-filter" : ""}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
        <p className="transform -translate-y-1/2 font-bold opacity-0 group-hover:opacity-90 hover:text-red-500 text-xl text-red-700 mt-36">
          {name}
        </p>
      </div>
    </>
  );
};

export default TeamModule
