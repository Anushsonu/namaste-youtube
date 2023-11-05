import React, { useEffect, useState } from "react";
import hamburger from "../assets/images/hamburger-menu-svgrepo-com.svg";
import userIcon from "../assets/images/user-circle-svgrepo-com.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { setDarkTheme, setShowShimmer, toggleMenu } from "../utils/appSLice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { addSearchTerm, addSearchVideos } from "../utils/searchVideosSlice";
// import useSearchYoutubeVideos from "../utils/hooks/useSearchYoutubeVideos";

const Head = () => {
  const dispatch = useDispatch();
  const darkTheme = useSelector((store) => store?.app?.darkTheme);
  const searchCache = useSelector((store) => store?.search);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const handleVidoesSearchList = async (e) => {
    setSuggestions([]);
    dispatch(setShowShimmer(true));
    const searcKeyword = e?.target?.innerText;
    // const data = await fetch(YOUTUBE_VIDEOS_SEARCH_API);
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=" +
        searcKeyword +
        "&key=" +
        process.env.REACT_APP_GOOGLE_API_KEY
    );
    const json = await data.json();
    dispatch(addSearchTerm(e?.target?.innerText));
    dispatch(addSearchVideos(json.items));
    dispatch(setShowShimmer(false));
  };

  return (
    <div
      className={`sticky top-0 ${
        darkTheme ? "bg-gray-900" : "bg-white"
      } flex md:grid md:grid-flow-col shadow-md px-6 py-3`}
    >
      <div className="flex justify-start items-center col-span-2">
        <img
          className="h-7 mr-5 cursor-pointer"
          src={
            darkTheme
              ? "https://icon-library.com/images/hamburger-icon-white/hamburger-icon-white-16.jpg"
              : hamburger
          }
          onClick={() => toggleMenuHandler()}
        />
        <a className="bg-white" href="/">
          <img
            className="h-4 md:h-6"
            src={
              "https://logos-download.com/wp-content/uploads/2016/02/YouTube_Logo_2017.png"
            }
            alt="logo"
          />
        </a>
      </div>
      <div className="flex col-span-4 md:col-span-8 items-center md:pl-48">
        <div>
          <input
            className={`border border-gray-400 ${
              darkTheme ? "bg-gray-800" : "bg-white"
            } ${
              darkTheme ? "text-white" : "text-black"
            } w-[100px] md:min-w-[500px] rounded-l-full py-2 px-3`}
            placeholder="Search"
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e?.target?.value);
              setShowSuggestions(true);
            }}
            // onBlur={() => setSuggestions([])}
          />
          <button
            className={`border border-gray-400 border-l-0 ${
              darkTheme ? "bg-gray-800" : "bg-white"
            } rounded-r-full px-5 py-2`}
          >
            <FontAwesomeIcon
              className={`text-lg ${
                darkTheme ? "text-white" : "text-gray-900"
              }`}
              icon="search"
            />
          </button>
          {suggestions?.length > 0 && (
            <div
              className={`fixed ${darkTheme ? "bg-gray-800" : "bg-white"} ${
                darkTheme ? "text-white" : "text-gray-900"
              } min-w-[500px] py-2 rounded-lg shadow-lg`}
            >
              <ul>
                {suggestions.map((search) => (
                  <li
                    key={search}
                    className={`cursor-pointer font-semibold py-1 px-5 hover:${
                      darkTheme ? "bg-gray-600" : "bg-white"
                    }`}
                    onClick={(e) => {
                      // console.log(e);
                      handleVidoesSearchList(e);
                    }}
                  >
                    {search}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-2 flex items-center justify-end">
        <span className="mr-4" onClick={() => dispatch(setDarkTheme())}>
          <FontAwesomeIcon
            className={`text-[2rem] ${
              darkTheme ? "text-white" : "text-gray-900"
            }`}
            icon="moon"
          />
        </span>
        <span>
          <FontAwesomeIcon
            className={`text-[1.8rem] ${
              darkTheme ? "text-white" : "text-gray-900"
            }`}
            icon="user"
          />
        </span>
      </div>
    </div>
  );
};

export default Head;
