import React from "react";
import Login from "../login/Login";
import Signup from "../signup/Signup";
import "./Message.css";

const Message = () => {
  return (
    <div>
      <h1>
        its looks like you are not Authorized user for this page please conncet
        to the admin
      </h1>
      <div className="login_signUp">
        <div className="_signup _login">
          <a href="/register"> click for signup</a>
        </div>
        <div className="_login">
          <a href="/login"> click for login</a>
        </div>
      </div>
    </div>
  );
};

export default Message;
