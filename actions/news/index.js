import {
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
  FETCH_NEW_REQUEST,
  FETCH_NEW_SUCCESS,
  FETCH_NEW_FAILURE,
  FETCH_TRENDS_REQUEST,
  FETCH_TRENDS_SUCCESS,
  FETCH_TRENDS_FAILURE,
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
  FETCH_GROUPS_REQUEST,
  FETCH_GROUPS_SUCCESS,
  FETCH_GROUPS_FAILURE,
  FETCH_COMMUNITIES_REQUEST,
  FETCH_COMMUNITIES_SUCCESS,
  FETCH_COMMUNITIES_FAILURE,
  FETCH_RECOMMENDED_REQUEST,
  FETCH_RECOMMENDED_SUCCESS,
  FETCH_RECOMMENDED_FAILURE
} from "../types";

export const fetchNewsRequest = () => ({
  type: FETCH_NEWS_REQUEST
});

export const fetchNewsSuccess = (data) => ({
  type: FETCH_NEWS_SUCCESS,
  payload: data
});

export const fetchNewsFailure = (error) => ({
  type: FETCH_NEWS_FAILURE,
  payload: error
});
export const fetchNewRequest = (id) => ({
  type: FETCH_NEW_REQUEST,
  payload: id
});

export const fetchNewSuccess = (data) => ({
  type: FETCH_NEW_SUCCESS,
  payload: data
});

export const fetchNewFailure = (error) => ({
  type: FETCH_NEW_FAILURE,
  payload: error
});

export const fetchTrendsRequest = () => ({
  type: FETCH_TRENDS_REQUEST
});

export const fetchTrendsSuccess = (data) => ({
  type: FETCH_TRENDS_SUCCESS,
  payload: data
});

export const fetchTrendsFailure = (error) => ({
  type: FETCH_TRENDS_FAILURE,
  payload: error
});
export const fetchEventsRequest = () => ({
  type: FETCH_EVENTS_REQUEST
});

export const fetchEventsSuccess = (data) => ({
  type: FETCH_EVENTS_SUCCESS,
  payload: data
});

export const fetchEventsFailure = (error) => ({
  type: FETCH_EVENTS_FAILURE,
  payload: error
});
export const fetchGroupsRequest = () => ({
  type: FETCH_GROUPS_REQUEST
});

export const fetchGroupsSuccess = (data) => ({
  type: FETCH_GROUPS_SUCCESS,
  payload: data
});

export const fetchGroupsFailure = (error) => ({
  type: FETCH_GROUPS_FAILURE,
  payload: error
});
export const fetchCommunitiesRequest = () => ({
  type: FETCH_COMMUNITIES_REQUEST
});

export const fetchCommunitiesSuccess = (data) => ({
  type: FETCH_COMMUNITIES_SUCCESS,
  payload: data
});

export const fetchCommunitiesFailure = (error) => ({
  type: FETCH_COMMUNITIES_FAILURE,
  payload: error
});
export const fetchRecommendedRequest = () => ({
  type: FETCH_RECOMMENDED_REQUEST
});

export const fetchRecommendedSuccess = (data) => ({
  type: FETCH_RECOMMENDED_SUCCESS,
  payload: data
});

export const fetchRecommendedFailure = (error) => ({
  type: FETCH_RECOMMENDED_FAILURE,
  payload: error
});
