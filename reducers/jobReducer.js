import {
  FETCH_JOB_OPTIONS_REQUEST,
  FETCH_JOB_OPTIONS_SUCCESS,
  FETCH_JOB_OPTIONS_FAILURE,
  FETCH_JOB_RESULTS_REQUEST,
  FETCH_JOB_RESULTS_SUCCESS,
  FETCH_JOB_RESULTS_FAILURE
} from "../actions/types";

const initialState = {
  loading: false,
  options: [],
  jobs: []
};

const aboutReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOB_OPTIONS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_JOB_OPTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        options: action.payload
      };
    case FETCH_JOB_OPTIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case FETCH_JOB_RESULTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_JOB_RESULTS_SUCCESS:
      return {
        ...state,
        loading: false,
        jobs: action.payload
      };
    case FETCH_JOB_RESULTS_FAILURE:
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
