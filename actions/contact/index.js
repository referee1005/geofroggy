import {
  FETCH_CONTACT_REQUEST,
  FETCH_CONTACT_SUCCESS,
  FETCH_CONTACT_FAILURE
} from "../types";

export const fetchContactRequest = () => ({
  type: FETCH_CONTACT_REQUEST
});

export const fetchContactSuccess = (data) => ({
  type: FETCH_CONTACT_SUCCESS,
  payload: data
});

export const fetchContactFailure = (error) => ({
  type: FETCH_CONTACT_FAILURE,
  payload: error
});
