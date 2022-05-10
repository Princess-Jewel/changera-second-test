import React from "react";
import "../home/HomeMain.css";

const HomeMain = () => {
  
  let username = JSON.parse(sessionStorage.getItem("username"));
  function logOut() {
    sessionStorage.clear();
    window.location.href = "/";
  }

  return (
    <div>
      {username} is here
      <button className="logout__button" onClick={logOut}>
        Log Out
      </button>
    </div>
  );
};

export default HomeMain;
