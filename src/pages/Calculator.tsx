// Calculalot.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Calculalor: React.FC = () => {
  const operators = ["*", "/", "+", "-"];
  const [expression, setExpression] = useState<string>("");

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      try {
        setExpression(eval(expression).toString());
      } catch (error) {
        setExpression("Error");
      }
    } else if (value === "AC") {
      setExpression("");
    } else if (value === "DEL") {
      setExpression((prevExpression) => prevExpression.slice(0, -1));
    } else {
      // Check for leading zeroes
      if ((value === "0" || value === "00") && expression === "") {
        return;
      }

      // Check if the current value is an operator
      if (operators.includes(value)) {
        // Check if the last character of the expression is also an operator
        const lastCharIsOperator = operators.includes(expression.slice(-1));

        // Check if the current value and the last character are both operators
        const bothOperators = operators.includes(value) && lastCharIsOperator;

        // If two consecutive operators, do not allow input
        if (bothOperators) {
          return;
        }

        // If two consecutive '*' operators, replace the last '*' with '^' (exponent)
        if (value === "*" && lastCharIsOperator) {
          setExpression((prevExpression) => prevExpression.slice(0, -1) + "^");
        } else {
          // If the last character is not an operator or it's not two consecutive '*' operators, proceed
          setExpression((prevExpression) => prevExpression + value);
        }
      } else {
        // If the current value is not an operator, proceed
        setExpression((prevExpression) => prevExpression + value);
      }
    }
  };

  return (
    <div className="calculator-star-body">
      <div className="calculator-container">
        <input
          type="text"
          placeholder="0"
          value={expression}
          readOnly
          className="calculator-expression-input"
        />

        <div className="calculator-grid">
          {[
            "AC",
            "DEL",
            "%",
            "/",
            "7",
            "8",
            "9",
            "*",
            "4",
            "5",
            "6",
            "-",
            "1",
            "2",
            "3",
            "+",
            "00",
            "0",
            ".",
            "=",
          ].map((value, index) => (
            <button
              key={index}
              className={
                value === "=" ? "calculator-equal" : "calculator-button"
              }
              onClick={() => handleButtonClick(value)}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
      <div className="calculator-back-button">
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default Calculalor;
