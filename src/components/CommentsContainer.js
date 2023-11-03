import React from "react";
import Comment from "./Comment";
import CommentsList from "./CommentsList";

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Anush",
      text: "Testing comments and nested comments",
      replies: [
        {
          name: "Anush",
          text: "Testing comments and nested comments",
          replies: [
            {
              name: "Anush",
              text: "Testing comments and nested comments",
              replies: [
                {
                  name: "Anush",
                  text: "Testing comments and nested comments",
                  replies: [
                    {
                      name: "Anush",
                      text: "Testing comments and nested comments",
                      replies: [],
                    },
                  ],
                },
                {
                  name: "Anush",
                  text: "Testing comments and nested comments",
                  replies: [
                    {
                      name: "Anush",
                      text: "Testing comments and nested comments",
                      replies: [],
                    },
                  ],
                },
              ],
            },
            {
              name: "Anush",
              text: "Testing comments and nested comments",
              replies: [
                {
                  name: "Anush",
                  text: "Testing comments and nested comments",
                  replies: [],
                },
                {
                  name: "Anush",
                  text: "Testing comments and nested comments",
                  replies: [],
                },
              ],
            },
            {
              name: "Anush",
              text: "Testing comments and nested comments",
              replies: [],
            },
          ],
        },
        {
          name: "Anush",
          text: "Testing comments and nested comments",
          replies: [],
        },
        {
          name: "Anush",
          text: "Testing comments and nested comments",
          replies: [],
        },
      ],
    },
    {
      name: "Anush",
      text: "Testing comments and nested comments",
      replies: [
        {
          name: "Anush",
          text: "Testing comments and nested comments",
          replies: [],
        },
        {
          name: "Anush",
          text: "Testing comments and nested comments",
          replies: [],
        },
      ],
    },
    {
      name: "Anush",
      text: "Testing comments and nested comments",
      replies: [],
    },
    {
      name: "Anush",
      text: "Testing comments and nested comments",
      replies: [],
    },
    {
      name: "Anush",
      text: "Testing comments and nested comments",
      replies: [],
    },
    {
      name: "Anush",
      text: "Testing comments and nested comments",
      replies: [],
    },
    {
      name: "Anush",
      text: "Testing comments and nested comments",
      replies: [],
    },
    {
      name: "Anush",
      text: "Testing comments and nested comments",
      replies: [],
    },
  ];
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
