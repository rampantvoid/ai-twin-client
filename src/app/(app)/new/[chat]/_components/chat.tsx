import { useMessages } from "@/app/stores/messages";
import { createRef, useEffect } from "react";
import Markdown from "react-markdown";

export const Chat = () => {
  const messages = useMessages((store) => store.messages);

  const scrollRef = createRef<HTMLDivElement>();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, scrollRef]);

  return (
    <div className=" 2xl:px-24 overflow-x-hidden px-2 h-[400px] 2xl:h-[600px]">
      <div className="flex items-start flex-col  px-1">
        {messages.map((m, i) => (
          <div
            className={`p-3 rounded-xl ${
              m.author === "gemini"
                ? "self-start bg-gray-200"
                : "self-end bg-gray-200"
            } ${i === messages.length - 1 ? "mb-0" : "mb-8"}`}
            key={i}
          >
            <Markdown className="prose">{m.message}</Markdown>
          </div>
        ))}

        <div ref={scrollRef} />
      </div>
    </div>
  );
};
