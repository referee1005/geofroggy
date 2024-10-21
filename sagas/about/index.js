import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchSiteInfoSuccess,
  fetchSiteInfoFailure,
  fetchAboutAdvertSuccess,
  fetchAboutAdvertFailure
} from "../../actions/about";
import {
  FETCH_SITE_INFO_REQUEST,
  FETCH_ABOUT_ADVERT_REQUEST
} from "../../actions/types";
import { fetchSiteInfoData, fetchAboutAdvertData } from "../../api"; // Assuming you have an API module to handle your requests

function* fetchSiteInfo() {
  try {
    const response = yield call(fetchSiteInfoData);
    yield put(fetchSiteInfoSuccess(response));
  } catch (error) {
    yield put(fetchSiteInfoFailure(error.message));
  }
}

function* fetchAdvert() {
  try {
    const response = yield call(fetchAboutAdvertData);
    yield put(fetchAboutAdvertSuccess(response));
  } catch (error) {
    yield put(fetchAboutAdvertFailure(error.message));
  }
}
export function* aboutSaga() {
  yield takeLatest(FETCH_SITE_INFO_REQUEST, fetchSiteInfo);
  yield takeLatest(FETCH_ABOUT_ADVERT_REQUEST, fetchAdvert);
}
