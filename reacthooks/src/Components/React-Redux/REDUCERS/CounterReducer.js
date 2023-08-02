import { createSlice } from "@reduxjs/toolkit";


console.log("step2");
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      console.log("increment action recevies from store", state);
      console.log(action.type);
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value += 1;
      console.log("REDUCER", state.value);
    },
    decrement: (state, action) => {
      console.log("decrement", action);
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
// console.log("counterSlice", counterSlice);
// console.log("counterSlice.actions", counterSlice.actions);
// console.log("counterSlice.reducer", counterSlice.reducer);
// console.log("counterSlice.getInitialState", counterSlice.getInitialState);
// console.log("counterSlice.name", counterSlice.name);
// console.log("counterSlice.caseReducers", counterSlice.caseReducers);
// console.log("counterSlice.payload", counterSlice.payload);


console.log("dispatching incrememt actions");
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
console.log("counterSlice.actions", counterSlice.actions);


//console.log("createSlice",createSlice);

export default counterSlice.reducer;
