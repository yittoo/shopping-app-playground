import * as actionTypes from "../actionTypes";
import PRODUCTS from "../../data/dummy-data";

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter(product => product.ownerId === "u1")
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_PRODUCT:
      return { ...state, ...action.payload.products };
    default:
      return state;
  }
};
