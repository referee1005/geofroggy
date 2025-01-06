import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchLandingAboutusSuccess,
  fetchLandingAboutusFailure,
  fetchPopularCountriesSuccess,
  fetchPopularCountriesFailure,
  fetchRecentAdditionsSuccess,
  fetchRecentAdditionsFailure,
  fetchPlacesSuccess,
  fetchPlacesFailure,
  fetchFavouritePlacesSuccess,
  fetchFavouritePlacesFailure,
} from "../../actions/home";
import {
  FETCH_LANDING_ABOUTUS_REQUEST,
  FETCH_POPULAR_COUNTRIES_REQUEST,
  FETCH_RECENT_ADDITIONS_REQUEST,
  FETCH_PLACES_REQUEST,
  FETCH_FAVOURITE_PLACES_REQUEST,
} from "../../actions/types";
import {
  fetchLandingAboutusData,
  fetchPopularData,
  fetchRecentData,
  fetchPlaceData,
  fetchFavouritePlaceData,
} from "../../api"; // Assuming you have an API module to handle your requests

function* fetchAboutus() {
  try {
    const response = yield call(fetchLandingAboutusData);
    yield put(fetchLandingAboutusSuccess(response));
  } catch (error) {
    yield put(fetchLandingAboutusFailure(error.message));
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

function* fetchFavouritePlaces() {
  try {
    const response = yield call(fetchFavouritePlaceData);
    yield put(fetchFavouritePlacesSuccess(response));
  } catch (error) {
    yield put(fetchFavouritePlacesFailure(error.message));
  }
}

export function* homeSaga() {
  yield takeLatest(FETCH_LANDING_ABOUTUS_REQUEST, fetchAboutus);
  yield takeLatest(FETCH_POPULAR_COUNTRIES_REQUEST, fetchPopularCountries);
  yield takeLatest(FETCH_RECENT_ADDITIONS_REQUEST, fetchRecentAdditions);
  yield takeLatest(FETCH_PLACES_REQUEST, fetchPlaces);
  yield takeLatest(FETCH_FAVOURITE_PLACES_REQUEST, fetchFavouritePlaces);
}
