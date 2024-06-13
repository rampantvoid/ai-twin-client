"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const SubNavbar = () => {
  const pathname = usePathname();

  return (
    <div className="w-full flex items-center justify-center text-subtext border-b border-b-subtext gap-10">
      <Link
        href=""
        className={`px-4 py-3 hover:border-b-2 hover:border-b-[#9D00FF] transition-all ease-in-out ${
          pathname === "/" ? "border-b-2 border-b-[#9D00FF]" : ""
        }`}
      >
        Overview
      </Link>

      <Link
        href="/capabilities"
        className={`px-4 py-3 hover:border-b-2 hover:border-b-[#9D00FF] transition-all ${
          pathname === "/capabilities" ? "border-b-2 border-b-[#9D00FF]" : ""
        }`}
      >
        Capabilities
      </Link>

      <Link
        href="/pricing"
        className={`px-4 py-3 hover:border-b-2 hover:border-b-[#9D00FF] transition-all ${
          pathname === "/pricing" ? "border-b-2 border-b-[#9D00FF]" : ""
        }`}
      >
        Pricing
      </Link>

      <Link
        href="/get-started"
        className={`px-4 py-3 hover:border-b-2 hover:border-b-[#9D00FF] transition-all ${
          pathname === "/get-started" ? "border-b-2 border-b-[#9D00FF]" : ""
        }`}
      >
        Get Started
      </Link>

      <Link
        href="/support"
        className={`px-4 py-3 hover:border-b-2 hover:border-b-[#9D00FF] transition-all ${
          pathname === "/support" ? "border-b-2 border-b-[#9D00FF]" : ""
        }`}
      >
        Support
      </Link>

      <Link
        href="/faq"
        className={`px-4 py-3 hover:border-b-2 hover:border-b-[#9D00FF] transition-all ${
          pathname === "/faq" ? "border-b-2 border-b-[#9D00FF]" : ""
        }`}
      >
        FAQ
      </Link>
    </div>
  );
};

export default SubNavbar;
