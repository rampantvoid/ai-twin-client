"use client";

import Image from "next/image";
import { StepProp } from "./props";
import { useState } from "react";

export const Step1 = (props: StepProp) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex-1 flex flex-col items-start justify-start px-12 pt-32">
      <div className="flex items-center justify-center gap-3">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
        />

        <p>I agree to share my personal info.</p>
      </div>

      <div className="flex items-center justify-center gap-4 mt-20">
        <div className="h-8 w-8 flex items-center justify-center rounded-full border border-black">
          <span>1</span>
        </div>

        <p className="text-lg">Choose banks or your services you want to use</p>
      </div>

      <div className="mx-auto mt-12 grid grid-cols-4 gap-16">
        {[
          "1",
          "cred",
          "gpay",
          "hdfc",
          "jupiter",
          "kotak",
          "M",
          "paypal",
          "paytm",
          "phonepe",
          "yono",
        ].map((e) => (
          <Image
            key={e}
            height={80}
            width={80}
            src={`/payments/${e}.png`}
            alt={e}
            onClick={() => {
              if (!checked) return;

              props.setDetails((details) => ({
                ...details,
                paymentMethod: e,
              }));

              props.handleNext();
            }}
            className="cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};
