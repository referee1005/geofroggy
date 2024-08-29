import {
  FETCH_SITE_INFO_REQUEST,
  FETCH_SITE_INFO_SUCCESS,
  FETCH_SITE_INFO_FAILURE
} from "../actions/types";

const initialState = {
  loading: false,
  data: []
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
    default:
      return state;
  }
};

export default aboutReducer;
