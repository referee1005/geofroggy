import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchUserProfileSuccess,
  fetchUserProfileFailure
} from "../../actions/user";
import { FETCH_USER_PROFILE_REQUEST } from "../../actions/types";
import { fetchUserData } from "../../api"; // Assuming you have an API module to handle your requests

function* fetchUserProfile() {
  try {
    const response = yield call(fetchUserData);
    yield put(fetchUserProfileSuccess(response));
  } catch (error) {
    yield put(fetchUserProfileFailure(error.message));
  }
}
export function* userSaga() {
  yield takeLatest(FETCH_USER_PROFILE_REQUEST, fetchUserProfile);
}
