import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchNewsSuccess,
  fetchNewsFailure,
  fetchLatestArticlesSuccess,
  fetchLatestArticlesFailure,
  fetchNewSuccess,
  fetchNewFailure,
  fetchTrendsSuccess,
  fetchTrendsFailure,
  fetchEventsSuccess,
  fetchEventsFailure,
  fetchEventSuccess,
  fetchEventFailure,
  fetchGroupsSuccess,
  fetchGroupsFailure,
  fetchCommunitiesSuccess,
  fetchCommunitiesFailure,
  fetchRecommendedSuccess,
  fetchRecommendedFailure,
  fetchNewsLetterOptionsSuccess,
  fetchNewsLetterOptionsFailure,
  postNewsletterSubscribeSuccess,
  postNewsletterSubscribeFailure
} from "../../actions/news";

import {
  FETCH_NEWS_REQUEST,
  FETCH_LATEST_ARTICLES_REQUEST,
  FETCH_NEW_REQUEST,
  FETCH_TRENDS_REQUEST,
  FETCH_EVENTS_REQUEST,
  FETCH_EVENT_REQUEST,
  FETCH_GROUPS_REQUEST,
  FETCH_COMMUNITIES_REQUEST,
  FETCH_RECOMMENDED_REQUEST,
  FETCH_NEWSLETTER_OPTIONS_REQUEST,
  POST_NEWSLETTER_SUBSCRIBE_REQUEST
} from "../../actions/types";

import {
  fetchNewsData,
  fetchLatestArticlesData,
  fetchNewData,
  fetchTrendsData,
  fetchEventsData,
  fetchEventData,
  fetchGroupsData,
  fetchCommunitiesData,
  fetchRecommendsData,
  fetchNewsletterOptionsData,
  postNewsletterSubscribeData
} from "../../api"; // Assuming you have an API module to handle your requests

function* fetchNews() {
  try {
    const response = yield call(fetchNewsData);
    yield put(fetchNewsSuccess(response));
  } catch (error) {
    yield put(fetchNewsFailure(error.message));
  }
}

function* fetchLatestArticles() {
  try {
    const response = yield call(fetchLatestArticlesData);
    yield put(fetchLatestArticlesSuccess(response));
  } catch (error) {
    yield put(fetchLatestArticlesFailure(error.message));
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
function* fetchEvent(action) {
  try {
    const response = yield call(() => fetchEventData(action.payload));
    yield put(fetchEventSuccess(response));
  } catch (error) {
    yield put(fetchEventFailure(error.message));
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
function* fetchNewsletterOptions() {
  try {
    const response = yield call(fetchNewsletterOptionsData);
    yield put(fetchNewsLetterOptionsSuccess(response));
  } catch (error) {
    yield put(fetchNewsLetterOptionsFailure(error.message));
  }
}
function* postNewsletterSubscribe(action) {
  try {
    const response = yield call(() =>
      postNewsletterSubscribeData(action.payload)
    );
    yield put(postNewsletterSubscribeSuccess(response));
  } catch (error) {
    yield put(postNewsletterSubscribeFailure(error.message));
  }
}
export function* newsSaga() {
  yield takeLatest(FETCH_NEWS_REQUEST, fetchNews);
  yield takeLatest(FETCH_LATEST_ARTICLES_REQUEST, fetchLatestArticles);
  yield takeLatest(FETCH_NEW_REQUEST, fetchNew);
  yield takeLatest(FETCH_TRENDS_REQUEST, fetchTrends);
  yield takeLatest(FETCH_EVENTS_REQUEST, fetchEvents);
  yield takeLatest(FETCH_EVENT_REQUEST, fetchEvent);
  yield takeLatest(FETCH_GROUPS_REQUEST, fetchGroups);
  yield takeLatest(FETCH_COMMUNITIES_REQUEST, fetchCommunities);
  yield takeLatest(FETCH_RECOMMENDED_REQUEST, fetchRecommends);
  yield takeLatest(FETCH_NEWSLETTER_OPTIONS_REQUEST, fetchNewsletterOptions);
  yield takeLatest(POST_NEWSLETTER_SUBSCRIBE_REQUEST, postNewsletterSubscribe);
}
