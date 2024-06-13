"use client";

import Image from "next/image";
import { Otp } from "./otp";
import { StepProp } from "./props";
import { useState } from "react";

export const Step2 = (props: StepProp) => {
  const [otp, setOtp] = useState<string>("");

  return (
    <div className="flex-1 flex flex-col items-start justify-start px-12 pt-32">
      <div className="flex items-center justify-center gap-3">
        <input type="checkbox" defaultChecked />

        <p>I agree to share my personal info.</p>
      </div>
      <div className="flex items-center justify-center gap-4 mt-20">
        <div className="h-8 w-8 flex items-center justify-center rounded-full border border-black">
          <span>1</span>
        </div>

        <p className="text-lg">Choose banks or your services you want to use</p>
      </div>
      <div className="mx-auto mt-12 flex flex-col items-center justify-center gap-10">
        <Image
          src="/payments/gpay.png"
          alt="gpay"
          height={120}
          width={120}
          className="rounded-full shadow-lg"
        />

        <p className="text-2xl font-bold">Add OTP to Approve</p>

        <Otp
          onChange={(otp) => {
            props.setDetails((details) => ({
              ...details,
              otp,
            }));

            setOtp(otp);
          }}
        />

        <button
          className="border border-[#707070] px-6 py-2 bg-white rounded-md"
          type="submit"
        >
          Approve
        </button>
      </div>
    </div>
  );
};
