import * as ActionType from "../constants/UserExperience";
// Super
export const GetExperienceSuperRequest = () => ({
  type: ActionType.GET_EXPERIENCE_SUPER_REQUEST,
});
export const GetExperienceSuperSuccess = (payload) => ({
  type: ActionType.GET_EXPERIENCE_SUPER_SUCCESS,
  payload,
});
export const GetExperienceSuperFailed = (payload) => ({
  type: ActionType.GET_EXPERIENCE_SUPER_FAILED,
  payload,
});
// Get All
export const GetExperienceRequest = (payload) => ({
  type: ActionType.GET_EXPERIENCE_REQUEST,
  payload,
});
export const GetExperienceSuccess = (payload) => ({
  type: ActionType.GET_EXPERIENCE_SUCCESS,
  payload,
});
export const GetExperienceFailed = (payload) => ({
  type: ActionType.GET_EXPERIENCE_FAILED,
  payload,
});
// Get One
export const GetOneExperienceRequest = (payload) => ({
  type: ActionType.GET_ONE_EXPERIENCE_REQUEST,
  payload,
});
export const GetOneExperienceSuccess = (payload) => ({
  type: ActionType.GET_ONE_EXPERIENCE_SUCCESS,
  payload,
});
export const GetOneExperienceFailed = (payload) => ({
  type: ActionType.GET_ONE_EXPERIENCE_FAILED,
  payload,
});
// Edit
export const EditExperienceRequest = (payload) => ({
  type: ActionType.EDIT_EXPERIENCE_REQUEST,
  payload,
});
export const EditExperienceSuccess = (payload) => ({
  type: ActionType.EDIT_EXPERIENCE_SUCCESS,
  payload,
});
export const EditExperienceFailed = (payload) => ({
  type: ActionType.EDIT_EXPERIENCE_FAILED,
  payload,
});
// Create
export const AddExperienceRequest = (payload) => ({
  type: ActionType.ADD_EXPERIENCE_REQUEST,
  payload,
});
export const AddExperienceSuccess = (payload) => ({
  type: ActionType.ADD_EXPERIENCE_SUCCESS,
  payload,
});
export const AddExperienceFailed = (payload) => ({
  type: ActionType.ADD_EXPERIENCE_FAILED,
  payload,
});

export const DelExperienceRequest = (payload) => ({
  type: ActionType.DEL_EXPERIENCE_REQUEST,
  payload,
});
export const DelExperienceSuccess = (payload) => ({
  type: ActionType.DEL_EXPERIENCE_SUCCESS,
  payload,
});
export const DelExperienceFailed = (payload) => ({
  type: ActionType.DEL_EXPERIENCE_FAILED,
  payload,
});
