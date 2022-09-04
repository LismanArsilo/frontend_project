import * as ActionType from "../constants/UserSetting";
// Get All
export const GetUserRequest = () => ({
  type: ActionType.GET_USER_REQUEST,
});
export const GetUserSuccess = (payload) => ({
  type: ActionType.GET_USER_SUCCESS,
  payload,
});
export const GetUserFailed = (payload) => ({
  type: ActionType.GET_USER_FAILED,
  payload,
});
// Get One
export const GetOneUserRequest = (payload) => ({
  type: ActionType.GET_ONE_USER_REQUEST,
  payload,
});
export const GetOneUserSuccess = (payload) => ({
  type: ActionType.GET_ONE_USER_SUCCESS,
  payload,
});
export const GetOneUserFailed = (payload) => ({
  type: ActionType.GET_ONE_USER_FAILED,
  payload,
});
