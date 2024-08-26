import {
  FETCH_INTERESTS_REQUEST,
  FETCH_INTERESTS_SUCCESS,
  FETCH_INTERESTS_FAILURE,
  FETCH_POPULAR_COUNTRIES_REQUEST,
  FETCH_POPULAR_COUNTRIES_SUCCESS,
  FETCH_POPULAR_COUNTRIES_FAILURE
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
