import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchJobOptionsSuccess,
  fetchJobOptionsFailure
} from "../../actions/job";
import { FETCH_JOB_OPTIONS_REQUEST } from "../../actions/types";
import { fetchJobOptionsData } from "../../api"; // Assuming you have an API module to handle your requests

function* fetchJobOptions() {
  try {
    const response = yield call(fetchJobOptionsData);
    yield put(fetchJobOptionsSuccess(response));
  } catch (error) {
    yield put(fetchJobOptionsFailure(error.message));
  }
}

export function* jobSaga() {
  yield takeLatest(FETCH_JOB_OPTIONS_REQUEST, fetchJobOptions);
}
