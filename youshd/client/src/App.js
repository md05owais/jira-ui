import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./component/signup/Signup";
import Login from "./component/login/Login";
// import ResetPassword from "./component/forgot/ResetPassword";
// import Send_otp from "./component/forgot/Send.Otp";
// import Validate_otp from "./component/forgot/Validate_otp";
// import RaiseDoubt from "./component/studentportal/RaiseDoubt";
import Index from "./component/dashBord/Index";
import GetCookie from "./component/hooks/GetCookie";
import CheckCoockie from "./component/Auth/CheckCoockie";
import Message from "./component/Auth/Message";
import CheckCookieForRegisterUser from "./component/Auth/CheckCookieForRegisterUser";
// import ProtectedRoute from "./component/ProtectedRoute";

function App() {
  const [auth, setAuth] = useState(false);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>

          <Route exact path="/" element={<CheckCoockie />}></Route>

          <Route path="/register" element={<Signup />}></Route>
          <Route
            path="/profile"
            element={<CheckCookieForRegisterUser />}
          ></Route>
          <Route path="/message" element={<Message />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
