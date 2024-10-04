import {
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAILURE
} from "../types";

export const fetchUserProfileRequest = () => ({
  type: FETCH_USER_PROFILE_REQUEST
});

export const fetchUserProfileSuccess = (data) => ({
  type: FETCH_USER_PROFILE_SUCCESS,
  payload: data
});

export const fetchUserProfileFailure = (error) => ({
  type: FETCH_USER_PROFILE_FAILURE,
  payload: error
});
