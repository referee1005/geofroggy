import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchSiteInfoSuccess,
  fetchSiteInfoFailure
} from "../../actions/about";
import { FETCH_SITE_INFO_REQUEST } from "../../actions/types";
import { fetchSiteInfoData } from "../../api"; // Assuming you have an API module to handle your requests

function* fetchSiteInfo() {
  try {
    const response = yield call(fetchSiteInfoData);
    yield put(fetchSiteInfoSuccess(response));
  } catch (error) {
    yield put(fetchSiteInfoFailure(error.message));
  }
}

export function* aboutSaga() {
  yield takeLatest(FETCH_SITE_INFO_REQUEST, fetchSiteInfo);
}
