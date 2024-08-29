import {
  FETCH_SITE_INFO_REQUEST,
  FETCH_SITE_INFO_SUCCESS,
  FETCH_SITE_INFO_FAILURE
} from "../types";

export const fetchSiteInfoRequest = () => ({
  type: FETCH_SITE_INFO_REQUEST
});

export const fetchSiteInfoSuccess = (data) => ({
  type: FETCH_SITE_INFO_SUCCESS,
  payload: data
});

export const fetchSiteInfoFailure = (error) => ({
  type: FETCH_SITE_INFO_FAILURE,
  payload: error
});
