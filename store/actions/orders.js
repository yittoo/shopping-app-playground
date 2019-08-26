import * as actionTypes from "../actionTypes";
import Order from "../../models/order";

export const addOrder = (cartItems, totalAmount) => {
  const newOrder = new Order(
    Date.now().toString(),
    cartItems,
    totalAmount,
    new Date()
  );
  return {
    type: actionTypes.ADD_ORDER,
    payload: newOrder
  };
};
