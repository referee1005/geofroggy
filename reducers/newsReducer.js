import {
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
  FETCH_LATEST_ARTICLES_REQUEST,
  FETCH_LATEST_ARTICLES_SUCCESS,
  FETCH_LATEST_ARTICLES_FAILURE,
  FETCH_NEW_REQUEST,
  FETCH_NEW_SUCCESS,
  FETCH_NEW_FAILURE,
  FETCH_TRENDS_REQUEST,
  FETCH_TRENDS_SUCCESS,
  FETCH_TRENDS_FAILURE,
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
  FETCH_EVENT_REQUEST,
  FETCH_EVENT_SUCCESS,
  FETCH_EVENT_FAILURE,
  FETCH_GROUPS_REQUEST,
  FETCH_GROUPS_SUCCESS,
  FETCH_GROUPS_FAILURE,
  FETCH_COMMUNITIES_REQUEST,
  FETCH_COMMUNITIES_SUCCESS,
  FETCH_COMMUNITIES_FAILURE,
  FETCH_RECOMMENDED_REQUEST,
  FETCH_RECOMMENDED_SUCCESS,
  FETCH_RECOMMENDED_FAILURE
} from "../actions/types";

const initialState = {
  loading: false,
  news: [],
  latestArticles: [],
  new: {},
  trends: [],
  events: [],
  event: {},
  groups: [],
  communities: [],
  recommends: []
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        news: action.payload
      };
    case FETCH_NEWS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case FETCH_LATEST_ARTICLES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_LATEST_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        latestArticles: action.payload
      };
    case FETCH_LATEST_ARTICLES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case FETCH_NEW_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_NEW_SUCCESS:
      return {
        ...state,
        loading: false,
        new: action.payload
      };
    case FETCH_NEW_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case FETCH_TRENDS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_TRENDS_SUCCESS:
      return {
        ...state,
        loading: false,
        trends: action.payload
      };
    case FETCH_TRENDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case FETCH_EVENTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        events: action.payload
      };
    case FETCH_EVENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case FETCH_EVENT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        event: action.payload
      };
    case FETCH_EVENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case FETCH_GROUPS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_GROUPS_SUCCESS:
      return {
        ...state,
        loading: false,
        groups: action.payload
      };
    case FETCH_GROUPS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case FETCH_COMMUNITIES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_COMMUNITIES_SUCCESS:
      return {
        ...state,
        loading: false,
        communities: action.payload
      };
    case FETCH_COMMUNITIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case FETCH_RECOMMENDED_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_RECOMMENDED_SUCCESS:
      return {
        ...state,
        loading: false,
        recommends: action.payload
      };
    case FETCH_RECOMMENDED_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default newsReducer;
