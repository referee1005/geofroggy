import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import aboutReducer from "./aboutReducer";
import faqReducer from "./faqReducer";
export default combineReducers({
  home: homeReducer,
  about: aboutReducer,
  faq: faqReducer
});
