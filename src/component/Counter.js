import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByValue,
  updatePassValue,
} from "../slice/counterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counterSlice);
  const dispatch = useDispatch();
  //   const [value, setValue] = useState(0);

  return (
    <div>
      <p>Counter</p>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment
      </button>
      <p>{counter.value}</p>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>

      <br />
      <input
        type="number"
        value={counter.passValue}
        onChange={(e) => {
          dispatch(updatePassValue(Number(e.target.value)));
        }}
        placeholder="add your number"
      />
      <button
        onClick={() => {
          dispatch(incrementByValue());
        }}
      >
        update
      </button>
    </div>
  );
};

export default Counter;
