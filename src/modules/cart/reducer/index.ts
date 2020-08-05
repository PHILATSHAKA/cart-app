import { FETCH_CART_ERROR, FETCH_CART_SUCCESS, FETCH_CART, ADD_TO_CART } from '../actions';
import {ICartState} from '../interfaces';
const initialState: ICartState = {
  payload: [],
  isLoading: false,
  basketNumbers: 0,
};

const cartReducer = (state: ICartState = initialState, action: any) => {
  const { type, productId } = action;
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1,
      }
    case FETCH_CART:
      return {
        ...state,
      };
    case FETCH_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        payload: productId,
      };
    case FETCH_CART_ERROR:
      return {
        ...state,
        isLoading: false,
        payload: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
