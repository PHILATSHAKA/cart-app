export interface IGetVehiclesState {
  isLoading: boolean;
  payload: IGetVehicles[];
}

export interface IGetVehicles {
  id: number;
}
