// import { legacy_createStore as createStore } from "redux";
// console.log("step1");
// //create a state

// const initialState = {
//   count: 0,
// };

// console.log("step2");
// //create a action

// const Increment = () => {
//   return {
//     type: "INCREMENT",
//   };
// };
// //create a reducer

// const CounterReducer = (state = initialState, action) => {
//   console.log("step3",state);
//   if (action.type === "INCREMENT") {
//     return { count: state.count + 1 };
//   } else {
//     return state;
//   }
// };
// //create a store

// const store = createStore(CounterReducer);
// console.log("step4", store);
// store.subscribe(() => console.log(store.getState()));
// store.dispatch(Increment());
// for (let i = 1; i < 10; i++) {
//   store.dispatch(Increment());
// }
