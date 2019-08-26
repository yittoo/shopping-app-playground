import * as actionTypes from "../actionTypes";
import { calculateCartTotal } from "./cart";
import Product from "../../models/product";

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

export const createProduct = data => (dispatch, getState) => {
  const { title, imageUrl, price, description } = data;

  const newProduct = new Product(
    Date.now().toString(),
    "u1",
    title,
    imageUrl,
    description,
    price
  );
  const { availableProducts, userProducts } = getState().products;

  const newAvailableProducts = availableProducts.concat([newProduct]);
  const newUserProducts = userProducts.concat([newProduct]);

  return dispatch({
    type: actionTypes.CREATE_PRODUCT,
    payload: {
      availableProducts: newAvailableProducts,
      userProducts: newUserProducts
    }
  });
};

export const updateProduct = (id, data) => (dispatch, getState) => {
  const { title, imageUrl, description } = data;

  const { availableProducts, userProducts } = getState().products;
  const avProdIndex = availableProducts.findIndex(avProd => avProd.id === id);
  const userProdIndex = userProducts.findIndex(userProd => userProd.id === id);

  const oldProduct = availableProducts[avProdIndex];

  const updatedProduct = new Product(
    oldProduct.id,
    oldProduct.ownerId,
    title,
    imageUrl,
    description,
    oldProduct.price
  );

  availableProducts.splice(avProdIndex, 1, updatedProduct);
  userProducts.splice(userProdIndex, 1, updatedProduct);
  
  return dispatch({
    type: actionTypes.UPDATE_PRODUCT,
    payload: { userProducts, availableProducts }
  });
};
