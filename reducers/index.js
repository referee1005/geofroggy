import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import aboutReducer from "./aboutReducer";
export default combineReducers({
  home: homeReducer,
  about: aboutReducer
});
