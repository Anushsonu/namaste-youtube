import React from "react";
import Comment from "./Comment";
import CommentsList from "./CommentsList";
import { useSelector } from "react-redux";

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "User name 🚀",
      text: "Testing comments and nested comments",
      replies: [
        {
          name: "User name 🚀",
          text: "Testing comments and nested comments",
          replies: [
            {
              name: "User name 🚀",
              text: "Testing comments and nested comments",
              replies: [
                {
                  name: "User name 🚀",
                  text: "Testing comments and nested comments",
                  replies: [
                    {
                      name: "User name 🚀",
                      text: "Testing comments and nested comments",
                      replies: [],
                    },
                  ],
                },
                {
                  name: "User name 🚀",
                  text: "Testing comments and nested comments",
                  replies: [
                    {
                      name: "User name 🚀",
                      text: "Testing comments and nested comments",
                      replies: [],
                    },
                  ],
                },
              ],
            },
            {
              name: "User name 🚀",
              text: "Testing comments and nested comments",
              replies: [
                {
                  name: "User name 🚀",
                  text: "Testing comments and nested comments",
                  replies: [],
                },
                {
                  name: "User name 🚀",
                  text: "Testing comments and nested comments",
                  replies: [],
                },
              ],
            },
            {
              name: "User name 🚀",
              text: "Testing comments and nested comments",
              replies: [],
            },
          ],
        },
        {
          name: "User name 🚀",
          text: "Testing comments and nested comments",
          replies: [],
        },
        {
          name: "User name 🚀",
          text: "Testing comments and nested comments",
          replies: [],
        },
      ],
    },
    {
      name: "User name 🚀",
      text: "Testing comments and nested comments",
      replies: [
        {
          name: "User name 🚀",
          text: "Testing comments and nested comments",
          replies: [],
        },
        {
          name: "User name 🚀",
          text: "Testing comments and nested comments",
          replies: [],
        },
      ],
    },
    {
      name: "User name 🚀",
      text: "Testing comments and nested comments",
      replies: [],
    },
    {
      name: "User name 🚀",
      text: "Testing comments and nested comments",
      replies: [],
    },
    {
      name: "User name 🚀",
      text: "Testing comments and nested comments",
      replies: [],
    },
    {
      name: "User name 🚀",
      text: "Testing comments and nested comments",
      replies: [],
    },
    {
      name: "User name 🚀",
      text: "Testing comments and nested comments",
      replies: [],
    },
    {
      name: "User name 🚀",
      text: "Testing comments and nested comments",
      replies: [],
    },
  ];
  const darkTheme = useSelector((store) => store?.app?.darkTheme);

  return (
    <div className="m-5 p-2">
      <h1
        className={`font-bold text-2xl ${
          darkTheme ? "text-white" : "text-black"
        }`}
      >
        Comments:
      </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
