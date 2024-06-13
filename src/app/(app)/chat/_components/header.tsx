import { source } from "@/utils/fonts";

export const Header = () => {
  return (
    <div className="space-y-1 ">
      <h1 className="uppercase text-[18px] font-bold">twin creator</h1>
      <p
        className={`${source.className} text-[48px] text-[#999999] font-extralight`}
      >
        Personal
      </p>
    </div>
  );
};
