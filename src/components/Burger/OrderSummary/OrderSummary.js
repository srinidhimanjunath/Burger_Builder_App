import React, { Component } from "react";
import Auxillary from "../../../hoc/Auxillary/Auxillary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  state = {};
  componentDidUpdate() {
    console.log("[OrderSummary] is updated");
  }
  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients).map(
      (igkey) => {
        return (
          <li key={igkey}>
            <span style={{ textTransform: "capitalize" }}>{igkey}</span>:{" "}
            {this.props.ingredients[igkey]}
          </li>
        );
      }
    );
    return (
      <Auxillary>
        <h3>Your Order</h3>
        <p>A Delicious burger with following Ingredients:</p>
        <ul>{ingredientsSummary}</ul>
        <p>
          <strong>Total Price : {this.props.price}</strong>
        </p>
        <p>Continue for Checkout</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelHandel}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinueHandler}>
          Continue
        </Button>
      </Auxillary>
    );
  }
}

export default OrderSummary;
