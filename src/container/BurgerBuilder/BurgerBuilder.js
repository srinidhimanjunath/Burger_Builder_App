import React, { Component } from "react";
import Auxillary from "../../hoc/Auxillary/Auxillary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-order";
import Spinner from "../../components/UI/Spinner/Sppiner";
import witherrorhandler from "../../hoc/with-error-handler/Error";
const INGREDIENT_PRICES = {
  salad: 20,
  cheese: 30,
  meat: 50,
  bacon: 40,
};

class BurgerBuilder extends Component {
  // constructor(props){
  //   super(props);
  // }
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 40,
    purchaseable: false,
    purchaseing: false,
    loading: false,
  };

  updatePurchase = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igkey) => {
        return ingredients[igkey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchaseable: sum > 0 });
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredient = {
      ...this.state.ingredients,
    };
    updatedIngredient[type] = updatedCount;
    const priceUpdated = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceUpdated;
    this.setState({
      ingredients: updatedIngredient,
      totalPrice: newPrice,
    });
    this.updatePurchase(updatedIngredient);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredient = {
      ...this.state.ingredients,
    };
    updatedIngredient[type] = updatedCount;
    const priceUpdated = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceUpdated;
    this.setState({
      ingredients: updatedIngredient,
      totalPrice: newPrice,
    });
    this.updatePurchase(updatedIngredient);
  };

  purchaseingHandler = () => {
    this.setState({ purchaseing: true });
  };
  purchaseCancelHandel = () => {
    this.setState({ purchaseing: false });
  };

  purchaseContinueHandler = () => {
    alert("Successfully Ordered");
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Srinidhi M",
        address: {
          street: "#124 10th cross",
          locality: "Jayanagara",
          city: "Mysuru",
          state: "Karnataka",
          Nation: "India",
        },
        email: "srinidhimanjunath8@gmail.com",
        delivery: "fastest",
      },
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        console.log(response);
        this.setState({ loading: false, purchaseing: false });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false, purchaseing: false });
      });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = (
      <OrderSummary
        ingredients={this.state.ingredients}
        purchaseCancelHandel={this.purchaseCancelHandel}
        purchaseContinueHandler={this.purchaseContinueHandler}
        price={this.state.totalPrice}
      />
    );
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <Auxillary>
        <Modal
          show={this.state.purchaseing}
          modalClosed={this.purchaseCancelHandel}
        >
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredientHandler={this.addIngredientHandler}
          removeIngredientHandler={this.removeIngredientHandler}
          purchaseable={this.state.purchaseable}
          disabledInfo={disabledInfo}
          ordered={this.purchaseingHandler}
          price={this.state.totalPrice}
        />
      </Auxillary>
    );
  }
}

export default BurgerBuilder;
