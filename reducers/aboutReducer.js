import {
  FETCH_SITE_INFO_REQUEST,
  FETCH_SITE_INFO_SUCCESS,
  FETCH_SITE_INFO_FAILURE,
  FETCH_ABOUT_ADVERT_REQUEST,
  FETCH_ABOUT_ADVERT_SUCCESS,
  FETCH_ABOUT_ADVERT_FAILURE
} from "../actions/types";

const initialState = {
  loading: false,
  data: [],
  advert: []
};

const aboutReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SITE_INFO_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_SITE_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case FETCH_SITE_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case FETCH_ABOUT_ADVERT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_ABOUT_ADVERT_SUCCESS:
      return {
        ...state,
        loading: false,
        advert: action.payload
      };
    case FETCH_ABOUT_ADVERT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default aboutReducer;
