import {
  FETCH_JOB_POSITIONS_REQUEST,
  FETCH_JOB_POSITIONS_SUCCESS,
  FETCH_JOB_POSITIONS_FAILURE,
  FETCH_JOB_TAGS_REQUEST,
  FETCH_JOB_TAGS_SUCCESS,
  FETCH_JOB_TAGS_FAILURE,
  FETCH_JOB_RESULTS_REQUEST,
  FETCH_JOB_RESULTS_SUCCESS,
  FETCH_JOB_RESULTS_FAILURE,
  FETCH_JOB_DETAIL_REQUEST,
  FETCH_JOB_DETAIL_SUCCESS,
  FETCH_JOB_DETAIL_FAILURE
} from "../actions/types";

const initialState = {
  loading: false,
  positions: [],
  tags: [],
  jobs: [],
  job: {}
};

const aboutReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOB_POSITIONS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_JOB_POSITIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        positions: action.payload
      };
    case FETCH_JOB_POSITIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case FETCH_JOB_TAGS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_JOB_TAGS_SUCCESS:
      return {
        ...state,
        loading: false,
        tags: action.payload
      };
    case FETCH_JOB_TAGS_FAILURE:
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
    case FETCH_JOB_DETAIL_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_JOB_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        job: action.payload
      };
    case FETCH_JOB_DETAIL_FAILURE:
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
