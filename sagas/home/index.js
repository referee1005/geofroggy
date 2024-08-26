import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchInterestsSuccess,
  fetchInterestsFailure,
  fetchPopularCountriesSuccess,
  fetchPopularCountriesFailure
} from "../../actions/home";
import {
  FETCH_INTERESTS_REQUEST,
  FETCH_POPULAR_COUNTRIES_REQUEST
} from "../../actions/types";
import { fetchInterestData, fetchPopularData } from "../../api"; // Assuming you have an API module to handle your requests

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

export function* homeSaga() {
  yield takeLatest(FETCH_INTERESTS_REQUEST, fetchInterests);
  yield takeLatest(FETCH_POPULAR_COUNTRIES_REQUEST, fetchPopularCountries);
}
