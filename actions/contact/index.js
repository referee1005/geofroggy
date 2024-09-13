import {
  FETCH_CONTACT_REQUEST,
  FETCH_CONTACT_SUCCESS,
  FETCH_CONTACT_FAILURE,
  POST_NOTE_REQUEST,
  POST_NOTE_SUCCESS,
  POST_NOTE_FAILURE
} from "../types";

export const fetchContactRequest = () => ({
  type: FETCH_CONTACT_REQUEST
});

export const fetchContactSuccess = (data) => ({
  type: FETCH_CONTACT_SUCCESS,
  payload: data
});

export const fetchContactFailure = (error) => ({
  type: FETCH_CONTACT_FAILURE,
  payload: error
});
export const postNoteRequest = () => ({
  type: POST_NOTE_REQUEST
});

export const postNoteSuccess = () => ({
  type: POST_NOTE_SUCCESS
  // payload: data
});

export const postNoteFailure = (error) => ({
  type: POST_NOTE_FAILURE,
  payload: error
});
