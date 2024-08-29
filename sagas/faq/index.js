import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchFaqSuccess, fetchFaqFailure } from "../../actions/faq";
import { FETCH_FAQ_REQUEST } from "../../actions/types";
import { fetchFaqData } from "../../api"; // Assuming you have an API module to handle your requests

function* fetchFaq() {
  try {
    const response = yield call(fetchFaqData);
    yield put(fetchFaqSuccess(response));
  } catch (error) {
    yield put(fetchFaqFailure(error.message));
  }
}

export function* faqSaga() {
  yield takeLatest(FETCH_FAQ_REQUEST, fetchFaq);
}
