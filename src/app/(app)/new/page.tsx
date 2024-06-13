"use client";

import React, { FormEvent, useMemo, useState } from "react";
import { Header } from "./_components/header";
import { Percentage } from "../_components/percentage";
import { Step0 } from "./_components/step0";
import { Step1 } from "./_components/step1";
import { Step2 } from "./_components/step2";
import { Inputs } from "./_components/props";

const Page = () => {
  const [step, setStep] = useState(0);

  const [details, setDetails] = useState<Inputs>({
    field: "",
    paymentMethod: "",
    otp: "",
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(details);
  };

  const Component = useMemo(() => {
    if (step === 0) return Step0;

    if (step === 1) return Step1;
    if (step === 2) return Step2;
  }, [step]);

  return (
    <div className="w-full h-full flex flex-1 mt-16">
      <form
        className="w-[70%] flex flex-col justify-between"
        onSubmit={onSubmit}
      >
        <Header />

        {Component && (
          <Component
            setDetails={setDetails}
            details={details}
            handleNext={() => {
              setStep((s) => Math.min(s + 1, 2));
            }}
          />
        )}
      </form>
      <Percentage />
    </div>
  );
};

export default Page;
