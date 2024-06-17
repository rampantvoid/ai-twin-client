import Image from "next/image";
import React from "react";

export const Percentage = () => {
  return (
    <div className="flex h-full items-center">
      <div className="border-l border-gray-700  px-3 flex items-center flex-col justify-center">
        <Image src="/img.png" width={270} height={270} alt="img" />
        <p className="text-3xl text-[#898989]">0%</p>
      </div>
    </div>
  );
};
