import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearchTerm, addSearchVideos } from "../utils/searchVideosSlice";
import { setShowShimmer } from "../utils/appSLice";

const Button = ({ name, isSelected, onButtonClick }) => {
  const dispatch = useDispatch();
  const darkTheme = useSelector((store) => store?.app?.darkTheme);
  const handleVidoesSearchList = async () => {
    dispatch(setShowShimmer(true));
    if (name === "All") {
      dispatch(addSearchTerm(null));
      dispatch(addSearchVideos([]));
      dispatch(setShowShimmer(false));
    } else {
      const data = await fetch(
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=" +
          name +
          "&key=" +
          process.env.REACT_APP_GOOGLE_API_KEY
      );
      const json = await data.json();
      dispatch(addSearchTerm(name));
      dispatch(addSearchVideos(json.items));
      dispatch(setShowShimmer(false));
    }
  };
  return (
    <div>
      <button
        className={`text-sm font-semibold px-3 py-1 mx-2 my-2 ${
          darkTheme ? "bg-gray-800" : "bg-gray-200"
        } ${isSelected ? "bg-red-300" : ""} ${
          darkTheme ? "text-white" : "text-black"
        } hover:bg-gray-300 rounded-lg`}
        onClick={() => {
          onButtonClick();
          handleVidoesSearchList();
        }}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
