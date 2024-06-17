import { source } from "@/utils/fonts";

export const Header = () => {
  return (
    <div className="">
      <h1 className="uppercase text-[18px] font-bold m-0">twin creator</h1>
      <p
        className={`${source.className} text-[44px] text-[#999999] font-extralight`}
      >
        Personal
      </p>
    </div>
  );
};
