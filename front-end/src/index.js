import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import NavBarComponent from "./Components/NavBar/NavBarComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import JourneyComponent from "./Components/Journey/JourneyComponent";

import SignupComponent from "./Components/SignUp/SignUpComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <NavBarComponent />
      {/* <JourneyComponent /> */}

      <Routes>
        <Route path="/signup" element={<SignupComponent />} />        
      </Routes>
    </Router>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
