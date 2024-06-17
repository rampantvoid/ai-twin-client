import Image from "next/image";
import { useState } from "react";
import {
  RiTwitterXLine,
  RiYoutubeFill,
  RiLinkedinBoxFill,
  RiInstagramLine,
  RiFacebookFill,
  RiWhatsappLine,
} from "react-icons/ri";
import { StepProp } from "./props";
import { IconType } from "react-icons";

const State2 = (props: StepProp) => {
  return (
    <div className="h-full flex flex-col items-start 2xl:px-12 2x:pt-10 px-4 overflow-y-scroll">
      <div className="flex items-center justify-center gap-5">
        <Image src="/web.svg" width={45} height={45} alt="web" />
        <p>Train with web link</p>
      </div>

      <div className="grid mt-10 grid-cols-3 gap-12 w-full 2xl:px-24">
        {[
          RiTwitterXLine,
          RiYoutubeFill,
          RiLinkedinBoxFill,
          RiInstagramLine,
          RiFacebookFill,
          RiWhatsappLine,
          RiTwitterXLine,
          RiInstagramLine,
        ].map((C, i) => {
          return <Field C={C} key={i} />;
        })}
      </div>

      <div className="flex items-center justify-center gap-3 2xl:mt-28 mt-8">
        <div className="flex items-center justify-center relative">
          <input
            type="checkbox"
            name=""
            id=""
            className={`peer appearance-none h-8 w-8 flex items-center justify-center border-[3px] rounded-[10px] border-gray-400 checked:bg-green-400 checked:border-black`}
          />
          <svg
            className={`
      absolute 
      w-4 h-4 mt-1
      hidden peer-checked:block pointer-events-none`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <svg
            className={`
      absolute 
      w-4 h-4 mt-1
      peer-checked:hidden pointer-events-none`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="gray"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>

        <p>I agree terms and conditions</p>
      </div>

      <button
        className="bg-[#F324EA] px-6 rounded-md py-2 border border-[#707070] text-white mx-auto mt-12"
        onClick={() => props.handleNext()}
      >
        Submit
      </button>
    </div>
  );
};

function Field({ C }: { C: IconType }) {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex gap-4 items-end justify-center">
      <div className="flex items-center justify-center peer relative">
        <input
          type="checkbox"
          name=""
          id=""
          className={`peer appearance-none h-6 w-6 flex items-center justify-center border-[3px] rounded-[10px] border-gray-400 checked:bg-green-400 checked:border-black focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100`}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <svg
          className="
absolute 
w-4 h-4 mt-1
hidden peer-checked:block pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>

        <svg
          className={`
absolute 
w-4 h-4 mt-1
peer-checked:hidden pointer-events-none`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="gray"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>

      <div
        className={`p-5 rounded-full bg-black items-center justify-center flex shadow-2xl ${
          checked && "bg-green-400"
        }`}
      >
        <C fill="white" className="w-6 h-6" />
      </div>
    </div>
  );
}

export default State2;
