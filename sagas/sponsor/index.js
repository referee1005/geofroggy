import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchSponsorSuccess,
  fetchSponsorFaqSuccess,
  fetchSponsorTeamSuccess,
  fetchSponsorFailure,
  fetchSponsorFaqFailure,
  fetchSponsorTeamFailure
} from "../../actions/sponsor";
import {
  FETCH_SPONSOR_REQUEST,
  FETCH_SPONSOR_FAQ_REQUEST,
  FETCH_SPONSOR_TEAM_REQUEST
} from "../../actions/types";
import {
  fetchSponsorData,
  fetchSponsorFaqData,
  fetchSponsorTeamData
} from "../../api"; // Assuming you have an API module to handle your requests

function* fetchSponsor() {
  try {
    const response = yield call(fetchSponsorData);
    yield put(fetchSponsorSuccess(response));
  } catch (error) {
    yield put(fetchSponsorFailure(error.message));
  }
}
function* fetchSponsorFaq() {
  try {
    const response = yield call(fetchSponsorFaqData);
    yield put(fetchSponsorFaqSuccess(response));
  } catch (error) {
    yield put(fetchSponsorFaqFailure(error.message));
  }
}
function* fetchSponsorTeam() {
  try {
    const response = yield call(fetchSponsorTeamData);
    yield put(fetchSponsorTeamSuccess(response));
  } catch (error) {
    yield put(fetchSponsorTeamFailure(error.message));
  }
}

export function* sponsorSaga() {
  yield takeLatest(FETCH_SPONSOR_REQUEST, fetchSponsor);
  yield takeLatest(FETCH_SPONSOR_FAQ_REQUEST, fetchSponsorFaq);
  yield takeLatest(FETCH_SPONSOR_TEAM_REQUEST, fetchSponsorTeam);
}
