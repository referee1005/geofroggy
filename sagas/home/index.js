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
  fetchSpotlightStoriesSuccess,
  fetchSpotlightStoriesFailure,
  fetchCulturalHeritageSuccess,
  fetchCulturalHeritageFailure,
  fetchJoinAdventureSuccess,
  fetchJoinAdventureFailure,
} from "../../actions/home";
import {
  FETCH_LANDING_ABOUTUS_REQUEST,
  FETCH_POPULAR_COUNTRIES_REQUEST,
  FETCH_RECENT_ADDITIONS_REQUEST,
  FETCH_PLACES_REQUEST,
  FETCH_FAVOURITE_PLACES_REQUEST,
  FETCH_SPOTLIGHT_STORIES_REQUEST,
  FETCH_CULTURAL_HERITAGE_REQUEST,
  FETCH_JOIN_ADVENTURE_REQUEST,
} from "../../actions/types";
import {
  fetchLandingAboutusData,
  fetchPopularData,
  fetchRecentData,
  fetchPlaceData,
  fetchFavouritePlaceData,
  fetchSpotlightStoriesData,
  fetchCulturalHeritageData,
  fetchJoinAdventureData,
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

function* fetchSpotlightStories() {
  try {
    const response = yield call(fetchSpotlightStoriesData);
    yield put(fetchSpotlightStoriesSuccess(response));
  } catch (error) {
    yield put(fetchSpotlightStoriesFailure(error.message));
  }
}

function* fetchCulturalHeritage() {
  try {
    const response = yield call(fetchCulturalHeritageData);
    yield put(fetchCulturalHeritageSuccess(response));
  } catch (error) {
    yield put(fetchCulturalHeritageFailure(error.message));
  }
}

function* fetchJoinAdventure() {
  try {
    const response = yield call(fetchJoinAdventureData);
    yield put(fetchJoinAdventureSuccess(response));
  } catch (error) {
    yield put(fetchJoinAdventureFailure(error.message));
  }
}

export function* homeSaga() {
  yield takeLatest(FETCH_LANDING_ABOUTUS_REQUEST, fetchAboutus);
  yield takeLatest(FETCH_POPULAR_COUNTRIES_REQUEST, fetchPopularCountries);
  yield takeLatest(FETCH_RECENT_ADDITIONS_REQUEST, fetchRecentAdditions);
  yield takeLatest(FETCH_PLACES_REQUEST, fetchPlaces);
  yield takeLatest(FETCH_FAVOURITE_PLACES_REQUEST, fetchFavouritePlaces);
  yield takeLatest(FETCH_SPOTLIGHT_STORIES_REQUEST, fetchSpotlightStories);
  yield takeLatest(FETCH_CULTURAL_HERITAGE_REQUEST, fetchCulturalHeritage);
  yield takeLatest(FETCH_JOIN_ADVENTURE_REQUEST, fetchJoinAdventure);
}
