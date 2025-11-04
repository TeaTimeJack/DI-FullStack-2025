import React from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { increment, decrement, addInput } from "../redux/actions";
import { ACTION_INCREMENT } from "../redux/reducers";
import { useRef } from "react";

export default function Counter() {
  const count = useSelector((state) => state.counterReducer.count);
  const dispatch = useDispatch();
  const inputRef = useRef();
  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>
      <div>
        <input ref={inputRef} />
        <button onClick={() => dispatch(addInput(inputRef.current.value))}>
          + input value
        </button>
      </div>
    </>
  );
}
