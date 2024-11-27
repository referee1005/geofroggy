import {
  FETCH_ADVERTISE_BODY_REQUEST,
  FETCH_ADVERTISE_BODY_SUCCESS,
  FETCH_ADVERTISE_BODY_FAILURE,
  FETCH_ADVERTISE_SOCIAL_REQUEST,
  FETCH_ADVERTISE_SOCIAL_SUCCESS,
  FETCH_ADVERTISE_SOCIAL_FAILURE,
  FETCH_ADVERTISE_PLANS_REQUEST,
  FETCH_ADVERTISE_PLANS_SUCCESS,
  FETCH_ADVERTISE_PLANS_FAILURE,
} from "../actions/types";

const initialState = {
  loading: false,
  body: {},
  social: [],
  plans: [],
};

const advertiseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADVERTISE_BODY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ADVERTISE_BODY_SUCCESS:
      return {
        ...state,
        loading: false,
        body: action.payload,
      };
    case FETCH_ADVERTISE_BODY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_ADVERTISE_SOCIAL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ADVERTISE_SOCIAL_SUCCESS:
      return {
        ...state,
        loading: false,
        social: action.payload,
      };
    case FETCH_ADVERTISE_SOCIAL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_ADVERTISE_PLANS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ADVERTISE_PLANS_SUCCESS:
      return {
        ...state,
        loading: false,
        plans: action.payload,
      };
    case FETCH_ADVERTISE_PLANS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default advertiseReducer;
