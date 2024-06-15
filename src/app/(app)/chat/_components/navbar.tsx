import { source } from "@/utils/fonts";

export const Navbar = () => {
  const links = ["Configure", "Customize", "Integration", "Setup", "Usage"];
  return (
    <div className="w-full flex relative items-center pl-20 2xl:pl-52 gap-16">
      {links.map((l) => (
        <p
          key={l}
          className={`text-[#AAAAAA] border-b-2 p-2 ${
            l === "Configure" && "text-black font-bold"
          } ${
            l === "Configure" ? "border-b-[#F324EA]" : "border-b-transparent"
          }`}
        >
          {l}
        </p>
      ))}

      <div className="absolute right-5 flex items-center justify-center gap-3">
        <h2 className={`${source.className} text-[#999999] text-lg font-bold`}>
          harshit chawla
        </h2>

        <div className="h-[59px] w-[59px] rounded-full bg-white border"></div>
      </div>
    </div>
  );
};
