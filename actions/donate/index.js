import {
  FETCH_DONATE_REQUEST,
  FETCH_DONATE_SUCCESS,
  FETCH_DONATE_FAILURE
} from "../types";

export const fetchDonateRequest = () => ({
  type: FETCH_DONATE_REQUEST
});

export const fetchDonateSuccess = (data) => ({
  type: FETCH_DONATE_SUCCESS,
  payload: data
});

export const fetchDonateFailure = (error) => ({
  type: FETCH_DONATE_FAILURE,
  payload: error
});
