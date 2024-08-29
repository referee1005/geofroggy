import { all } from "redux-saga/effects";
import { homeSaga } from "./home";
import { aboutSaga } from "./about";
import { faqSaga } from "./faq";
export default function* rootSaga() {
  yield all([homeSaga(), aboutSaga(), faqSaga()]);
}
