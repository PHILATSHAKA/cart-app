import { FETCH_VEHICLES_ERROR, FETCH_VEHICLES_SUCCESS, FETCH_VEHICLES } from '../actions';
import { IGetVehiclesState } from '../interfaces';

const initialState: IGetVehiclesState = {
  payload: [],
  isLoading: false,
};

const vehicleReducer = (state: IGetVehiclesState = initialState, action: any) => {
  const { type, data } = action;
  switch (type) {
    case FETCH_VEHICLES:
      return {
        ...state,
        isLoading: true,
        payload: [],
      };
    case FETCH_VEHICLES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        payload: data,
      };
    case FETCH_VEHICLES_ERROR:
      return {
        ...state,
        isLoading: false,
        payload: [],
      };
    default:
      return state;
  }
};

export default vehicleReducer;
