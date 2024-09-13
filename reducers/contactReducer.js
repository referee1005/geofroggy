import {
  FETCH_CONTACT_REQUEST,
  FETCH_CONTACT_SUCCESS,
  FETCH_CONTACT_FAILURE,
  POST_NOTE_REQUEST,
  POST_NOTE_SUCCESS,
  POST_NOTE_FAILURE
} from "../actions/types";

const initialState = {
  loading: false,
  data: {}
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case FETCH_CONTACT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case POST_NOTE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case POST_NOTE_SUCCESS:
      return {
        ...state,
        loading: false
        // data: action.payload
      };
    case POST_NOTE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default contactReducer;
