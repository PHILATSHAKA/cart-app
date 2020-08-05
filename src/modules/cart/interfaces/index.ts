export interface ICartState {
  isLoading: boolean;
  payload: ICart[];
  basketNumbers: number;
}

export interface ICart {
  id: number;
}
