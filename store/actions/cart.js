import * as actionTypes from "../actionTypes";
import CartItem from "../../models/cart-item";

export const calculateCartTotal = cart => {
  let totalAmount = 0;
  Object.keys(cart).forEach(id => {
    totalAmount += cart[id].sum;
  });
  return +totalAmount.toFixed(2);
};

const calculateIndividualSum = (quantity, price) =>
  +(quantity * price).toFixed(2);

export const addToCart = (product) => (dispatch, getState) => {
  const currentCart = getState().cart.items;
  const foundProdId = Object.keys(currentCart).find(
    cartItem => product.id === cartItem
  );
  if (foundProdId) {
    const foundProduct = currentCart[foundProdId];
    foundProduct.quantity++;
    foundProduct.sum = calculateIndividualSum(
      foundProduct.quantity,
      foundProduct.productPrice
    );
  } else {
    const newItem = new CartItem(
      1,
      product.price,
      product.title,
      product.price
    );
    currentCart[product.id] = newItem;
  }
  const totalAmount = calculateCartTotal(currentCart);
  return dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: { items: currentCart, totalAmount }
  });
};

export const removeFromCart = (product) => (dispatch, getState) => {
  const currentCart = getState().cart.items;
  const foundProdId = Object.keys(currentCart).find(
    cartItem => product.id === cartItem
  );

  const productInCart = currentCart[foundProdId];

  if (productInCart.quantity > 1) {
    productInCart.quantity -= 1;
    productInCart.sum = calculateIndividualSum(
      productInCart.quantity,
      productInCart.productPrice
    );
  } else {
    delete currentCart[foundProdId];
  }
  const totalAmount = calculateCartTotal(currentCart);
  return dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: { items: currentCart, totalAmount }
  });
};
