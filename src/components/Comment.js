import React from "react";
import userIcon from "../assets/images/user-circle-svgrepo-com.svg";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="bg-gray-200 p-5 rounded-lg my-2 flex items-center">
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
