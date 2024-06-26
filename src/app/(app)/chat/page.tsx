"use client";

import { Input } from "./_components/input";
import { Switch } from "./_components/switch";
import { Header } from "./_components/header";
import { Points } from "./_components/points";
import { Percentage } from "../_components/percentage";
import { source } from "@/utils/fonts";
import { useEffect, useMemo, useState } from "react";
import { State1 } from "./_components/state1";
import State2 from "./_components/state2";
import { State3 } from "./_components/state3";
import { Chat } from "./_components/chat";

const Page = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("isSetupDone") === "true") {
      setStep(4);
    }
    if (step > 3) {
      sessionStorage.setItem("isSetupDone", "true");
    }
  }, [step]);

  const Component = useMemo(() => {
    console.log(step);
    if (step === 1) {
      return State1;
    } else if (step === 2) {
      return State2;
    } else if (step === 3) {
      return State3;
    }
  }, [step]);

  const shouldShowComponent = useMemo(() => {
    // if (field) return false;
    if (step > 3) return false;

    return true;
  }, [step]);

  return (
    <div className="w-full h-full flex px-1 py-3">
      <div className="flex-1 flex flex-col justify-between">
        <Header />

        {step === 0 && shouldShowComponent && (
          <Points
            handleNext={() => {
              setStep((s) => Math.min(s + 1, 4));
            }}
          />
        )}
        {Component && shouldShowComponent && (
          <Component
            handleNext={() => {
              setStep((s) => Math.min(s + 1, 4));
            }}
          />
        )}

        {!shouldShowComponent && <Chat />}
        <div className="flex p-1 2xl:px-24 flex-col">
          {!shouldShowComponent && <Switch />}
          {!shouldShowComponent && <Input />}

          {!shouldShowComponent && (
            <p
              className={`text-[#B9B9B9] ${source.className} text-center text-sm mt-4`}
            >
              Please write accurate else it can do mistakes. Check important
              info.
            </p>
          )}
        </div>
      </div>
      <Percentage />
    </div>
  );
};

export default Page;
