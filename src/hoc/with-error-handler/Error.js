import React, { Component } from "react";
import Aux from "../Auxillary/Auxillary";
import Modal from "../../components/UI/Modal/Modal";

const err = (wrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };
    componentDidMount() {
      axios.interceptors.response.use((req) => {
        this.setState({ error: null });
        return req;
      });
      axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
        }
      );
    }
    errorConfirmedHandler() {
      this.setState({ error: null });
    }
    render() {
      return (
        <Aux>
          <Modal show={this.state.error}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <wrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};
export default err;
