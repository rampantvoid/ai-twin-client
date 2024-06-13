import { StepProp } from "./props";

export const State3 = (props: StepProp) => {
  return (
    <div className="flex-1 flex flex-col items-start px-4 py-5">
      <h1 className="text-3xl">I would like to answer questions</h1>

      <div className="flex-1 flex items-center justify-center w-full flex-col gap-8 px-24">
        <h2 className="text-4xl">What are your hobbies or interests?</h2>

        <div className="flex gap-4 items-center justify-center flex-wrap px-24">
          {new Array(11).fill(0).map((_, i) => (
            <div
              key={i}
              className="px-7 py-2 rounded-[22px] border border-[#707070] text-[#707070] text-sm cursor-pointer"
              onClick={() => props.handleNext()}
            >
              <span>Hobby</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
