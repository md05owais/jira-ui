import React, { useEffect } from "react";
import GetCookie from "../hooks/GetCookie";
import { useNavigate } from "react-router-dom";
import RemoveCookie from "../hooks/RemoveCookie";
import Messeag from "./Message";
import Index from "../dashBord/Index";
import Login from "../login/Login";
const CheckCoockie = () => {
  const navigate = useNavigate();

  const auth = GetCookie("usrin");

  console.log(auth);
  //   useEffect(() => {
  //     if (!auth) {
  //       navigate("/login");
  //     } else {
  //       navigate("/Message");
  //     }
  //   });
  return <div>{auth ? <Index /> : <Login />}</div>;
};

export default CheckCoockie;
