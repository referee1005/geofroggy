import { combineReducers } from "redux";
import userReducer from "./userReducer";
import homeReducer from "./homeReducer";
import aboutReducer from "./aboutReducer";
import faqReducer from "./faqReducer";
import donateReducer from "./donateReducer";
import contactReducer from "./contactReducer";
import jobReducer from "./jobReducer";
import newsReducer from "./newsReducer";
import sponsorReducer from "./sponsorReducer";
export default combineReducers({
  home: homeReducer,
  about: aboutReducer,
  faq: faqReducer,
  donate: donateReducer,
  contact: contactReducer,
  job: jobReducer,
  news: newsReducer,
  user: userReducer,
  sponsor: sponsorReducer
});
