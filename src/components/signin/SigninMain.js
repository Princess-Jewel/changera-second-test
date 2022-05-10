import React, { useState } from "react";
import "./SigninMain.css";

const SigninMain = () => {
  const [usernameValue, setUsernameValue] = useState("");

  console.log(usernameValue);
  const princess = () => {
    console.log("princess");
  }
  // const handleInputChange = e => {
  //   const { value } = e.target;
  //   console.log("Username value: ", value);

  //   const re = /^[A-Za-z]+$/;
  //   if (value === "" || re.test(value)) {
  //     setUsernameValue(value);
  //   }
  // };
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
