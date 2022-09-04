import * as ActionType from "../constants/UserSetting";

const INIT_STATE = {
  users: [],
  user: [],
};

const userSettingReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_USER_REQUEST:
      return { ...state };
    case ActionType.GET_USER_SUCCESS:
      return GetUsersSuccedd(state, action);
    case ActionType.GET_ONE_USER_REQUEST:
      return { ...state };
    case ActionType.GET_ONE_USER_SUCCESS:
      return GetOneUserSuccedd(state, action);
    default:
      return { ...state };
  }
};

const GetUsersSuccedd = (state, action) => {
  return {
    ...state,
    users: action.payload,
  };
};
const GetOneUserSuccedd = (state, action) => {
  return {
    ...state,
    user: action.payload,
  };
};

export default userSettingReducer;
