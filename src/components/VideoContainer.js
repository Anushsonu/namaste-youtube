import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import VideosListShimmer from "./VideosListShimmer";
import { setShowShimmer } from "../utils/appSLice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const showShimmer = useSelector((store) => store?.app?.showShimmer);
  const searchTerm = useSelector((store) => store?.searchVideos?.searchTerm);
  const searchedVideos = useSelector(
    (store) => store?.searchVideos?.searchVideosList
  );
  // console.log(searchedVideos);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
    dispatch(setShowShimmer(false));
  };

  if (showShimmer) {
    return <VideosListShimmer />;
  }

  if (searchedVideos?.length > 0) {
    return (
      <div className="m-6 flex flex-wrap gap-5">
        {searchedVideos.map((video) => (
          <Link key={video?.id?.videoId} to={"/watch?v=" + video?.id?.videoId}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="m-6 flex flex-wrap gap-5">
      {videos?.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video?.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
