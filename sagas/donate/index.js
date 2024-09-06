import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchDonateSuccess, fetchDonateFailure } from "../../actions/donate";
import { FETCH_DONATE_REQUEST } from "../../actions/types";
import { fetchDonateData } from "../../api"; // Assuming you have an API module to handle your requests

function* fetchDonate(action) {
  try {
    const response = yield call(() => fetchDonateData(action.payload));
    yield put(fetchDonateSuccess(response));
  } catch (error) {
    yield put(fetchDonateFailure(error.message));
  }
}

export function* donateSaga() {
  yield takeLatest(FETCH_DONATE_REQUEST, fetchDonate);
}
