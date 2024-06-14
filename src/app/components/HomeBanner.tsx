import Image from "next/image";
import React from "react";

const HomeBanner = () => {
  return (
    <div className="w-full flex justify-center items-center my-36 gap-20">
      <img src="/assets/home-banner-icon.svg" alt="" />
      <div className="text-4xl flex flex-col">
        {" "}
        <span>Helping you build your</span>{" "}
        <span>
          {" "}
          <span className="font-extrabold">TWIN</span> with US
        </span>
      </div>
    </div>
  );
};

export default HomeBanner;
