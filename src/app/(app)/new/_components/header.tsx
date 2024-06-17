"use client";

import { source } from "@/utils/fonts";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

export const Header = () => {
  const [botName, setBotName] = useState("Name of the Bot");

  const handleOnClick = () => {};
  return (
    <Dialog>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enter bot name</DialogTitle>
          <DialogDescription>
            <input
              type="text"
              className="w-full outline-none border border-gray-400 px-4 py-3 rounded-md mt-2"
              placeholder="Your bot name"
              value={botName}
              onChange={(e) => setBotName(e.currentTarget.value)}
            />
            <DialogClose>
              <button
                className="text-white bg-black rounded-md px-6 py-3 mt-3"
                onClick={handleOnClick}
              >
                Done
              </button>
            </DialogClose>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>

      <div className="space-y-1">
        <h1 className="text-[18px] font-bold">Create new</h1>

        <div className="flex items-center gap-24 text-wrap">
          <p
            className={`${source.className} text-[48px] text-[#999999] font-extralight`}
          >
            {botName}
          </p>
          <DialogTrigger>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              viewBox="0 0 29 29"
              className="cursor-pointer"
            >
              <g
                id="Group_89"
                data-name="Group 89"
                transform="translate(-11516.27 -3166.269)"
              >
                <g
                  id="Ellipse_9"
                  data-name="Ellipse 9"
                  transform="translate(11516.27 3166.269)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
                  <circle cx="14.5" cy="14.5" r="13.5" fill="none" />
                </g>
                <g id="edit-line" transform="translate(11523.185 3173.185)">
                  <path
                    id="Path_72"
                    data-name="Path 72"
                    d="M27.068,12.715,24.335,9.967a.964.964,0,0,0-1.36,0l-9.69,9.676L12.4,23.461a.959.959,0,0,0,.931,1.164,1,1,0,0,0,.2,0l3.86-.885,9.676-9.666A.964.964,0,0,0,27.068,12.715ZM16.927,22.9l-3.618.759.824-3.548,7.25-7.222,2.794,2.794ZM24.8,15.01l-2.794-2.794,1.62-1.611L26.374,13.4Z"
                    transform="translate(-12.379 -9.687)"
                    stroke="#000"
                    strokeWidth="1"
                  />
                </g>
              </g>
            </svg>
          </DialogTrigger>
        </div>

        <p>
          You can choose from following readymade bots from our library. You can
          make a combination aswell.
        </p>
      </div>
    </Dialog>
  );
};
