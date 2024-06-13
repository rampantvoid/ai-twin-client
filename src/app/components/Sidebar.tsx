"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="h-dvh bg-white flex flex-col w-64 justify-between py-4">
      <div className="pl-6 flex flex-col gap-6">
        <Image src="/assets/navbar-logo.png" alt="" className="w-28" />
        <div className="flex flex-col gap-16">
          <div className="p-3 font-bold text-lg">My Twins</div>
          <div className="flex flex-col gap-4">
            <Link
              href="/chat"
              className={`p-3 ${
                pathname === "/chat"
                  ? "bg-[#F7F7F7] text-[#F324EA] rounded-l-xl"
                  : ""
              }`}
            >
              Chat
            </Link>
            <Link
              href="/new"
              className={`p-3 ${
                pathname === "/new"
                  ? "bg-[#F7F7F7] text-[#F324EA] rounded-l-xl"
                  : ""
              }`}
            >
              New
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8">
        <button className="w-32 border border-[#707070] text-subtext rounded-lg py-2 hover:cursor-pointer">
          Create New
        </button>

        <div className="flex flex-col gap-4">
          <Link href="" className="flex gap-2 items-center">
            <Image src="/assets/settings-icon.png" alt="" />
            Settings
          </Link>
          <Link href="" className="flex gap-2 items-center">
            <Image src="/assets/subs-icon.png" alt="" />
            Subscription
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
