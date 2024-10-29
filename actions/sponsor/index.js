import {
  FETCH_SPONSOR_REQUEST,
  FETCH_SPONSOR_SUCCESS,
  FETCH_SPONSOR_FAILURE,
  FETCH_SPONSOR_FAQ_REQUEST,
  FETCH_SPONSOR_FAQ_SUCCESS,
  FETCH_SPONSOR_FAQ_FAILURE,
  FETCH_SPONSOR_TEAM_REQUEST,
  FETCH_SPONSOR_TEAM_SUCCESS,
  FETCH_SPONSOR_TEAM_FAILURE
} from "../types";

export const fetchSponsorRequest = () => ({
  type: FETCH_SPONSOR_REQUEST
});

export const fetchSponsorSuccess = (data) => ({
  type: FETCH_SPONSOR_SUCCESS,
  payload: data
});

export const fetchSponsorFailure = (error) => ({
  type: FETCH_SPONSOR_FAILURE,
  payload: error
});
export const fetchSponsorFaqRequest = () => ({
  type: FETCH_SPONSOR_FAQ_REQUEST
});

export const fetchSponsorFaqSuccess = (data) => ({
  type: FETCH_SPONSOR_FAQ_SUCCESS,
  payload: data
});

export const fetchSponsorFaqFailure = (error) => ({
  type: FETCH_SPONSOR_FAQ_FAILURE,
  payload: error
});
export const fetchSponsorTeamRequest = () => ({
  type: FETCH_SPONSOR_TEAM_REQUEST
});

export const fetchSponsorTeamSuccess = (data) => ({
  type: FETCH_SPONSOR_TEAM_SUCCESS,
  payload: data
});

export const fetchSponsorTeamFailure = (error) => ({
  type: FETCH_SPONSOR_TEAM_FAILURE,
  payload: error
});
