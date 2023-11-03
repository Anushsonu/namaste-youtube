import React, { useEffect, useState } from "react";
import hamburger from "../assets/images/hamburger-menu-svgrepo-com.svg";
import userIcon from "../assets/images/user-circle-svgrepo-com.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSLice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store?.search);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchResults(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 300);
    // console.log("search query:", searchQuery);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchResults(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

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
        <div>
          <input
            className="border border-gray-400 min-w-[500px] rounded-l-full py-2 px-3"
            placeholder="Search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e?.target?.value)}
            onBlur={() => setSearchResults([])}
          />
          <button className="border border-gray-400 border-l-0 bg-gray-200 rounded-r-full px-5 py-2">
            <FontAwesomeIcon className="text-lg text-gray-600" icon="search" />
          </button>
          {searchResults.length > 0 ? (
            <div className="fixed bg-white min-w-[500px] py-2 rounded-lg shadow-lg">
              <ul>
                {searchResults.map((search) => (
                  <li
                    key={search}
                    className="font-semibold py-1 px-5 hover:bg-gray-100"
                  >
                    {search}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
      <div className="col-span-2 flex items-center justify-end">
        <img className="h-8" src={userIcon} alt="user" />
      </div>
    </div>
  );
};

export default Head;
