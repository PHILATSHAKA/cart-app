import {REMOVE_FROM_CART} from "~/modules/cart/actions";

export const ADD_TO_CART = 'cart/ADD_TO_CART';
export const ADD_TO_CART_SUCCESS = 'cart/ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_ERROR = 'cart/ADD_TO_CART_ERROR';
export const SET_SELECTED_PRODUCT = 'cart/SET_SELECTED_PRODUCT';

export const addToCart = (make) => {
  console.log('action ', make);
  return {
    type: ADD_TO_CART, make
  };
};
export const selectedProduct = (selectedProduct) => {
  console.log('selectedProduct ', selectedProduct);
  return{
    type: SET_SELECTED_PRODUCT, selectedProduct,
  }
}
export function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    id,
  }
}
export const addToCartSuccess = () => {
  return {
    type: ADD_TO_CART_SUCCESS,
  };
};

export const addToCartError = () => {
  return {
    type: ADD_TO_CART_ERROR,
  };
};

