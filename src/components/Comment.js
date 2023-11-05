import React from "react";
import userIcon from "../assets/images/user-circle-svgrepo-com.svg";
import { useSelector } from "react-redux";

const Comment = ({ data }) => {
  const { name, text } = data;
  const darkTheme = useSelector((store) => store?.app?.darkTheme);

  return (
    <div
      className={`${darkTheme ? "bg-gray-800" : "bg-gray-200"} ${
        darkTheme ? "text-white" : "text-black"
      } p-5 rounded-lg my-2 flex items-center`}
    >
      <div className="mr-2">
        <img className="h-10" src={userIcon} alt="user" />
      </div>
      <div className="flex flex-col">
        <div className="text-lg font-semibold">{name}</div>
        <div>{text}</div>
      </div>
    </div>
  );
};

export default Comment;
