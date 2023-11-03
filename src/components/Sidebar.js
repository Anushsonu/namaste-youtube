import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) {
    return null;
  }
  return (
    <div className="sidebar p-5 shadow-lg min-w-[220px]">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>Youtube Music</li>
      </ul>
      <h1>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1>Explore</h1>
      <ul>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>News</li>
        <li>News</li>
      </ul>
    </div>
  );
};

export default Sidebar;
