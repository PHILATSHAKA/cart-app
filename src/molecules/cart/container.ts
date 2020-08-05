
import { IApplicationState } from '~/core/reducer';
import {fetchCartItems } from "~/modules/cart/actions";
import {cartSelector, getLoading} from "~/modules/cart/selectors";
import {getVehicles} from "~/modules/cars/selectors";
import {addCart} from "~/modules/add-to-cart/selectors";
import {addToCartSuccess, removeFromCart, selectedProduct} from "~/modules/add-to-cart/actions";

export const mapStateToProps = (state: IApplicationState) => {
  const cart = cartSelector(state);
  const products = addCart(state);
  const isLoading = getLoading(state);
  console.log('cart ', cart);
  console.log('cart1 ', products);
  return {
    cart,
    products,
    isLoading,
  };
};

export const mapDispatchToProps = dispatch => ({
  fetchCartItems(id) {
    dispatch(fetchCartItems(id));
  },
  addToCartSuccess() {
    dispatch(addToCartSuccess());
  },
  removeFromCart(id) {
    dispatch(removeFromCart(id));
  },
});
