"use client";

import Image from "next/image";
import { StepProp } from "./props";
import { useField } from "@/app/stores/field";
import { useRouter } from "next/navigation";

export const Step0 = (props: StepProp) => {
  const setField = useField((store) => store.setField);
  const router = useRouter();
  return (
    <div className="flex-1 flex flex-col items-start md:items-center lg:items-center md:px-32 lg:px-32 md:pt-24 lg:pt-24 pt-10">
      <div className="grid grid-cols-3 items-center justify-center gap-12">
        {[
          "Educational",
          "Financial",
          "Buisness",
          "Communication",
          "Shopping",
          "Health",
          "Task",
          "Travel",
          "Sample",
        ].map((e) => (
          <div
            onClick={() => {
              props.setDetails((details) => ({
                ...details,
                field: e,
              }));

              const field = e.toLocaleLowerCase();
              if (["health", "financial", "personalized"].includes(field)) {
                setField(field);
                router.push("/chat");
              }
              // props.handleNext();
            }}
            className="cursor-pointer bg-white rounded-[24px] flex items-center justify-start pl-10 py-5 gap-8 md:gap-2 lg:gap-8 min-h-[100px] lg:min-w-[300px] md:min-w-[200px] shadow-sm"
            key={e}
          >
            <Image src="/file.svg" alt="file" width={40} height={40} />

            <p>{e}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
