import React, { useState, useEffect } from "react";
import "./HomeMain.css";
import { usePageVisibility } from "../../utils/visibility";
import {
  useCurrentVisibilityTimer,
  useTotalVisibilityTimer,
} from "../../utils/timerHooks";

const HomeMain = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("username"));
    if (loggedInUser) {
      let username = JSON.parse(localStorage.getItem("username"));
      setUser(username);
    }
  }, []);

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

  let username = JSON.parse(localStorage.getItem("username"));

  function redirectToSigninPage() {
    window.location.href = "/";
  }
  function logOut() {
    localStorage.clear();
    window.location.href = "/";
  }

  // if there's a user show the home page
  if (user) {
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
  }

  // if there's no user, redirect to the signin form
  return (
    <button className="redirect__button" onClick={redirectToSigninPage}>
      Back to Sign In Page
    </button>
  );
};

export default HomeMain;
