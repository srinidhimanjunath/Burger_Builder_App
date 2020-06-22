import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItem from "../NavigationItems/Navigationitems";
import "./SideDrawer.css";
import Backdrop from "../../UI/BackDrop/Backdrop";
import Auxillary from "../../../hoc/Auxillary/Auxillary";
// import Modal from "../../UI/Modal/Modal";

const sideDrawer = (props) => {
  //   let attachedClass = ["SideDrawer", "Close"];
  //   if (props.open) {
  //     attachedClass = ["SideDrawer", "Open"];
  //   }
  return (
    <Auxillary>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={props.open ? "SideDrawer Open" : "SideDrawer Close"}>
        <Logo height="11%" marginBottom="32px" />
        <nav>
          <NavigationItem />
        </nav>
      </div>
    </Auxillary>
  );
};

export default sideDrawer;
