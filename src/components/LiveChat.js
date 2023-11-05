import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";
import { randomMessageGenerator } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const darkTheme = useSelector((store) => store?.app?.darkTheme);
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store?.chat?.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: randomMessageGenerator(20),
        })
      );
    }, 1000);
    return () => {
      clearInterval(i);
    };
  });
  return (
    <>
      <div
        className={`ml-2 mb-2 text-lg font-bold ${
          darkTheme ? "text-white" : "text-black"
        }`}
      >
        Live Chat
      </div>
      <div
        className={`border ${
          darkTheme ? "border-gray-600" : "border-gray-200"
        } mx-2 p-2 h-[600px] ${
          darkTheme ? "bg-gray-900" : "bg-slate-100"
        } rounded-lg custom-scrollbar flex flex-col-reverse`}
      >
        <div>
          {chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="m-2"
        onSubmit={(e) => {
          e?.preventDefault();
          dispatch(
            addMessage({
              name: "🚀🚀 ME 🚀🚀",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          value={liveMessage}
          placeholder="Your message here"
          className={`w-3/4 px-4 py-2 ${
            darkTheme ? "bg-gray-800" : "bg-gray-200"
          } ${
            darkTheme ? "text-white" : "text-black"
          } border focus:border-none`}
          type="text"
          onChange={(e) => setLiveMessage(e?.target?.value)}
        />
        <button className="w-1/4 py-2 bg-green-400">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
