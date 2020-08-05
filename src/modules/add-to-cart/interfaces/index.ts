export interface IAddCartState {
  isLoading: boolean;
  payload: IAddCart[];
  basketNumbers: number;
  selectedProduct: []
}

export interface IAddCart {
  id: number;
}
