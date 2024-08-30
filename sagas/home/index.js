import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchInterestsSuccess,
  fetchInterestsFailure,
  fetchPopularCountriesSuccess,
  fetchPopularCountriesFailure,
  fetchRecentAdditionsSuccess,
  fetchRecentAdditionsFailure,
  fetchPlacesSuccess,
  fetchPlacesFailure
} from "../../actions/home";
import {
  FETCH_INTERESTS_REQUEST,
  FETCH_POPULAR_COUNTRIES_REQUEST,
  FETCH_RECENT_ADDITIONS_REQUEST,
  FETCH_PLACES_REQUEST
} from "../../actions/types";
import {
  fetchInterestData,
  fetchPopularData,
  fetchRecentData,
  fetchPlaceData
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

function* fetchPlaces() {
  try {
    const response = yield call(fetchPlaceData);
    yield put(fetchPlacesSuccess(response));
  } catch (error) {
    yield put(fetchPlacesFailure(error.message));
  }
}

export function* homeSaga() {
  yield takeLatest(FETCH_INTERESTS_REQUEST, fetchInterests);
  yield takeLatest(FETCH_POPULAR_COUNTRIES_REQUEST, fetchPopularCountries);
  yield takeLatest(FETCH_RECENT_ADDITIONS_REQUEST, fetchRecentAdditions);
  yield takeLatest(FETCH_PLACES_REQUEST, fetchPlaces);
}