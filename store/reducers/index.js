import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import products from "./products";
import cart from "./cart";
import orders from "./orders";

const rootReducer = combineReducers({
  products,
  cart,
  orders
});

export default createStore(rootReducer, applyMiddleware(thunk));
