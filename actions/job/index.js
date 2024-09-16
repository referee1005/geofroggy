import {
  FETCH_JOB_OPTIONS_REQUEST,
  FETCH_JOB_OPTIONS_SUCCESS,
  FETCH_JOB_OPTIONS_FAILURE,
  FETCH_JOB_RESULTS_REQUEST,
  FETCH_JOB_RESULTS_SUCCESS,
  FETCH_JOB_RESULTS_FAILURE,
  FETCH_JOB_DETAIL_REQUEST,
  FETCH_JOB_DETAIL_SUCCESS,
  FETCH_JOB_DETAIL_FAILURE
} from "../types";

export const fetchJobOptionsRequest = () => ({
  type: FETCH_JOB_OPTIONS_REQUEST
});

export const fetchJobOptionsSuccess = (data) => ({
  type: FETCH_JOB_OPTIONS_SUCCESS,
  payload: data
});

export const fetchJobOptionsFailure = (error) => ({
  type: FETCH_JOB_OPTIONS_FAILURE,
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
export const fetchJobDetailRequest = (id) => ({
  type: FETCH_JOB_DETAIL_REQUEST,
  payload: id
});

export const fetchJobDetailSuccess = (data) => ({
  type: FETCH_JOB_DETAIL_SUCCESS,
  payload: data
});

export const fetchJobDetailFailure = (error) => ({
  type: FETCH_JOB_DETAIL_FAILURE,
  payload: error
});
