import * as actionTypes from "../actionTypes";

const initialState = {
  items: {},
  totalAmount: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
