import {
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
  FETCH_NEW_REQUEST,
  FETCH_NEW_SUCCESS,
  FETCH_NEW_FAILURE,
  FETCH_TRENDS_REQUEST,
  FETCH_TRENDS_SUCCESS,
  FETCH_TRENDS_FAILURE
} from "../types";

export const fetchNewsRequest = () => ({
  type: FETCH_NEWS_REQUEST
});

export const fetchNewsSuccess = (data) => ({
  type: FETCH_NEWS_SUCCESS,
  payload: data
});

export const fetchNewsFailure = (error) => ({
  type: FETCH_NEWS_FAILURE,
  payload: error
});
export const fetchNewRequest = (id) => ({
  type: FETCH_NEW_REQUEST,
  payload: id
});

export const fetchNewSuccess = (data) => ({
  type: FETCH_NEW_SUCCESS,
  payload: data
});

export const fetchNewFailure = (error) => ({
  type: FETCH_NEW_FAILURE,
  payload: error
});

export const fetchTrendsRequest = () => ({
  type: FETCH_TRENDS_REQUEST
});

export const fetchTrendsSuccess = (data) => ({
  type: FETCH_TRENDS_SUCCESS,
  payload: data
});

export const fetchTrendsFailure = (error) => ({
  type: FETCH_TRENDS_FAILURE,
  payload: error
});
