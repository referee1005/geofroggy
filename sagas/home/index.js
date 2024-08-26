import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchInterestsSuccess,
  fetchInterestsFailure,
  fetchPopularCountriesSuccess,
  fetchPopularCountriesFailure,
  fetchRecentAdditionsSuccess,
  fetchRecentAdditionsFailure
} from "../../actions/home";
import {
  FETCH_INTERESTS_REQUEST,
  FETCH_POPULAR_COUNTRIES_REQUEST,
  FETCH_RECENT_ADDITIONS_REQUEST
} from "../../actions/types";
import {
  fetchInterestData,
  fetchPopularData,
  fetchRecentData
} from "../../api"; // Assuming you have an API module to handle your requests

function* fetchInterests() {
  try {
    const response = yield call(fetchInterestData);
    yield put(fetchInterestsSuccess(response));
  } catch (error) {
    yield put(fetchInterestsFailure(error.message));
  }
}

function* fetchPopularCountries() {
  try {
    const response = yield call(fetchPopularData);
    yield put(fetchPopularCountriesSuccess(response));
  } catch (error) {
    yield put(fetchPopularCountriesFailure(error.message));
  }
}

function* fetchRecentAdditions() {
  try {
    const response = yield call(fetchRecentData);
    yield put(fetchRecentAdditionsSuccess(response));
  } catch (error) {
    yield put(fetchRecentAdditionsFailure(error.message));
  }
}

export function* homeSaga() {
  yield takeLatest(FETCH_INTERESTS_REQUEST, fetchInterests);
  yield takeLatest(FETCH_POPULAR_COUNTRIES_REQUEST, fetchPopularCountries);
  yield takeLatest(FETCH_RECENT_ADDITIONS_REQUEST, fetchRecentAdditions);
}
