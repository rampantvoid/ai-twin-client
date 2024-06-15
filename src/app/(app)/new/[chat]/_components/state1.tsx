import Image from "next/image";
import { StepProp } from "./props";
import { source } from "@/utils/fonts";

export const State1 = (props: StepProp) => {
  return (
    <div className="flex-1 flex flex-col items-center gap-24 px-32 py-24">
      <div className="flex items-center justify-center gap-24">
        <div className="flex flex-col items-center justify-center gap-4 cursor-pointer">
          <div className="bg-white rounded-[24px] flex items-center justify-start pl-10 py-5 gap-8 min-h-[100px] min-w-[320px] shadow-sm">
            <Image src="/file.svg" alt="file" width={50} height={50} />

            <p>Train with file</p>
          </div>
          <p className="text-sm">Word, Powerpoint, PDF, Videos</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 cursor-pointer">
          <div className="bg-white rounded-[24px] flex items-center justify-start pl-10 py-5 gap-8 min-h-[100px] min-w-[320px] shadow-sm">
            <Image src="/web.svg" alt="file" width={50} height={50} />

            <p>Train with web link</p>
          </div>
          <p className="text-sm">You can add social media account as well</p>
        </div>
      </div>

      <p className="text-lg">Or Simply Answer to my questions</p>

      <button
        className="mt-auto px-6 py-2 border bg-white border-black rounded-md ml-auto"
        onClick={() => props.handleNext()}
      >
        Next
      </button>
    </div>
  );
};
