import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchJobPositionsSuccess,
  fetchJobPositionsFailure,
  fetchJobTagsSuccess,
  fetchJobTagsFailure,
  fetchJobResultsSuccess,
  fetchJobResultsFailure,
  fetchJobDetailSuccess,
  fetchJobDetailFailure
} from "../../actions/job";
import {
  FETCH_JOB_POSITIONS_REQUEST,
  FETCH_JOB_TAGS_REQUEST,
  FETCH_JOB_RESULTS_REQUEST,
  FETCH_JOB_DETAIL_REQUEST
} from "../../actions/types";
import {
  fetchJobPositionsData,
  fetchJobTagsData,
  fetchJobResultsData,
  fetchJobDetailData
} from "../../api"; // Assuming you have an API module to handle your requests

function* fetchJobPositions() {
  try {
    const response = yield call(fetchJobPositionsData);
    yield put(fetchJobPositionsSuccess(response));
  } catch (error) {
    yield put(fetchJobPositionsFailure(error.message));
  }
}
function* fetchJobTags() {
  try {
    const response = yield call(fetchJobTagsData);
    yield put(fetchJobTagsSuccess(response));
  } catch (error) {
    yield put(fetchJobTagsFailure(error.message));
  }
}
function* fetchJobResults(action) {
  try {
    const response = yield call(() => fetchJobResultsData(action.payload));
    yield put(fetchJobResultsSuccess(response));
  } catch (error) {
    yield put(fetchJobResultsFailure(error.message));
  }
}

function* fetchJobDetail(action) {
  try {
    const response = yield call(() => fetchJobDetailData(action.payload));
    yield put(fetchJobDetailSuccess(response));
  } catch (error) {
    yield put(fetchJobDetailFailure(error.message));
  }
}

export function* jobSaga() {
  yield takeLatest(FETCH_JOB_POSITIONS_REQUEST, fetchJobPositions);
  yield takeLatest(FETCH_JOB_TAGS_REQUEST, fetchJobTags);
  yield takeLatest(FETCH_JOB_RESULTS_REQUEST, fetchJobResults);
  yield takeLatest(FETCH_JOB_DETAIL_REQUEST, fetchJobDetail);
}
