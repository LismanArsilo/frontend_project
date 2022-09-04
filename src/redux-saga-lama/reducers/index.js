import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import UserSettingReducer from "./UserSettingReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  userSettingState: UserSettingReducer,
});

export default rootReducer;
