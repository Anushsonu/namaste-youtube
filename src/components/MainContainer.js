import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import { openMenu } from "../utils/appSLice";
import VideoContainer from "./VideoContainer";
import { useDispatch, useSelector } from "react-redux";

const MainContainer = () => {
  const dispatch = useDispatch();
  const darkTheme = useSelector((store) => store?.app?.darkTheme);
  useEffect(() => {
    dispatch(openMenu());
  }, []);
  return (
    <div className={`w-full ${darkTheme ? "bg-gray-900" : "bg-white"}`}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
