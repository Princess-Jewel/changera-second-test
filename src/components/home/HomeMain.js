import React from "react";
import "../home/HomeMain.css";

const HomeMain = () => {
  let username = JSON.parse(sessionStorage.getItem("username"));
  return <div>{username} is here</div>;
};

export default HomeMain;
