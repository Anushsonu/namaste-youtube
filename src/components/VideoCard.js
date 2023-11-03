import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="w-[370px] rounded-lg">
      <img
        className="w-full rounded-lg"
        src={thumbnails?.medium?.url}
        alt="video_thumbnail"
      />
      <ul className="p-2">
        <li className="font-semibold text-lg">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
