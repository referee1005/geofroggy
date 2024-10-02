import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchNewsSuccess,
  fetchNewsFailure,
  fetchNewSuccess,
  fetchNewFailure,
  fetchTrendsSuccess,
  fetchTrendsFailure
} from "../../actions/news";
import {
  FETCH_NEWS_REQUEST,
  FETCH_NEW_REQUEST,
  FETCH_TRENDS_REQUEST
} from "../../actions/types";
import { fetchNewsData, fetchNewData, fetchTrendsData } from "../../api"; // Assuming you have an API module to handle your requests

function* fetchNews() {
  try {
    const response = yield call(fetchNewsData);
    yield put(fetchNewsSuccess(response));
  } catch (error) {
    yield put(fetchNewsFailure(error.message));
  }
}
function* fetchNew(action) {
  try {
    const response = yield call(() => fetchNewData(action.payload));
    yield put(fetchNewSuccess(response));
  } catch (error) {
    yield put(fetchNewFailure(error.message));
  }
}
function* fetchTrends() {
  try {
    const response = yield call(fetchTrendsData);
    yield put(fetchTrendsSuccess(response));
  } catch (error) {
    yield put(fetchTrendsFailure(error.message));
  }
}
export function* newsSaga() {
  yield takeLatest(FETCH_NEWS_REQUEST, fetchNews);
  yield takeLatest(FETCH_NEW_REQUEST, fetchNew);
  yield takeLatest(FETCH_TRENDS_REQUEST, fetchTrends);
}
