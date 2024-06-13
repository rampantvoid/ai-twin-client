import { Homemade_Apple } from "next/font/google";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 w-full items-center justify-center p-2 my-28">
      <div className="font-semibold text-3xl">Your Assistant, Your Way!</div>
      <div className="text-center text-subtext">
        Design intelligent, actionable, and connected AI assistants for <br />{" "}
        Your personal, official with DT Studio.
      </div>

      <div className="bg-[#E6E6E6] w-1/2 flex justify-center py-10 rounded-3xl">
        <Link href="/chat">
          <button className="w-28 bg-[#F324EA] text-white rounded-lg py-2 hover:cursor-pointer">
            Try Now
          </button>
        </Link>
      </div>
    </div>
  );
}
