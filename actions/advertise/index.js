import {
  FETCH_ADVERTISE_BODY_REQUEST,
  FETCH_ADVERTISE_BODY_SUCCESS,
  FETCH_ADVERTISE_BODY_FAILURE,
  FETCH_ADVERTISE_SOCIAL_REQUEST,
  FETCH_ADVERTISE_SOCIAL_SUCCESS,
  FETCH_ADVERTISE_SOCIAL_FAILURE,
  FETCH_ADVERTISE_PLANS_REQUEST,
  FETCH_ADVERTISE_PLANS_SUCCESS,
  FETCH_ADVERTISE_PLANS_FAILURE,
} from "../types";

export const fetchAdvirtiseBodyRequest = () => ({
  type: FETCH_ADVERTISE_BODY_REQUEST,
});

export const fetchAdvirtiseBodySuccess = (data) => ({
  type: FETCH_ADVERTISE_BODY_SUCCESS,
  payload: data,
});

export const fetchAdvirtiseBodyFailure = (error) => ({
  type: FETCH_ADVERTISE_BODY_FAILURE,
  payload: error,
});
export const fetchAdvirtiseSocialRequest = () => ({
  type: FETCH_ADVERTISE_SOCIAL_REQUEST,
});

export const fetchAdvirtiseSocialSuccess = (data) => ({
  type: FETCH_ADVERTISE_SOCIAL_SUCCESS,
  payload: data,
});

export const fetchAdvirtiseSocialFailure = (error) => ({
  type: FETCH_ADVERTISE_SOCIAL_FAILURE,
  payload: error,
});
export const fetchAdvirtisePlansRequest = () => ({
  type: FETCH_ADVERTISE_PLANS_REQUEST,
});

export const fetchAdvirtisePlansSuccess = (data) => ({
  type: FETCH_ADVERTISE_PLANS_SUCCESS,
  payload: data,
});

export const fetchAdvirtisePlansFailure = (error) => ({
  type: FETCH_ADVERTISE_PLANS_FAILURE,
  payload: error,
});
