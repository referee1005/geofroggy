import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchAdvirtiseBodySuccess,
  fetchAdvirtiseBodyFailure,
  fetchAdvirtiseSocialSuccess,
  fetchAdvirtiseSocialFailure,
  fetchAdvirtisePlansSuccess,
  fetchAdvirtisePlansFailure,
} from "../../actions/advertise";
import {
  FETCH_ADVERTISE_BODY_REQUEST,
  FETCH_ADVERTISE_SOCIAL_REQUEST,
  FETCH_ADVERTISE_PLANS_REQUEST,
} from "../../actions/types";
import {
  fetchAdvertiseBodyData,
  fetchAdvertiseSocialData,
  fetchAdvertisePlansData,
} from "../../api"; // Assuming you have an API module to handle your requests

function* fetchAdvertiseBody(action) {
  try {
    const response = yield call(() => fetchAdvertiseBodyData(action.payload));
    yield put(fetchAdvirtiseBodySuccess(response));
  } catch (error) {
    yield put(fetchAdvirtiseBodyFailure(error.message));
  }
}
function* fetchAdvertiseSocial(action) {
  try {
    const response = yield call(() => fetchAdvertiseSocialData(action.payload));
    yield put(fetchAdvirtiseSocialSuccess(response));
  } catch (error) {
    yield put(fetchAdvirtiseSocialFailure(error.message));
  }
}
function* fetchAdvertisePlans(action) {
  try {
    const response = yield call(() => fetchAdvertisePlansData(action.payload));
    yield put(fetchAdvirtisePlansSuccess(response));
  } catch (error) {
    yield put(fetchAdvirtisePlansFailure(error.message));
  }
}

export function* advertiseSaga() {
  yield takeLatest(FETCH_ADVERTISE_BODY_REQUEST, fetchAdvertiseBody);
  yield takeLatest(FETCH_ADVERTISE_SOCIAL_REQUEST, fetchAdvertiseSocial);
  yield takeLatest(FETCH_ADVERTISE_PLANS_REQUEST, fetchAdvertisePlans);
}
