import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchNewsSuccess,
  fetchNewsFailure,
  fetchNewSuccess,
  fetchNewFailure,
  fetchTrendsSuccess,
  fetchTrendsFailure,
  fetchEventsSuccess,
  fetchEventsFailure,
  fetchGroupsSuccess,
  fetchGroupsFailure,
  fetchCommunitiesSuccess,
  fetchCommunitiesFailure,
  fetchRecommendedSuccess,
  fetchRecommendedFailure
} from "../../actions/news";

import {
  FETCH_NEWS_REQUEST,
  FETCH_NEW_REQUEST,
  FETCH_TRENDS_REQUEST,
  FETCH_EVENTS_REQUEST,
  FETCH_GROUPS_REQUEST,
  FETCH_COMMUNITIES_REQUEST,
  FETCH_RECOMMENDED_REQUEST
} from "../../actions/types";

import {
  fetchNewsData,
  fetchNewData,
  fetchTrendsData,
  fetchEventsData,
  fetchGroupsData,
  fetchCommunitiesData,
  fetchRecommendsData
} from "../../api"; // Assuming you have an API module to handle your requests

function* fetchNews() {
  try {
    const response = yield call(fetchNewsData);
    yield put(fetchNewsSuccess(response));
  } catch (error) {
    yield put(fetchNewsFailure(error.message));
  }
}
function* fetchNew(action) {
  try {
    const response = yield call(() => fetchNewData(action.payload));
    yield put(fetchNewSuccess(response));
  } catch (error) {
    yield put(fetchNewFailure(error.message));
  }
}
function* fetchTrends() {
  try {
    const response = yield call(fetchTrendsData);
    yield put(fetchTrendsSuccess(response));
  } catch (error) {
    yield put(fetchTrendsFailure(error.message));
  }
}
function* fetchEvents() {
  try {
    const response = yield call(fetchEventsData);
    yield put(fetchEventsSuccess(response));
  } catch (error) {
    yield put(fetchEventsFailure(error.message));
  }
}
function* fetchGroups() {
  try {
    const response = yield call(fetchGroupsData);
    yield put(fetchGroupsSuccess(response));
  } catch (error) {
    yield put(fetchGroupsFailure(error.message));
  }
}
function* fetchCommunities() {
  try {
    const response = yield call(fetchCommunitiesData);
    yield put(fetchCommunitiesSuccess(response));
  } catch (error) {
    yield put(fetchCommunitiesFailure(error.message));
  }
}
function* fetchRecommends() {
  try {
    const response = yield call(fetchRecommendsData);
    yield put(fetchRecommendedSuccess(response));
  } catch (error) {
    yield put(fetchRecommendedFailure(error.message));
  }
}
export function* newsSaga() {
  yield takeLatest(FETCH_NEWS_REQUEST, fetchNews);
  yield takeLatest(FETCH_NEW_REQUEST, fetchNew);
  yield takeLatest(FETCH_TRENDS_REQUEST, fetchTrends);
  yield takeLatest(FETCH_EVENTS_REQUEST, fetchEvents);
  yield takeLatest(FETCH_GROUPS_REQUEST, fetchGroups);
  yield takeLatest(FETCH_COMMUNITIES_REQUEST, fetchCommunities);
  yield takeLatest(FETCH_RECOMMENDED_REQUEST, fetchRecommends);
}
