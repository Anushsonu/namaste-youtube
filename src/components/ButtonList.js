import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonsName = [
    "All",
    "Live",
    "Cricket",
    "Games",
    "News",
    "Javascript",
    "Coding",
    "Cooking",
    "Music",
    "World chess",
    "Body building",
    "Data science",
    "India",
    "Parliment",
    "Nature",
    "Animals",
    "Birds",
  ];
  return (
    <div className="flex m-3">
      {buttonsName.map((button, index) => (
        <Button key={index} name={button} />
      ))}
    </div>
  );
};

export default ButtonList;
