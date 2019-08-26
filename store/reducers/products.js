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
    case actionTypes.CREATE_PRODUCT:
      return {
        ...state,
        ...action.payload
      };
    case actionTypes.UPDATE_PRODUCT:
      return {
        ...state,
        availableProducts: [...action.payload.availableProducts],
        userProducts: [...action.payload.userProducts]
      };
    default:
      return state;
  }
};
