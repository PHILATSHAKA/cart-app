import { put, call, takeLatest } from 'redux-saga/effects';

import { FETCH_CART, fetchCartError, fetchCartSuccess } from '~/modules/cart/actions';
import {cart} from "~/molecules/cart/helpers";
import {ICart} from "~/modules/cart/interfaces";

function* sagaWorker() {
  try {
    const response: ICart[] = yield call(cart);
    return yield put(fetchCartSuccess(response));
  } catch (error) {
    return yield put(fetchCartError());
  }
}

function* mySaga() {
  yield takeLatest([
    FETCH_CART,
  ], sagaWorker);
}

export default mySaga;
