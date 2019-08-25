import * as actionTypes from "../actionTypes";
import CartItem from "../../models/cart-item";

export const addToCart = (product, currentCart) => {
  const foundProdId = Object.keys(currentCart).find(
    cartItem => product.id === cartItem
  );
  if (foundProdId) {
    const foundProduct = currentCart[foundProdId];
    foundProduct.quantity++;
    foundProduct.sum = +(
      foundProduct.quantity * foundProduct.productPrice
    ).toFixed(2);
  } else {
    const newItem = new CartItem(
      1,
      product.price,
      product.title,
      product.price
    );
    currentCart[product.id] = newItem;
  }
  let totalAmount = 0;
  Object.keys(currentCart).forEach(id => {
    totalAmount += currentCart[id].sum;
  });
  return {
    type: actionTypes.ADD_TO_CART,
    payload: { items: currentCart, totalAmount: +totalAmount.toFixed(2) }
  };
};
