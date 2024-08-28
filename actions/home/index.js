import {
  FETCH_INTERESTS_REQUEST,
  FETCH_INTERESTS_SUCCESS,
  FETCH_INTERESTS_FAILURE,
  FETCH_POPULAR_COUNTRIES_REQUEST,
  FETCH_POPULAR_COUNTRIES_SUCCESS,
  FETCH_POPULAR_COUNTRIES_FAILURE,
  FETCH_RECENT_ADDITIONS_REQUEST,
  FETCH_RECENT_ADDITIONS_SUCCESS,
  FETCH_RECENT_ADDITIONS_FAILURE,
  FETCH_PLACES_REQUEST,
  FETCH_PLACES_SUCCESS,
  FETCH_PLACES_FAILURE
} from "../types";

export const fetchInterestsRequest = () => ({
  type: FETCH_INTERESTS_REQUEST
});

export const fetchInterestsSuccess = (data) => ({
  type: FETCH_INTERESTS_SUCCESS,
  payload: data
});

export const fetchInterestsFailure = (error) => ({
  type: FETCH_INTERESTS_FAILURE,
  payload: error
});
export const fetchPopularCountriesRequest = () => ({
  type: FETCH_POPULAR_COUNTRIES_REQUEST
});

export const fetchPopularCountriesSuccess = (data) => ({
  type: FETCH_POPULAR_COUNTRIES_SUCCESS,
  payload: data
});

export const fetchPopularCountriesFailure = (error) => ({
  type: FETCH_POPULAR_COUNTRIES_FAILURE,
  payload: error
});
export const fetchRecentAdditionsRequest = () => ({
  type: FETCH_RECENT_ADDITIONS_REQUEST
});

export const fetchRecentAdditionsSuccess = (data) => ({
  type: FETCH_RECENT_ADDITIONS_SUCCESS,
  payload: data
});

export const fetchRecentAdditionsFailure = (error) => ({
  type: FETCH_RECENT_ADDITIONS_FAILURE,
  payload: error
});
export const fetchPlacesRequest = () => ({
  type: FETCH_PLACES_REQUEST
});

export const fetchPlacesSuccess = (data) => ({
  type: FETCH_PLACES_SUCCESS,
  payload: data
});

export const fetchPlacesFailure = (error) => ({
  type: FETCH_PLACES_FAILURE,
  payload: error
});
