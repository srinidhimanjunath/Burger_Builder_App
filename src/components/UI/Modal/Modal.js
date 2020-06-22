import React, { Component } from "react";
import "./Modal.css";
import Auxillary from "../../../hoc/Auxillary/Auxillary";
import Backdrop from "../../UI/BackDrop/Backdrop";

class Modal extends Component {
  state = {};
  shouldComponentUpdate(nextprops, nextstate) {
    return (
      nextprops.show !== this.props.show ||
      nextprops.children !== this.props.children
    );
  }
  render() {
    return (
      <Auxillary>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className="Modal"
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Auxillary>
    );
  }
}

export default Modal;
