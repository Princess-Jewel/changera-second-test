import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SigninMain.css";

const SigninMain = () => {
  const navigate = useNavigate();
  const [usernameValue, setUsernameValue] = useState("");
  const [auth, setAuth] = useState(false);

  const signIn = () => {
    localStorage.setItem("username", JSON.stringify(usernameValue));
    setAuth(true);
    navigate("/home");
  };

  const handleLocalStorage = () => {
    const username = localStorage.getItem("username");
    if (!username) return;

    const userObject = {
      username: username,
      status: "active",
    };

    let existingEntries = JSON.parse(localStorage.getItem("users"));

    //Check if this particular user already exists in LocalStorage
    if (existingEntries != null) {
      let duplicate = false;
      existingEntries.forEach(entry => {
        if (entry.username === username) duplicate = true;
      });
      if (duplicate) return;
    }
    //Add user to
    if (existingEntries == null) existingEntries = [];
    existingEntries.push(userObject);
    localStorage.setItem("users", JSON.stringify(existingEntries));
  };

  //This function is meant to remove a user from users list in Localstorage when a tab is closed
  const removeUser = e => {
    const username = sessionStorage.getItem("username");
    let existingEntries = JSON.parse(localStorage.getItem("users"));
    if (existingEntries == null) return;
    const index = existingEntries.findIndex(entry => {
      return entry.username === username;
    });
    if (index > -1) existingEntries.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(existingEntries));
  };

  useEffect(() => {
    handleLocalStorage();
  }, [auth]);

  useEffect(() => {
    window.addEventListener("beforeunload", removeUser);
    return () => window.removeEventListener("beforeunload", removeUser);
  }, []);

  return (
    // <div className="signin__section">
    <div className="signin__home">
      <div className="signin__home__section">
        <h3>Hi! Please sign in with your username</h3>
        <input
          className="signin__input"
          type="text"
          placeholder="Username"
          value={usernameValue}
          onChange={e => setUsernameValue(e.target.value)}
        />
        <button
          className="signin__home__button"
          disabled={!usernameValue}
          onClick={signIn}
        >
          Sign In
        </button>
      </div>
    </div>
    // </div>
  );
};

export default SigninMain;
