// Explanation for WHAT IS createSLICE
/**
 * A function that accepts an initial state,
 *  an object of reducer functions, and a "slice name",
 * and automatically generates action creators and action types that correspond to the reducers and state.
 */
import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: 1,
    Name: "anusha",
  },
];
//createing a reducer
 const UserSlice = createSlice({
  name: "USERSLICE",
  initialState,
 reducers:{

 }
});
export default UserSlice.reducer