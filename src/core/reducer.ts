import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from '~/core/history';
import { moduleReducers } from '~/modules';
import {IGetVehiclesState} from "~/modules/cars/interfaces";
import {ICartState} from "~/modules/cart/interfaces";
import {IAddCartState} from "~/modules/add-to-cart/interfaces";

export interface IApplicationState {
  vehicles: IGetVehiclesState
  cart: ICartState,
  addCart: IAddCartState,
}

const reducers = {
  ...moduleReducers,
  router: connectRouter(history),
};

const appReducer = combineReducers(reducers);

export default appReducer;


