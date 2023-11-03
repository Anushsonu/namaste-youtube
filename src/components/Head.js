import React, { useState } from "react";
import hamburger from "../assets/images/hamburger-menu-svgrepo-com.svg";
import userIcon from "../assets/images/user-circle-svgrepo-com.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSLice";
import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  // console.log(searchQuery);
  return (
    <div className="sticky top-0 bg-white grid grid-flow-col shadow-md px-6 py-3">
      <div className="flex justify-start items-center col-span-2">
        <img
          className="h-7 mr-5 cursor-pointer"
          src={hamburger}
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img
            className="h-6"
            src={
              "https://logos-download.com/wp-content/uploads/2016/02/YouTube_Logo_2017.png"
            }
            alt="logo"
          />
        </a>
      </div>
      <div className="flex col-span-8 items-center pl-48">
        <input
          className="border border-gray-400 w-1/2 rounded-l-full py-2 px-3"
          placeholder="Search"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e?.target?.value)}
        />
        <button className="border border-gray-400 border-l-0 bg-gray-200 rounded-r-full px-5 py-2">
          <FontAwesomeIcon className="text-lg text-gray-600" icon="search" />
        </button>
      </div>
      <div className="col-span-2 flex items-center justify-end">
        <img className="h-8" src={userIcon} alt="user" />
      </div>
    </div>
  );
};

export default Head;
