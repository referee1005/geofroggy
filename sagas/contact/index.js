import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchContactSuccess,
  fetchContactFailure
} from "../../actions/contact";
import { FETCH_CONTACT_REQUEST } from "../../actions/types";
import { fetchContactData } from "../../api"; // Assuming you have an API module to handle your requests

function* fetchContact() {
  try {
    const response = yield call(fetchContactData);
    yield put(fetchContactSuccess(response));
  } catch (error) {
    yield put(fetchContactFailure(error.message));
  }
}

export function* contactSaga() {
  yield takeLatest(FETCH_CONTACT_REQUEST, fetchContact);
}
