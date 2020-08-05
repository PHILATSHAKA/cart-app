import { all } from 'redux-saga/effects';
import vehicleSagas from '~/modules/cars/sagas';
import cartSagas from '~/modules/cart/sagas';
import addCartSagas from '~/modules/add-to-cart/sagas';

function* rootSaga() {
  yield all([
    ...vehicleSagas,
      ...cartSagas,
      ...addCartSagas,
  ]);
}
export default rootSaga;
