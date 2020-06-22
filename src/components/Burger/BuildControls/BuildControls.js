import React from "react";
import "./BuildControls.css";
import Buildcontrol from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildcontrol = (props) => (
  <div className="BurgerControl">
    <p>
      Current Price : <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <Buildcontrol
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.addIngredientHandler(ctrl.type)}
        remove={() => props.removeIngredientHandler(ctrl.type)}
        disabled={props.disabledInfo[ctrl.type]}
      />
    ))}
    <button
      className="OrderButton"
      disabled={!props.purchaseable}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildcontrol;
