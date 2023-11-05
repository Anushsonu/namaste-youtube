import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  const darkTheme = useSelector((store) => store?.app?.darkTheme);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div
      className={`w-[370px] rounded-lg ${
        darkTheme ? "text-white" : "text-gray-900"
      }`}
    >
      <img
        className="w-full rounded-lg"
        src={thumbnails?.medium?.url}
        alt="video_thumbnail"
      />
      <ul className="p-2">
        <li className="font-semibold text-lg">{title}</li>
        <li>{channelTitle}</li>
        {statistics && <li>{statistics?.viewCount} views</li>}
      </ul>
    </div>
  );
};

export default VideoCard;
