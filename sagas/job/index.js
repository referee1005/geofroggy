import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchJobOptionsSuccess,
  fetchJobOptionsFailure,
  fetchJobResultsSuccess,
  fetchJobResultsFailure
} from "../../actions/job";
import {
  FETCH_JOB_OPTIONS_REQUEST,
  FETCH_JOB_RESULTS_REQUEST
} from "../../actions/types";
import { fetchJobOptionsData, fetchJobResultsData } from "../../api"; // Assuming you have an API module to handle your requests

function* fetchJobOptions() {
  try {
    const response = yield call(fetchJobOptionsData);
    yield put(fetchJobOptionsSuccess(response));
  } catch (error) {
    yield put(fetchJobOptionsFailure(error.message));
  }
}
function* fetchJobResults() {
  try {
    const response = yield call(fetchJobResultsData);
    yield put(fetchJobResultsSuccess(response));
  } catch (error) {
    yield put(fetchJobResultsFailure(error.message));
  }
}

export function* jobSaga() {
  yield takeLatest(FETCH_JOB_OPTIONS_REQUEST, fetchJobOptions);
  yield takeLatest(FETCH_JOB_RESULTS_REQUEST, fetchJobResults);
}
