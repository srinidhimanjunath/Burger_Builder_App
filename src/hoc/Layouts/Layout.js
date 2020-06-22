import React, { Component } from "react";
import Auxillary from "../Auxillary/Auxillary";
import "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    sidedrawer: false,
  };
  SidedrawerClosed = () => {
    this.setState({ sidedrawer: false });
  };
  drawerToggleClicked = () => {
    this.setState((prev) => {
      return { sidedrawer: !prev.sidedrawer };
    });
  };
  render() {
    return (
      <Auxillary>
        <Toolbar drawerToggleClicked={this.drawerToggleClicked} />
        <SideDrawer
          closed={this.SidedrawerClosed}
          open={this.state.sidedrawer}
        />
        <main className="content">{this.props.children}</main>
      </Auxillary>
    );
  }
}

export default Layout;
