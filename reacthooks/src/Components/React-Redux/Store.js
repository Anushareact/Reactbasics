import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import CounterReducer from "./REDUCERS/CounterReducer";
import  UserSlice  from "./REDUCERS/UserReducer";
console.log("step0");
// console.log("action receives from ui and send to reducers to update the state");
console.log("CounterReducer", CounterReducer);

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    counter: CounterReducer,
    user: UserSlice,
  },
});
console.log("store in Store.js file", store.middleware);
console.log("store in Store.js file", store.reducer);

export default store;
