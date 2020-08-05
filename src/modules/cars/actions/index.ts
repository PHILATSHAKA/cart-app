export const FETCH_VEHICLES = 'vehicles/FETCH_VEHICLES';
export const FETCH_VEHICLES_SUCCESS = 'vehicles/FETCH_VEHICLES_SUCCESS';
export const FETCH_VEHICLES_ERROR = 'vehicles/FETCH_VEHICLES_ERROR';

export const fetchVehicles = () => {
  return {
    type: FETCH_VEHICLES,
  };
};

export const fetchVehiclesSuccess = (data) => {
  return {
    type: FETCH_VEHICLES_SUCCESS, data,
  };
};

export const fetchVehiclesError = () => {
  return {
    type: FETCH_VEHICLES_ERROR,
  };
};

