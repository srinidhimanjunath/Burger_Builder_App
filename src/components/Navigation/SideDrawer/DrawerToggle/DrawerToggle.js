import React from "react";
import "./DrawerToggle.css";

const toggle = (props) => (
  <div onClick={props.clicked} className="DrawerToggle">
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default toggle;
