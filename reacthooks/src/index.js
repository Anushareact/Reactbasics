import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./Components/React-Redux/Store";
import { Provider } from "react-redux";
console.log("Store",store.dispatch)
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("action receives from ui and send to reducers to update the state from index.js file");
root.render(
  <Provider store={store}>
    <App />
  </Provider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
