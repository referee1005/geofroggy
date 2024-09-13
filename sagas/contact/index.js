import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchContactSuccess,
  fetchContactFailure,
  postNoteSuccess,
  postNoteFailure
} from "../../actions/contact";
import { FETCH_CONTACT_REQUEST, POST_NOTE_REQUEST } from "../../actions/types";
import { fetchContactData, postNoteData } from "../../api"; // Assuming you have an API module to handle your requests

function* fetchContact() {
  try {
    const response = yield call(fetchContactData);
    yield put(fetchContactSuccess(response));
  } catch (error) {
    yield put(fetchContactFailure(error.message));
  }
}

function* postNote(action) {
  try {
    const response = yield call(() => postNoteData(action.payload));
    yield put(postNoteSuccess());
  } catch (error) {
    yield put(postNoteFailure(error.message));
  }
}

export function* contactSaga() {
  yield takeLatest(FETCH_CONTACT_REQUEST, fetchContact);
  yield takeLatest(POST_NOTE_REQUEST, postNote);
}
