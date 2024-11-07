import {
  FETCH_JOB_POSITIONS_REQUEST,
  FETCH_JOB_POSITIONS_SUCCESS,
  FETCH_JOB_POSITIONS_FAILURE,
  FETCH_JOB_TAGS_REQUEST,
  FETCH_JOB_TAGS_SUCCESS,
  FETCH_JOB_TAGS_FAILURE,
  FETCH_JOB_RESULTS_REQUEST,
  FETCH_JOB_RESULTS_SUCCESS,
  FETCH_JOB_RESULTS_FAILURE,
  FETCH_JOB_DETAIL_REQUEST,
  FETCH_JOB_DETAIL_SUCCESS,
  FETCH_JOB_DETAIL_FAILURE
} from "../types";

export const fetchJobPositionsRequest = () => ({
  type: FETCH_JOB_POSITIONS_REQUEST
});

export const fetchJobPositionsSuccess = (data) => ({
  type: FETCH_JOB_POSITIONS_SUCCESS,
  payload: data
});

export const fetchJobPositionsFailure = (error) => ({
  type: FETCH_JOB_POSITIONS_FAILURE,
  payload: error
});
export const fetchJobTagsRequest = () => ({
  type: FETCH_JOB_TAGS_REQUEST
});

export const fetchJobTagsSuccess = (data) => ({
  type: FETCH_JOB_TAGS_SUCCESS,
  payload: data
});

export const fetchJobTagsFailure = (error) => ({
  type: FETCH_JOB_TAGS_FAILURE,
  payload: error
});
export const fetchJobResultsRequest = (query) => ({
  type: FETCH_JOB_RESULTS_REQUEST,
  payload: query
});

export const fetchJobResultsSuccess = (data) => ({
  type: FETCH_JOB_RESULTS_SUCCESS,
  payload: data
});

export const fetchJobResultsFailure = (error) => ({
  type: FETCH_JOB_RESULTS_FAILURE,
  payload: error
});
export const fetchJobDetailRequest = (slug) => ({
  type: FETCH_JOB_DETAIL_REQUEST,
  payload: slug
});

export const fetchJobDetailSuccess = (data) => ({
  type: FETCH_JOB_DETAIL_SUCCESS,
  payload: data
});

export const fetchJobDetailFailure = (error) => ({
  type: FETCH_JOB_DETAIL_FAILURE,
  payload: error
});
