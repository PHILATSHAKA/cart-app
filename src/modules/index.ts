
import vehicleReducer from "~/modules/cars/reducer";
import cartReducer from "~/modules/cart/reducer";
import addCartReducer from "~/modules/add-to-cart/reducer";

export const moduleReducers = {
  vehicles: vehicleReducer,
  cart: cartReducer,
  addCart: addCartReducer,
};
