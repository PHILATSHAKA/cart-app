import { IApplicationState } from '~/core/reducer';
import {getVehicles, getLoading} from "~/modules/cars/selectors";
import {fetchVehicles} from "~/modules/cars/actions";
import {selectedProduct} from "~/modules/add-to-cart/actions";
import {cartSelector} from "~/modules/cart/selectors";

export const mapStateToProps = (state: IApplicationState) => {
  const vehicles = getVehicles(state);
  const cart = cartSelector(state);
  const isLoading = getLoading(state);
  return {
    vehicles,
    cart,
    isLoading,
  };
};

export const mapDispatchToProps = dispatch => ({
  fetchVehicles() {
    dispatch(fetchVehicles());
  },
  addToCart(id) {
    console.log('id ', id);
    dispatch(selectedProduct(id));
  },
});
