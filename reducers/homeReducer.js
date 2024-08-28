import {
  FETCH_INTERESTS_REQUEST,
  FETCH_INTERESTS_SUCCESS,
  FETCH_INTERESTS_FAILURE,
  FETCH_POPULAR_COUNTRIES_REQUEST,
  FETCH_POPULAR_COUNTRIES_SUCCESS,
  FETCH_POPULAR_COUNTRIES_FAILURE,
  FETCH_RECENT_ADDITIONS_REQUEST,
  FETCH_RECENT_ADDITIONS_SUCCESS,
  FETCH_RECENT_ADDITIONS_FAILURE,
  FETCH_PLACES_REQUEST,
  FETCH_PLACES_SUCCESS,
  FETCH_PLACES_FAILURE
} from "../actions/types";

const initialState = {
  loading: false,
  interests: [],
  popular_countries: [],
  recent_additions: [],
  places: []
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INTERESTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_INTERESTS_SUCCESS:
      return {
        ...state,
        loading: false,
        interests: action.payload
      };
    case FETCH_INTERESTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case FETCH_POPULAR_COUNTRIES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_POPULAR_COUNTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        popular_countries: action.payload
      };
    case FETCH_POPULAR_COUNTRIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case FETCH_RECENT_ADDITIONS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_RECENT_ADDITIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        recent_additions: action.payload
      };
    case FETCH_RECENT_ADDITIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case FETCH_PLACES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_PLACES_SUCCESS:
      return {
        ...state,
        loading: false,
        places: action.payload
      };
    case FETCH_PLACES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default dataReducer;
