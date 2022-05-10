import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./SigninMain.css";

const SigninMain = () => {
  const navigate = useNavigate();
  const [usernameValue, setUsernameValue] = useState("");

  const princess = () => {
    sessionStorage.setItem("username", JSON.stringify(usernameValue));
    navigate('/home');
  }
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
        <button className="signin__home__button" disabled={!usernameValue} onClick={princess}>
          Sign In
        </button>
      </div>
    </div>
    // </div>
  );
};

export default SigninMain;
