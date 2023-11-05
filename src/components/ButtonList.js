import React, { useState } from "react";
import Button from "./Button";
import { useSelector } from "react-redux";

const ButtonList = () => {
  const [selectedButton, setSelectedButton] = useState("All");
  const currKeyWord = useSelector((store) => store?.app?.searchTerm);
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
    "Laptops",
    "Latest mobiles",
    "Ladies makeup",
    "Atmosphere",
    "Universe",
  ];
  const darkTheme = useSelector((store) => store?.app?.darkTheme);

  return (
    <div className="md:w-[1550px]">
      <div className="flex m-3 custom-scrollbar">
        {buttonsName.map((button, index) => (
          <Button
            key={index}
            name={button}
            isSelected={selectedButton === currKeyWord}
            onButtonClick={() => setSelectedButton(selectedButton)}
          />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
