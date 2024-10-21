import {
  FETCH_SITE_INFO_REQUEST,
  FETCH_SITE_INFO_SUCCESS,
  FETCH_SITE_INFO_FAILURE,
  FETCH_ABOUT_ADVERT_REQUEST,
  FETCH_ABOUT_ADVERT_SUCCESS,
  FETCH_ABOUT_ADVERT_FAILURE
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
export const fetchAboutAdvertRequest = () => ({
  type: FETCH_ABOUT_ADVERT_REQUEST
});

export const fetchAboutAdvertSuccess = (data) => ({
  type: FETCH_ABOUT_ADVERT_SUCCESS,
  payload: data
});

export const fetchAboutAdvertFailure = (error) => ({
  type: FETCH_ABOUT_ADVERT_FAILURE,
  payload: error
});
