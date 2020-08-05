import { ADD_TO_CART_ERROR, ADD_TO_CART_SUCCESS , ADD_TO_CART, SET_SELECTED_PRODUCT} from '../actions';
import {IAddCartState } from '../interfaces';
import {REMOVE_FROM_CART} from "~/modules/cart/actions";

const initialState: IAddCartState = {
  payload: [],
  isLoading: false,
  basketNumbers: 0,
  selectedProduct: [],
};

const addCartReducer = (state: IAddCartState = initialState, action: any) => {
  const { type, make, selectedProduct, id } = action;
  console.log('data ', selectedProduct);
  console.log('data ', state.payload);
  switch (type) {
    case ADD_TO_CART:
      return Object.assign({}, state, {
        payload: [...state.payload, make]
      });
    case SET_SELECTED_PRODUCT:
      return Object.assign({}, state, {
        basketNumbers: state.basketNumbers + 1,
        selectedProduct: {...state.selectedProduct, selectedProduct},
        payload: [...state.payload, selectedProduct]
      });
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        payload: state.payload,
      };
    case ADD_TO_CART_ERROR:
      return {
        ...state,
        isLoading: false,
        payload: [],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        basketNumbers: state.basketNumbers - 1,
        payload: [...state.payload.filter(product => product.id !== id)]
      }

    default:
      return state;
  }
};

export default addCartReducer;
