import {
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
  FETCH_NEW_REQUEST,
  FETCH_NEW_SUCCESS,
  FETCH_NEW_FAILURE,
  FETCH_TRENDS_REQUEST,
  FETCH_TRENDS_SUCCESS,
  FETCH_TRENDS_FAILURE
} from "../actions/types";

const initialState = {
  loading: false,
  news: [],
  new: {},
  trends: []
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
    default:
      return state;
  }
};

export default newsReducer;
