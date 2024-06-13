import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full p-2 ">
      <style>
        {
          ".gradient-btn {background: transparent linear-gradient(90deg, #0D4174 0%, #BE45FF 50%, #E70AF8 100%, #3E013E 100%) 0% 0% no-repeat padding-box; }"
        }
      </style>
      <div className="flex w-full items-center">
        <img src="/assets/navbar-logo.png" alt="" className="w-28" />

        <div className="flex items-center justify-between w-full ml-64 mr-10">
          <div className="flex items-center gap-10 text-subtext">
            <Link href="/">Product</Link>
            <Link href="/">Resources</Link>
          </div>

          <div className="flex items-center gap-8">
            <button className="w-28 gradient-btn text-white rounded-lg py-2 hover:cursor-pointer">
              Try it free
            </button>
            <button className="w-28 bg-white rounded-lg py-2 border-subtext border text-subtext hover:cursor-pointer">
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
