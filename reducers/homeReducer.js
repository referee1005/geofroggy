import {
  FETCH_LANDING_ABOUTUS_REQUEST,
  FETCH_LANDING_ABOUTUS_SUCCESS,
  FETCH_LANDING_ABOUTUS_FAILURE,
  FETCH_POPULAR_COUNTRIES_REQUEST,
  FETCH_POPULAR_COUNTRIES_SUCCESS,
  FETCH_POPULAR_COUNTRIES_FAILURE,
  FETCH_RECENT_ADDITIONS_REQUEST,
  FETCH_RECENT_ADDITIONS_SUCCESS,
  FETCH_RECENT_ADDITIONS_FAILURE,
  FETCH_PLACES_REQUEST,
  FETCH_PLACES_SUCCESS,
  FETCH_PLACES_FAILURE,
  FETCH_FAVOURITE_PLACES_REQUEST,
  FETCH_FAVOURITE_PLACES_SUCCESS,
  FETCH_FAVOURITE_PLACES_FAILURE,
} from "../actions/types";

const initialState = {
  loading: false,
  aboutus: {},
  popular_countries: [],
  recent_additions: [],
  places: [],
  favourite_places: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LANDING_ABOUTUS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LANDING_ABOUTUS_SUCCESS:
      return {
        ...state,
        loading: false,
        aboutus: action.payload,
      };
    case FETCH_LANDING_ABOUTUS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_POPULAR_COUNTRIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POPULAR_COUNTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        popular_countries: action.payload,
      };
    case FETCH_POPULAR_COUNTRIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_RECENT_ADDITIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_RECENT_ADDITIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        recent_additions: action.payload,
      };
    case FETCH_RECENT_ADDITIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_PLACES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PLACES_SUCCESS:
      return {
        ...state,
        loading: false,
        places: action.payload,
      };
    case FETCH_PLACES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_FAVOURITE_PLACES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FAVOURITE_PLACES_SUCCESS:
      return {
        ...state,
        loading: false,
        favourite_places: action.payload,
      };
    case FETCH_FAVOURITE_PLACES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
