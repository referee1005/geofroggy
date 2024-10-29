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
} from "../actions/types";

const initialState = {
  loading: false,
  sponsor: {},
  sponsor_faq: [],
  sponsor_team: []
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SPONSOR_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_SPONSOR_SUCCESS:
      return {
        ...state,
        loading: false,
        sponsor: action.payload
      };
    case FETCH_SPONSOR_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case FETCH_SPONSOR_FAQ_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_SPONSOR_FAQ_SUCCESS:
      return {
        ...state,
        loading: false,
        sponsor_faq: action.payload
      };
    case FETCH_SPONSOR_FAQ_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case FETCH_SPONSOR_TEAM_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_SPONSOR_TEAM_SUCCESS:
      return {
        ...state,
        loading: false,
        sponsor_team: action.payload
      };
    case FETCH_SPONSOR_TEAM_FAILURE:
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
