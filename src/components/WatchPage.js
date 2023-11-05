import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSLice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const darkTheme = useSelector((store) => store?.app?.darkTheme);
  const [searchParams] = useSearchParams();
  const url = searchParams.get("v");
  // console.log("Params:", searchParams);
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div
      className={`flex flex-col w-full ${
        darkTheme ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="ml-5 mt-5 flex">
        <div>
          <iframe
            // className=""
            width="1400"
            height="700"
            src={"https://www.youtube.com/embed/" + url + "?autoplay=1"}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
