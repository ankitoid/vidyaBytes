import React from "react";
import './LoginSignup.css';

import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import pass_icon from "../Assets/password.png";
import m_icon from "../Assets/mobile.png";

function LoginSignup() {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign-Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Please Enter Your Name" />
        </div>

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="Email" placeholder="Enter Your Email" />
        </div>

        <div className="input">
          <img src={pass_icon} alt="" />
          <input type="password" placeholder="Enter a Password" />
        </div>

        <div className="input">
          <img src={m_icon} alt="" />
          <input type="Mobile" placeholder="Enter Mobile No." />
        </div>
      </div>

      <div className="forgot-password">
        Lost Password <span>Click Here</span>
      </div>

      <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>
      </div>
    </div>
  );
}

export default LoginSignup;
