import React from "react";
import "./HomeMain.css";
import { usePageVisibility } from "../../utils/visibility";
import {
  useCurrentVisibilityTimer,
  useTotalVisibilityTimer,
} from "../../utils/timerHooks";

const HomeMain = () => {
  const isVisible = usePageVisibility();

  // Change the title based on page visibility
  if (isVisible) {
    document.title = "Active";
  } else {
    document.title = "Inactive";
  }

  // Custom timers which are affected by the page visibility
  const timerVal = useCurrentVisibilityTimer(isVisible);
  const totalTimeVal = useTotalVisibilityTimer(isVisible);

  let username = JSON.parse(sessionStorage.getItem("username"));
  function logOut() {
    sessionStorage.clear();
    window.location.href = "/";
  }

  return (
    <div className="signed__in__section">
      <p className="signed__in__user">Welcome!!!&nbsp;{username}</p>

      <h2 className="title">You've been looking at this page for</h2>
      <p>
        about <b>{timerVal}</b> seconds non-stop
        <br />
        and <b>{totalTimeVal}</b> seconds in total
      </p>

      <button className="logout__button" onClick={logOut}>
        Log Out
      </button>
    </div>
  );
};

export default HomeMain;
