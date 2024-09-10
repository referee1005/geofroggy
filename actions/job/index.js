import {
  FETCH_JOB_OPTIONS_REQUEST,
  FETCH_JOB_OPTIONS_SUCCESS,
  FETCH_JOB_OPTIONS_FAILURE
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
