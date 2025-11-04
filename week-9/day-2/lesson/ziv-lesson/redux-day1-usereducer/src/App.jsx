import { useState, useReducer, useRef } from "react";
import "./App.css";

/**
 * const[state, dispatch] = useReducer(reducer, initialState)
 */
const initialState = { count: 5 };

export const ACTION_INCREMENT = "increment";
export const ACTION_DECREMENT = "decrement";
const ACTION_INCREMET_BY_N = "incrementByN";

const reducerCounter = (state, action) => {
  console.log("state=>", state);
  console.log("action=>", action);
  if (action.type === ACTION_INCREMENT) {
    return { ...state, count: state.count + 1 };
  } else if (action.type === ACTION_DECREMENT) {
    return { ...state, count: state.count - 1 };
  } else if (action.type === ACTION_INCREMET_BY_N) {
    return {
      ...state,
      count:
        state.count + Number(action.payload.num1) + Number(action.payload.num2),
    };
  }
  return state;
};

function App() {
  const [count, setCount] = useState(0);
  const [count2, dispatch2] = useReducer(reducerCounter, initialState);
  console.log(count2);
  const inputRef = useRef();
  const inputRef2 = useRef();
  // console.log(dispatch2);
  // dispatch2()

  return (
    <>
      <h2>useReducer Hook</h2>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <h2>Reducer Counter: {count2.count}</h2>
        <button onClick={() => dispatch2({ type: ACTION_INCREMENT })}>
          {" "}
          +{" "}
        </button>
        <button onClick={() => dispatch2({ type: ACTION_DECREMENT })}>
          {" "}
          -{" "}
        </button>

        <button
          onClick={() => dispatch2({ type: ACTION_INCREMET_BY_N, payload: 6 })}
        >
          {" "}
          +n{" "}
        </button>
        <div>
          <input ref={inputRef} />
          <input ref={inputRef2} />
          <button
            onClick={() =>
              dispatch2({
                type: ACTION_INCREMET_BY_N,
                payload: {
                  num1: inputRef.current.value,
                  num2: inputRef2.current.value,
                },
              })
            }
          >
            + Input Number
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
