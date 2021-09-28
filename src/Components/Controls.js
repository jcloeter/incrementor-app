import React, { useReducer } from "react";
import Button from "./UI/Button";
import Number from "./Number";

// import styled from "styled-components";

const colorChecker = (num) => {
  console.log(num);
  if (num > 0) return "blue";
  if (num < 0) return "red";
  if (num === 0) return "black";
};

const reducer = (state, action) => {
  if (action.type === "PLUS")
    return { num: state.num + 1, color: colorChecker(action.value + 1) };
  if (action.type === "MINUS") {
    return { num: state.num - 1, color: colorChecker(action.value - 1) };
  }
  if (action.type === "RESET") {
    return { num: 0, color: colorChecker(action.value) };
  }
  return { num: 4, color: "purple" };
};

const Controls = (props) => {
  //   const [num, setNum] = useState(0);
  //   const [color, setColor] = useState("blue");

  const [data, dispatch] = useReducer(reducer, { num: 0, color: "black" });

  //   const plusHandler = function () {
  //     dispatch({ type: "PLUS", value: data.num });

  //     // setNum(() => {
  //     //   return num + 1;
  //     // });
  //     // num > 0 && setColor("black");
  //     //Problem is what we see here: the num is always behind
  //     // console.log(num);
  //   };

  //   const negativeHandler = function () {
  //     dispatch("MINUS");
  //     console.log(data.num, data.color);

  //     // setNum(() => {
  //     //   return num - 1;
  //     // });
  //   };

  //   const resetHandler = function () {
  //     dispatch("RESET");

  //     // setNum(() => {
  //     //   return 0;
  //     // });
  //   };

  return (
    <div>
      <Number number={data.num} color={data.color} />
      <Button onClick={() => dispatch({ type: "PLUS", value: data.num })}>
        Plus
      </Button>
      <Button onClick={() => dispatch({ type: "MINUS", value: data.num })}>
        Minus
      </Button>
      <Button onClick={() => dispatch({ type: "RESET", value: data.num })}>
        Reset
      </Button>
    </div>
  );
};

export default Controls;
