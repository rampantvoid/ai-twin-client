import React from "react";
import Sidebar from "@/app/components/Sidebar";
import { Navbar } from "./chat/_components/navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#F8F8F8] min-w-screen min-h-[100vh] flex">
      <Sidebar />

      <div className="bg-[#F8F8F8] flex-1 h-dvh flex flex-col p-6 py-10">
        <Navbar />

        {children}
      </div>
    </div>
  );
};

export default layout;
