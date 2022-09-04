import { combineReducers } from "redux";
import userDropReducer from "./DropReducer";
import userExperienceReducer from "./ExperienceReducer";
import userMasterReducer from "./MasterReducer";
import userReducer from "./UserReducer";
import userSettingReducer from "./UserSettingReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  userSettingState: userSettingReducer,
  userExperienceState: userExperienceReducer,
  userDropState: userDropReducer,
  masterSettingState: userMasterReducer,
});

export default rootReducer;
