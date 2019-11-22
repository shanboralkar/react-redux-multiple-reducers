import React, { Component } from "react";
import { render } from "react-dom";
import App from "./App";
import "./style.css";
import { Provider } from "react-redux";
import { createStore , combineReducers} from "redux";
import reducerA from "./store/reducerA";
import reducerB from "./store/reducerB";

const rootReducer = combineReducers({
  rA : reducerA,
  rB : reducerB
})

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
