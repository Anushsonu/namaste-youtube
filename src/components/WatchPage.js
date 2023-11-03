import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSLice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const url = searchParams.get("v");
  console.log("Params:", searchParams);
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="">
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
  );
};

export default WatchPage;
