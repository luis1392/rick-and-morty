import { combineReducers } from "redux";

import characterReducer from "./characterReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  characterReducer,
  searchReducer,
});
