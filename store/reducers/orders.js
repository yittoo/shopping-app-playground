import * as actionTypes from "../actionTypes";

const initialState = {
  orders: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ORDER:
      return { ...state, orders: state.orders.concat(action.payload) };
    default:
      return state;
  }
};
