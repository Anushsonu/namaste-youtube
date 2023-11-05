import React from "react";
import userIcon from "../assets/images/user-circle-svgrepo-com.svg";
import { useSelector } from "react-redux";

const ChatMessage = ({ name, message }) => {
  const darkTheme = useSelector((store) => store?.app?.darkTheme);

  return (
    <div
      className={`flex items-center shadow-md p-2 ${
        darkTheme ? "text-white" : "text-black"
      }`}
    >
      <img className="h-8" src={userIcon} alt="user" />
      <span className="font-semibold p-2">{name}:</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
