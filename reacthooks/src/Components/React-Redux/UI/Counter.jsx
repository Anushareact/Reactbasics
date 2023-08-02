//DOING CRUD OPERATIONS USING REACT-REDUX
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../REDUCERS/CounterReducer";
export function CrudApp() {
  
  const count = useSelector((state) => state.counter.value);
  console.log(count);
  console.log("step1");
  const dispatch = useDispatch();
  console.log();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => {
            console.log("action is dispatched from ui");
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => {
            //console.log("dispatch(increment())", dispatch(decrement()));
            dispatch(decrement())}}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
