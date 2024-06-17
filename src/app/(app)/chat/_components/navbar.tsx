import { source } from "@/utils/fonts";

export const Navbar = () => {
  const links = ["Configure", "Customize", "Integration", "Setup", "Usage"];
  return (
    <div className="w-full flex justify-between px-2">
      <div className="flex items-center flex-1 justify-center gap-3">
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
      </div>

      <div className="flex items-center gap-2">
        <h2 className={`${source.className} text-[#999999] font-bold`}>
          Harshit Chawla
        </h2>

        <img
          className="h-[59px] w-[59px] rounded-full border"
          src="/assets/maleU.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
