import * as actionTypes from "../actionTypes";
import { calculateCartTotal } from "./cart";

export const deleteProduct = id => (dispatch, getState) => {
  const { products, cart } = getState();
  const itemsCopy = { ...cart.items };

  const availableProductsFiltered = [...products.availableProducts].filter(
    prod => prod.id !== id
  );
  const userProductsFiltered = [...products.userProducts].filter(
    prod => prod.id !== id
  );
  const newProductsList = {
    availableProducts: availableProductsFiltered,
    userProducts: userProductsFiltered
  };
  let totalAmount = cart.totalAmount;
  if (cart.items[id]) {
    delete itemsCopy[id];
    totalAmount = calculateCartTotal(itemsCopy);
  }

  return dispatch({
    type: actionTypes.DELETE_PRODUCT,
    payload: {
      cart: { items: itemsCopy, totalAmount },
      products: newProductsList
    }
  });
};
