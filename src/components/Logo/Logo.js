import React from "react";
import burgerLogo from "../../Assets/Images/Burger.png";
import "./Logo.css";

const logo = (props) => (
  <div
    className="Logo"
    style={{ height: props.height, marginBottom: props.marginBottom }}
  >
    <img src={burgerLogo} alt="My Burger" />
  </div>
);

export default logo;
