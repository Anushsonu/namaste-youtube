import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useSelector } from "react-redux";

const VideosListShimmer = () => {
  const darkTheme = useSelector((store) => store?.app?.darkTheme);
  return (
    <div className="flex flex-wrap gap-5 ml-5">
      <div className="w-[370px] rounded-lg">
        <div className="">
          <Skeleton
            count={1}
            height={"250px"}
            baseColor={darkTheme ? "#555555" : "#dcdcdc"}
          />
        </div>
        <ul className="p-2">
          <li>
            <Skeleton count={1} baseColor={darkTheme ? "#555555" : "#dcdcdc"} />
          </li>
          <li>
            <Skeleton count={1} baseColor={darkTheme ? "#555555" : "#dcdcdc"} />
          </li>
          <li>
            <Skeleton
              count={1}
              height={"30px"}
              width={"150px"}
              baseColor={darkTheme ? "#555555" : "#dcdcdc"}
            />
          </li>
        </ul>
      </div>
      <div className="w-[370px] rounded-lg">
        <div className="">
          <Skeleton
            count={1}
            height={"250px"}
            baseColor={darkTheme ? "#555555" : "#dcdcdc"}
          />
        </div>
        <ul className="p-2">
          <li>
            <Skeleton count={1} baseColor={darkTheme ? "#555555" : "#dcdcdc"} />
          </li>
          <li>
            <Skeleton count={1} baseColor={darkTheme ? "#555555" : "#dcdcdc"} />
          </li>
          <li>
            <Skeleton
              count={1}
              height={"30px"}
              width={"150px"}
              baseColor={darkTheme ? "#555555" : "#dcdcdc"}
            />
          </li>
        </ul>
      </div>
      <div className="w-[370px] rounded-lg">
        <div className="">
          <Skeleton
            count={1}
            height={"250px"}
            baseColor={darkTheme ? "#555555" : "#dcdcdc"}
          />
        </div>
        <ul className="p-2">
          <li>
            <Skeleton count={1} baseColor={darkTheme ? "#555555" : "#dcdcdc"} />
          </li>
          <li>
            <Skeleton count={1} baseColor={darkTheme ? "#555555" : "#dcdcdc"} />
          </li>
          <li>
            <Skeleton
              count={1}
              height={"30px"}
              width={"150px"}
              baseColor={darkTheme ? "#555555" : "#dcdcdc"}
            />
          </li>
        </ul>
      </div>
      <div className="w-[370px] rounded-lg">
        <div className="">
          <Skeleton
            count={1}
            height={"250px"}
            baseColor={darkTheme ? "#555555" : "#dcdcdc"}
          />
        </div>
        <ul className="p-2">
          <li>
            <Skeleton count={1} baseColor={darkTheme ? "#555555" : "#dcdcdc"} />
          </li>
          <li>
            <Skeleton count={1} baseColor={darkTheme ? "#555555" : "#dcdcdc"} />
          </li>
          <li>
            <Skeleton
              count={1}
              height={"30px"}
              width={"150px"}
              baseColor={darkTheme ? "#555555" : "#dcdcdc"}
            />
          </li>
        </ul>
      </div>
      <div className="w-[370px] rounded-lg">
        <div className="">
          <Skeleton
            count={1}
            height={"250px"}
            baseColor={darkTheme ? "#555555" : "#dcdcdc"}
          />
        </div>
        <ul className="p-2">
          <li>
            <Skeleton count={1} baseColor={darkTheme ? "#555555" : "#dcdcdc"} />
          </li>
          <li>
            <Skeleton count={1} baseColor={darkTheme ? "#555555" : "#dcdcdc"} />
          </li>
          <li>
            <Skeleton
              count={1}
              height={"30px"}
              width={"150px"}
              baseColor={darkTheme ? "#555555" : "#dcdcdc"}
            />
          </li>
        </ul>
      </div>
      <div className="w-[370px] rounded-lg">
        <div className="">
          <Skeleton
            count={1}
            height={"250px"}
            baseColor={darkTheme ? "#555555" : "#dcdcdc"}
          />
        </div>
        <ul className="p-2">
          <li>
            <Skeleton count={1} baseColor={darkTheme ? "#555555" : "#dcdcdc"} />
          </li>
          <li>
            <Skeleton count={1} baseColor={darkTheme ? "#555555" : "#dcdcdc"} />
          </li>
          <li>
            <Skeleton
              count={1}
              height={"30px"}
              width={"150px"}
              baseColor={darkTheme ? "#555555" : "#dcdcdc"}
            />
          </li>
        </ul>
      </div>
      <div className="w-[370px] rounded-lg">
        <div className="">
          <Skeleton
            count={1}
            height={"250px"}
            baseColor={darkTheme ? "#555555" : "#dcdcdc"}
          />
        </div>
        <ul className="p-2">
          <li>
            <Skeleton count={1} baseColor={darkTheme ? "#555555" : "#dcdcdc"} />
          </li>
          <li>
            <Skeleton count={1} baseColor={darkTheme ? "#555555" : "#dcdcdc"} />
          </li>
          <li>
            <Skeleton
              count={1}
              height={"30px"}
              width={"150px"}
              baseColor={darkTheme ? "#555555" : "#dcdcdc"}
            />
          </li>
        </ul>
      </div>
      <div className="w-[370px] rounded-lg">
        <div className="">
          <Skeleton
            count={1}
            height={"250px"}
            baseColor={darkTheme ? "#555555" : "#dcdcdc"}
          />
        </div>
        <ul className="p-2">
          <li>
            <Skeleton count={1} baseColor={darkTheme ? "#555555" : "#dcdcdc"} />
          </li>
          <li>
            <Skeleton count={1} baseColor={darkTheme ? "#555555" : "#dcdcdc"} />
          </li>
          <li>
            <Skeleton
              count={1}
              height={"30px"}
              width={"150px"}
              baseColor={darkTheme ? "#555555" : "#dcdcdc"}
            />
          </li>
        </ul>
      </div>
      <div className="w-[370px] rounded-lg">
        <div className="">
          <Skeleton
            count={1}
            height={"250px"}
            baseColor={darkTheme ? "#555555" : "#dcdcdc"}
          />
        </div>
        <ul className="p-2">
          <li>
            <Skeleton count={1} baseColor={darkTheme ? "#555555" : "#dcdcdc"} />
          </li>
          <li>
            <Skeleton count={1} baseColor={darkTheme ? "#555555" : "#dcdcdc"} />
          </li>
          <li>
            <Skeleton
              count={1}
              height={"30px"}
              width={"150px"}
              baseColor={darkTheme ? "#555555" : "#dcdcdc"}
            />
          </li>
        </ul>
      </div>
      <div className="w-[370px] rounded-lg">
        <div className="">
          <Skeleton
            count={1}
            height={"250px"}
            baseColor={darkTheme ? "#555555" : "#dcdcdc"}
          />
        </div>
        <ul className="p-2">
          <li>
            <Skeleton count={1} baseColor={darkTheme ? "#555555" : "#dcdcdc"} />
          </li>
          <li>
            <Skeleton count={1} baseColor={darkTheme ? "#555555" : "#dcdcdc"} />
          </li>
          <li>
            <Skeleton
              count={1}
              height={"30px"}
              width={"150px"}
              baseColor={darkTheme ? "#555555" : "#dcdcdc"}
            />
          </li>
        </ul>
      </div>
      <div className="w-[370px] rounded-lg">
        <div className="">
          <Skeleton
            count={1}
            height={"250px"}
            baseColor={darkTheme ? "#555555" : "#dcdcdc"}
          />
        </div>
        <ul className="p-2">
          <li>
            <Skeleton count={1} baseColor={darkTheme ? "#555555" : "#dcdcdc"} />
          </li>
          <li>
            <Skeleton count={1} baseColor={darkTheme ? "#555555" : "#dcdcdc"} />
          </li>
          <li>
            <Skeleton
              count={1}
              height={"30px"}
              width={"150px"}
              baseColor={darkTheme ? "#555555" : "#dcdcdc"}
            />
          </li>
        </ul>
      </div>
      <div className="w-[370px] rounded-lg">
        <div className="">
          <Skeleton
            count={1}
            height={"250px"}
            baseColor={darkTheme ? "#555555" : "#dcdcdc"}
          />
        </div>
        <ul className="p-2">
          <li>
            <Skeleton count={1} baseColor={darkTheme ? "#555555" : "#dcdcdc"} />
          </li>
          <li>
            <Skeleton count={1} baseColor={darkTheme ? "#555555" : "#dcdcdc"} />
          </li>
          <li>
            <Skeleton
              count={1}
              height={"30px"}
              width={"150px"}
              baseColor={darkTheme ? "#555555" : "#dcdcdc"}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VideosListShimmer;
