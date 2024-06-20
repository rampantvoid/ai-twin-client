"use client";

import { useField } from "@/app/stores/field";
import { useMessages } from "@/app/stores/messages";
import { getResponse, getSummary } from "@/utils/api";
import Image from "next/image";
import { createRef, FormEvent, useEffect, useState } from "react";

export function Input() {
  const textRef = createRef<HTMLInputElement>();
  const addMessage = useMessages((store) => store.addMessage);
  const [loading, setLoading] = useState(false);

  const field = useField((store) => store.field);

  const [file, setFile] = useState<File>();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    if (file) {
      setLoading(true);

      addMessage(field || "root", {
        author: "me",
        message: `Summarize ${file.name}`,
      });

      let endpoint = null;
      if (file.type.startsWith("audio/")) {
        endpoint = "audio";
      } else if (file.type.startsWith("application/pdf")) {
        endpoint = "pdf";
      } else if (file.type.startsWith("video/")) {
        endpoint = "video";
      }

      if (endpoint === null) {
        setLoading(false);
        setFile(undefined);
        return;
      }

      getSummary(file, endpoint)
        .then((summary) =>
          addMessage(field || "root", { author: "gemini", message: summary })
        )
        .catch(() =>
          addMessage(field || "root", {
            author: "gemini",
            message: "Gemini couldnt respond to this message.",
          })
        )
        .finally(() => {
          setFile(undefined);
          setLoading(false);
        });

      return;
    }

    if (!textRef.current?.value) return;

    setLoading(true);

    const val = textRef.current.value;
    textRef.current.value = "";

    addMessage(field || "root", {
      author: "me",
      message: val,
    });

    getResponse(field, val)
      .then((text) => {
        addMessage(field || "root", {
          author: "gemini",
          message: text,
        });
      })
      .catch(() => {
        addMessage(field || "root", {
          author: "gemini",
          message: "Gemini couldnt respond to this message.",
        });
      })
      .finally(() => setLoading(false));
  };

  const fileRef = createRef<HTMLInputElement>();

  const onClick = () => {
    if (file) return;
    fileRef.current?.click();
  };

  const formRef = createRef<HTMLFormElement>();

  useEffect(() => {
    if (file && !loading) {
      formRef.current?.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }
  }, [file]);

  return (
    <form
      ref={formRef}
      className=" w-full bg-[#E8E8E8] rounded-[40px] p-4 flex items-center justify-between"
      onSubmit={onSubmit}
    >
      <input
        type="text"
        className="placeholder:text-[#626262] w-full bg-transparent outline-none border-none disabled:cursor-not-allowed"
        placeholder={!loading ? "Train your twin" : "Generating Response..."}
        ref={textRef}
        disabled={loading}
      />

      <div className="flex gap-4 items-center pr-6 pl-1">
        <Image
          src="/file.svg"
          height={20}
          width={20}
          alt="img"
          onClick={onClick}
          className={`${file && "opacity-30"} cursor-pointer`}
        />
        <Image
          src="/painting.svg"
          height={20}
          width={20}
          onClick={onClick}
          alt="img"
          className={`${file && "opacity-30"} cursor-pointer`}
        />
        <Image
          src="/video.svg"
          onClick={onClick}
          height={20}
          width={20}
          alt="img"
          className={`${file && "opacity-30"} cursor-pointer`}
        />
        <Image
          src="/mic.svg"
          height={20}
          width={20}
          onClick={onClick}
          alt="img"
          className={`${file && "opacity-30"} cursor-pointer`}
        />

        <input
          type="file"
          accept="application/pdf,audio/*,video/*"
          className="hidden"
          ref={fileRef}
          onChange={(e) => {
            const files = e.target.files;
            if (!files?.length) return;
            const file = files[0];

            if (fileRef.current) {
              fileRef.current.value = "";
            }

            setFile(file);
          }}
        />
      </div>
    </form>
  );
}
