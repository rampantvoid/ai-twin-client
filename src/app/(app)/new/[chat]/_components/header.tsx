"use client";
import { source } from "@/utils/fonts";
import { useParams } from "next/navigation";

export const Header = () => {
  const param = useParams<{ chat: string }>();

  return (
    <div className="space-y-1 ">
      <h1 className="uppercase text-[18px] font-bold">AI Twin</h1>
      <p
        className={`${source.className} text-[48px] text-[#999999] font-extralight`}
      >
        Personal {param.chat} bot
      </p>
    </div>
  );
};
