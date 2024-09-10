import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import aboutReducer from "./aboutReducer";
import faqReducer from "./faqReducer";
import donateReducer from "./donateReducer";
import contactReducer from "./contactReducer";
import jobReducer from "./jobReducer";
export default combineReducers({
  home: homeReducer,
  about: aboutReducer,
  faq: faqReducer,
  donate: donateReducer,
  contact: contactReducer,
  job: jobReducer
});
