import {
  FETCH_FAQ_REQUEST,
  FETCH_FAQ_SUCCESS,
  FETCH_FAQ_FAILURE
} from "../actions/types";

const initialState = {
  loading: false,
  data: {}
};

const aboutReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FAQ_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_FAQ_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case FETCH_FAQ_FAILURE:
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
