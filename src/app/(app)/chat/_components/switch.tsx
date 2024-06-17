import { useState } from "react";

export const Switch = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex justify-between items-center relative max-w-max border rounded-[17px] text-xs mb-3 ml-10 h-7 py-1">
      <p
        className={`${
          selected === 0 ? "text-white" : "text-[#999999]"
        } z-20 w-20 text-center cursor-pointer transition-all duration-300 `}
        onClick={() => setSelected(0)}
      >
        Educate
      </p>
      <p
        className={`${
          selected === 1 ? "text-white" : "text-[#999999]"
        } z-20 w-20 text-center cursor-pointer transition-all duration-300 `}
        onClick={() => setSelected(1)}
      >
        Ask
      </p>

      <div
        className={`absolute ${
          selected === 0 ? "translate-x-0" : "translate-x-full"
        } bg-[#F324EA] px-4 py-1 z-10 h-full rounded-[17px] w-[50%] transition-all ease-in-out duration-300`}
      ></div>
    </div>
  );
};
