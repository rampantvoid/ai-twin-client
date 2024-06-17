import React from "react";
import Sidebar from "@/app/components/Sidebar";
import { Navbar } from "./chat/_components/navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#F8F8F8] w-full min-h-dvh flex">
      <Sidebar />

      <div className="bg-[#F8F8F8] w-full h-dvh flex flex-col p-6">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default layout;
