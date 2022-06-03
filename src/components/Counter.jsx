import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/actions/counterActions";
const Counter = () => {
  const [input, setInput] = useState(0);
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  console.log(count);
  return (
    <div>
      <h1>Redux Counter</h1>
      <button onClick={() => dispatch(increment())} style={buttonStyle}>
        +
      </button>
      <h1 style={countStyle}>{count} </h1>
      <button onClick={() => dispatch(decrement())} style={buttonStyle}>
        -
      </button>
      <div>
        <input type="number" onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => dispatch(increment(parseInt(input)))}>
          Increment By 5
        </button>
      </div>
    </div>
  );
};

export default Counter;

const buttonStyle = {
  backgroundColor: "#8634eb",
  height: "50px",
  width: "100px",
  borderRadius: "20px",
  color: "#fafafa",
  border: "none",
  fontSize: "40px",
  fontWeight: 600,
};
const countStyle = {
  fontSize: 50,
  color: "gray",
};
