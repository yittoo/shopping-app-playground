import * as actionTypes from "../actionTypes";

const generateInitialState = () => ({
  items: {},
  totalAmount: 0
});

const initialState = generateInitialState();

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        ...action.payload
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        ...action.payload
      };
    case actionTypes.ADD_ORDER:
      const resetedState = generateInitialState();
      return resetedState;
    case actionTypes.DELETE_PRODUCT:
      return { ...state, ...action.payload.cart };
    default:
      return state;
  }
};
