"use client";
import Image from "next/image";
import { StepProp } from "./props";
import { source } from "@/utils/fonts";
import { createRef, useState } from "react";
import Modal from "./Modal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

export const State1 = (props: StepProp) => {
  const [isActive, setIsActive] = useState(true);
  const [file, setFile] = useState<File>();
  const fileRef = createRef<HTMLInputElement>();

  const onClick = () => {
    if (file) return;
    fileRef.current?.click();
  };

  return (
    <>
      <Dialog>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter link</DialogTitle>
            <DialogDescription>
              <input
                type="text"
                className="border outline-none rounded-md px-4 py-3 w-full mt-2"
              />
              <DialogClose>
                <button className="text-white bg-black rounded-md px-6 py-3 mt-3">
                  Done
                </button>
              </DialogClose>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>

        {/* {isActive && <Modal />} */}
        <div className="h-full flex flex-col items-center 2xl:px-32 2xl:py-24 px-4">
          <div className="h-full flex 2xl:gap-24 gap-5">
            <div
              className="flex flex-col items-center justify-center gap-4 cursor-pointer"
              onClick={onClick}
            >
              <div className="bg-white rounded-[24px] flex items-center justify-start pl-10 py-5 gap-8 min-h-[100px] min-w-[320px] shadow-sm">
                <Image src="/file.svg" alt="file" width={50} height={50} />

                <p>Train with file</p>
              </div>
              <p className="text-sm">Word, Powerpoint, PDF, Videos</p>
            </div>
            <DialogTrigger>
              <div className="flex flex-col items-center justify-center gap-4 cursor-pointer">
                <div className="bg-white rounded-[24px] flex items-center justify-start pl-10 py-5 gap-8 min-h-[100px] min-w-[320px] shadow-sm">
                  <Image src="/web.svg" alt="file" width={50} height={50} />

                  <p>Train with web link</p>
                </div>
                <p className="text-sm">
                  You can add social media account as well
                </p>
              </div>
            </DialogTrigger>
          </div>

          <p className="text-lg h-full">Or Simply Answer to my questions</p>

          <button
            className="mt-auto px-6 py-2 border bg-white border-black rounded-md ml-auto"
            onClick={() => props.handleNext()}
          >
            Next
          </button>
          <input
            type="file"
            accept="application/pdf,audio/*,video/*"
            className="hidden"
            ref={fileRef}
            onChange={(e) => {
              const files = e.target.files;
              if (!files?.length) return;
              const file = files[0];

              setFile(file);
            }}
          />
        </div>
      </Dialog>
    </>
  );
};
