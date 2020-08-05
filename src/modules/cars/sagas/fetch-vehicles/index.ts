import { put, call, takeLatest } from 'redux-saga/effects';
import {FETCH_VEHICLES, fetchVehiclesError, fetchVehiclesSuccess} from "~/modules/cars/actions";
import {getVehicles} from "~/molecules/car-lister/helpers";
import {IGetVehicles} from "~/modules/cars/interfaces";

function* sagaWorker() {
  try {
    const response: IGetVehicles[] = yield call(getVehicles);
    return yield put(fetchVehiclesSuccess(response));
  } catch (error) {
    return yield put(fetchVehiclesError());
  }
}

function* mySaga() {
  yield takeLatest([
    FETCH_VEHICLES,
  ], sagaWorker);
}

export default mySaga;
