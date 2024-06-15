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
    <div className="flex-1 2xl:px-24 relative overflow-x-hidden px-2">
      <div className="absolute w-full bottom-0 h-16 z-10 bg-gradient-to-b from-transparent to-[#F8F8F8] opacity-80"></div>
      <div className="absolute w-full top-0 h-16 z-10 bg-gradient-to-t from-transparent to-[#F8F8F8] opacity-80"></div>

      <div className="flex items-start flex-col relative h-full overflow-y-auto px-1">
        {messages.map((m, i) => (
          <div
            className={`p-4 rounded-xl ${
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
