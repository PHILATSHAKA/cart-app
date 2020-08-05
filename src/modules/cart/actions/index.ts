export const FETCH_CART = 'cart/FETCH_CART';
export const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART';
export const ADD_TO_CART = 'cart/ADD_TO_CART';
export const FETCH_CART_SUCCESS = 'cart/FETCH_CART_SUCCESS';
export const FETCH_CART_ERROR = 'cart/FETCH_CART_ERROR';

export const fetchCartItems = (productId) => {
  return {
    type: ADD_TO_CART, productId
  };
}
export function removeFromCart(productId) {
  return {
    type: REMOVE_FROM_CART,
    productId,
  }
}
export const fetchCartSuccess = (data) => {
  return {
    type: FETCH_CART_SUCCESS, data,
  };
};

export const fetchCartError = () => {
  return {
    type: FETCH_CART_ERROR,
  };
};

