import * as ActionType from "../constants/UserDrop";
// Get All City
export const GetCityRequest = () => ({
  type: ActionType.GET_CITY_REQUEST,
});
export const GetCitySuccess = (payload) => ({
  type: ActionType.GET_CITY_SUCCESS,
  payload,
});
export const GetCityFailed = (payload) => ({
  type: ActionType.GET_CITY_FAILED,
  payload,
});
//
// Get All AddressType
export const GetAddressTypeRequest = () => ({
  type: ActionType.GET_ADDRESS_TYPE_REQUEST,
});
export const GetAddressTypeSuccess = (payload) => ({
  type: ActionType.GET_ADDRESS_TYPE_SUCCESS,
  payload,
});
export const GetAddressTypeFailed = (payload) => ({
  type: ActionType.GET_ADDRESS_TYPE_FAILED,
  payload,
});
// Get All PhoneType
// Get All
export const GetPhoneTypeRequest = () => ({
  type: ActionType.GET_PHONE_TYPE_REQUEST,
});
export const GetPhoneTypeSuccess = (payload) => ({
  type: ActionType.GET_PHONE_TYPE_SUCCESS,
  payload,
});
export const GetPhoneTypeFailed = (payload) => ({
  type: ActionType.GET_PHONE_TYPE_FAILED,
  payload,
});
// Get All SkillType
// Get All
export const GetSkillTypeRequest = () => ({
  type: ActionType.GET_SKILL_TYPE_REQUEST,
});
export const GetSkillTypeSuccess = (payload) => ({
  type: ActionType.GET_SKILL_TYPE_SUCCESS,
  payload,
});
export const GetSkillTypeFailed = (payload) => ({
  type: ActionType.GET_SKILL_TYPE_FAILED,
  payload,
});
