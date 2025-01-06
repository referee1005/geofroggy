import {
  FETCH_LANDING_ABOUTUS_REQUEST,
  FETCH_LANDING_ABOUTUS_SUCCESS,
  FETCH_LANDING_ABOUTUS_FAILURE,
  FETCH_POPULAR_COUNTRIES_REQUEST,
  FETCH_POPULAR_COUNTRIES_SUCCESS,
  FETCH_POPULAR_COUNTRIES_FAILURE,
  FETCH_RECENT_ADDITIONS_REQUEST,
  FETCH_RECENT_ADDITIONS_SUCCESS,
  FETCH_RECENT_ADDITIONS_FAILURE,
  FETCH_FAVOURITE_PLACES_REQUEST,
  FETCH_FAVOURITE_PLACES_SUCCESS,
  FETCH_FAVOURITE_PLACES_FAILURE,
  FETCH_PLACES_REQUEST,
  FETCH_PLACES_SUCCESS,
  FETCH_PLACES_FAILURE,
} from "../types";

export const fetchLandingAboutusRequest = () => ({
  type: FETCH_LANDING_ABOUTUS_REQUEST,
});

export const fetchLandingAboutusSuccess = (data) => ({
  type: FETCH_LANDING_ABOUTUS_SUCCESS,
  payload: data,
});

export const fetchLandingAboutusFailure = (error) => ({
  type: FETCH_LANDING_ABOUTUS_FAILURE,
  payload: error,
});
export const fetchPopularCountriesRequest = () => ({
  type: FETCH_POPULAR_COUNTRIES_REQUEST,
});

export const fetchPopularCountriesSuccess = (data) => ({
  type: FETCH_POPULAR_COUNTRIES_SUCCESS,
  payload: data,
});

export const fetchPopularCountriesFailure = (error) => ({
  type: FETCH_POPULAR_COUNTRIES_FAILURE,
  payload: error,
});
export const fetchRecentAdditionsRequest = () => ({
  type: FETCH_RECENT_ADDITIONS_REQUEST,
});

export const fetchRecentAdditionsSuccess = (data) => ({
  type: FETCH_RECENT_ADDITIONS_SUCCESS,
  payload: data,
});

export const fetchRecentAdditionsFailure = (error) => ({
  type: FETCH_RECENT_ADDITIONS_FAILURE,
  payload: error,
});
export const fetchPlacesRequest = () => ({
  type: FETCH_PLACES_REQUEST,
});

export const fetchPlacesSuccess = (data) => ({
  type: FETCH_PLACES_SUCCESS,
  payload: data,
});

export const fetchPlacesFailure = (error) => ({
  type: FETCH_PLACES_FAILURE,
  payload: error,
});
export const fetchFavouritePlacesRequest = () => ({
  type: FETCH_FAVOURITE_PLACES_REQUEST,
});

export const fetchFavouritePlacesSuccess = (data) => ({
  type: FETCH_FAVOURITE_PLACES_SUCCESS,
  payload: data,
});

export const fetchFavouritePlacesFailure = (error) => ({
  type: FETCH_FAVOURITE_PLACES_FAILURE,
  payload: error,
});
