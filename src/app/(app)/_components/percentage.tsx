import Image from "next/image";
import React from "react";

export const Percentage = () => {
  return (
    <div className="h-full flex-1 py-24">
      <div className="border-l border-gray-700 h-full p-10 flex items-center flex-col justify-center">
        <Image src="/img.png" height={500} width={500} alt="img" />
        <p className="text-4xl text-[#898989]">0%</p>
      </div>
    </div>
  );
};
