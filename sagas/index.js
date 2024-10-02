import { all } from "redux-saga/effects";
import { homeSaga } from "./home";
import { aboutSaga } from "./about";
import { faqSaga } from "./faq";
import { donateSaga } from "./donate";
import { contactSaga } from "./contact";
import { jobSaga } from "./job";
import { newsSaga } from "./news";
export default function* rootSaga() {
  yield all([
    homeSaga(),
    aboutSaga(),
    faqSaga(),
    donateSaga(),
    contactSaga(),
    jobSaga(),
    newsSaga()
  ]);
}
