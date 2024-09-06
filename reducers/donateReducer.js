import {
  FETCH_DONATE_REQUEST,
  FETCH_DONATE_SUCCESS,
  FETCH_DONATE_FAILURE
} from "../actions/types";

const initialState = {
  loading: false,
  data: []
};

const donateReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DONATE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_DONATE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case FETCH_DONATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default donateReducer;
