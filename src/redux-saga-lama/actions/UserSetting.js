import * as ActionType from "../constants/UserSetting";

// Get Table
export const GetUserRoleRequest = (payload) => ({
  type: ActionType.GET_USER_ROLE_REQUEST,
  payload,
});
export const GetUserRoleSuccess = (payload) => ({
  type: ActionType.GET_USER_ROLE_SUCCESS,
  payload,
});
export const GetUserRoleFailed = (payload) => ({
  type: ActionType.GET_USER_ROLE_FAILED,
  payload,
});

export const GetUserRequest = (payload) => ({
  type: ActionType.GET_USER_REQUEST,
  payload,
});
export const GetUserSuccess = (payload) => ({
  type: ActionType.GET_USER_SUCCESS,
  payload,
});
export const GetUserFailed = (payload) => ({
  type: ActionType.GET_USER_FAILED,
  payload,
});

export const GetUserEmailRequest = (payload) => ({
  type: ActionType.GET_USER_EMAIL_REQUEST,
  payload,
});
export const GetUserEmailSuccess = (payload) => ({
  type: ActionType.GET_USER_EMAIL_SUCCESS,
  payload,
});
export const GetUserEmailFailed = (payload) => ({
  type: ActionType.GET_USER_EMAIL_FAILED,
  payload,
});

export const GetUserPhoneRequest = (payload) => ({
  type: ActionType.GET_USER_PHONE_REQUEST,
  payload,
});
export const GetUserPhoneSuccess = (payload) => ({
  type: ActionType.GET_USER_PHONE_SUCCESS,
  payload,
});
export const GetUserPhoneFailed = (payload) => ({
  type: ActionType.GET_USER_PHONE_FAILED,
  payload,
});

export const GetUserAddressRequest = (payload) => ({
  type: ActionType.GET_USER_ADDRESS_REQUEST,
  payload,
});
export const GetUserAddressSuccess = (payload) => ({
  type: ActionType.GET_USER_ADDRESS_SUCCESS,
  payload,
});
export const GetUserAddressFailed = (payload) => ({
  type: ActionType.GET_USER_ADDRESS_FAILED,
  payload,
});

export const GetUserEducationRequest = (payload) => ({
  type: ActionType.GET_USER_EDUCATION_REQUEST,
  payload,
});
export const GetUserEducationSuccess = (payload) => ({
  type: ActionType.GET_USER_EDUCATION_SUCCESS,
  payload,
});
export const GetUserEducationFailed = (payload) => ({
  type: ActionType.GET_USER_EDUCATION_FAILED,
  payload,
});

export const GetUserExperienceRequest = (payload) => ({
  type: ActionType.GET_USER_EXPERIENCE_REQUEST,
  payload,
});
export const GetUserExperienceSuccess = (payload) => ({
  type: ActionType.GET_USER_EXPERIENCE_SUCCESS,
  payload,
});
export const GetUserExperienceFailed = (payload) => ({
  type: ActionType.GET_USER_EXPERIENCE_FAILED,
  payload,
});

export const GetUserSkillRequest = (payload) => ({
  type: ActionType.GET_USER_SKILL_REQUEST,
  payload,
});
export const GetUserSkillSuccess = (payload) => ({
  type: ActionType.GET_USER_SKILL_SUCCESS,
  payload,
});
export const GetUserSkillFailed = (payload) => ({
  type: ActionType.GET_USER_SKILL_FAILED,
  payload,
});

// DropDown
export const GetUserCityRequest = () => ({
  type: ActionType.GET_CITY_REQUEST,
});
export const GetUserCitySuccess = (payload) => ({
  type: ActionType.GET_CITY_SUCCESS,
  payload,
});
export const GetUserCityFailed = (payload) => ({
  type: ActionType.GET_CITY_FAILED,
  payload,
});
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
export const GetLineAddressRequest = () => ({
  type: ActionType.GET_ADDRESS_REQUEST,
});
export const GetLineAddressSuccess = (payload) => ({
  type: ActionType.GET_ADDRESS_SUCCESS,
  payload,
});
export const GetLineAddressFailed = (payload) => ({
  type: ActionType.GET_ADDRESS_FAILED,
  payload,
});
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

// Deleted Table
export const DelUserEmailRequest = (payload, email) => ({
  type: ActionType.DEL_EMAIL_REQUEST,
  payload,
  email,
});
export const DelUserEmailSuccess = (payload, email) => ({
  type: ActionType.DEL_EMAIL_SUCCESS,
  payload,
  email,
});
export const DelUserEmailFailed = (payload, email) => ({
  type: ActionType.DEL_EMAIL_FAILED,
  payload,
  email,
});

export const DelUserAddressRequest = (payload, address) => ({
  type: ActionType.DEL_ADDRESS_REQUEST,
  payload,
  address,
});
export const DelUserAddressSuccess = (payload, address) => ({
  type: ActionType.DEL_ADDRESS_SUCCESS,
  payload,
  address,
});

export const DelUserAddressFailed = (payload, address) => ({
  type: ActionType.DEL_ADDRESS_FAILED,
  payload,
  address,
});

export const DelUserPhoneRequest = (payload, phone) => ({
  type: ActionType.DEL_PHONE_REQUEST,
  payload,
  phone,
});
export const DelUserPhoneSuccess = (payload, phone) => ({
  type: ActionType.DEL_PHONE_SUCCESS,
  payload,
  phone,
});
export const DelUserPhoneFailed = (payload, phone) => ({
  type: ActionType.DEL_PHONE_FAILED,
  payload,
  phone,
});

export const DelUserEducationRequest = (payload, education) => ({
  type: ActionType.DEL_EDUCATION_REQUEST,
  payload,
  education,
});
export const DelUserEducationSuccess = (payload, education) => ({
  type: ActionType.DEL_EDUCATION_SUCCESS,
  payload,
  education,
});
export const DelUserEducationFailed = (payload, education) => ({
  type: ActionType.DEL_EDUCATION_FAILED,
  payload,
  education,
});

export const DelUserExperienceRequest = (payload, experience) => ({
  type: ActionType.DEL_EXPERIENCE_REQUEST,
  payload,
  experience,
});
export const DelUserExperienceSuccess = (payload, experience) => ({
  type: ActionType.DEL_EXPERIENCE_SUCCESS,
  payload,
  experience,
});
export const DelUserExperienceFailed = (payload, experience) => ({
  type: ActionType.DEL_EXPERIENCE_FAILED,
  payload,
  experience,
});

export const DelUserSkillRequest = (payload, skill) => ({
  type: ActionType.DEL_SKILL_REQUEST,
  payload,
  skill,
});
export const DelUserSkillSuccess = (payload, skill) => ({
  type: ActionType.DEL_SKILL_SUCCESS,
  payload,
  skill,
});
export const DelUserSkillFailed = (payload, skill) => ({
  type: ActionType.DEL_SKILL_FAILED,
  payload,
  skill,
});

// Create Table
export const AddUserEmailRequest = (payload) => ({
  type: ActionType.ADD_EMAIL_REQUEST,
  payload,
});
export const AddUserEmailSuccess = (payload) => ({
  type: ActionType.ADD_EMAIL_SUCCESS,
  payload,
});
export const AddUserEmailFailed = (payload) => ({
  type: ActionType.ADD_EMAIL_FAILED,
  payload,
});
export const AddUserPhoneRequest = (payload) => ({
  type: ActionType.ADD_PHONE_REQUEST,
  payload,
});
export const AddUserPhoneSuccess = (payload) => ({
  type: ActionType.ADD_PHONE_SUCCESS,
  payload,
});
export const AddUserPhoneFailed = (payload) => ({
  type: ActionType.ADD_PHONE_FAILED,
  payload,
});
export const AddUserAddressRequest = (payload) => ({
  type: ActionType.ADD_ADDRESS_REQUEST,
  payload,
});
export const AddUserAddressSuccess = (payload) => ({
  type: ActionType.ADD_ADDRESS_SUCCESS,
  payload,
});
export const AddUserAddressFailed = (payload) => ({
  type: ActionType.ADD_ADDRESS_FAILED,
  payload,
});
export const AddUserLineAddressRequest = (payload) => ({
  type: ActionType.ADD_ADDRESS_REQUEST,
  payload,
});
export const AddUserLineAddressSuccess = (payload) => ({
  type: ActionType.ADD_ADDRESS_SUCCESS,
  payload,
});
export const AddUserLineAddressFailed = (payload) => ({
  type: ActionType.ADD_ADDRESS_FAILED,
  payload,
});
export const AddUserEducationRequest = (payload) => ({
  type: ActionType.ADD_EDUCATION_REQUEST,
  payload,
});
export const AddUserEducationSuccess = (payload) => ({
  type: ActionType.ADD_EDUCATION_SUCCESS,
  payload,
});
export const AddUserEducationFailed = (payload) => ({
  type: ActionType.ADD_EDUCATION_FAILED,
  payload,
});
export const AddUserExperienceRequest = (payload) => ({
  type: ActionType.ADD_EXPERIENCE_REQUEST,
  payload,
});
export const AddUserExperienceSuccess = (payload) => ({
  type: ActionType.ADD_EXPERIENCE_SUCCESS,
  payload,
});
export const AddUserExperienceFailed = (payload) => ({
  type: ActionType.ADD_EXPERIENCE_FAILED,
  payload,
});
export const AddUserSkillRequest = (payload) => ({
  type: ActionType.ADD_SKILL_REQUEST,
  payload,
});
export const AddUserSkillSuccess = (payload) => ({
  type: ActionType.ADD_SKILL_SUCCESS,
  payload,
});
export const AddUserSkillFailed = (payload) => ({
  type: ActionType.ADD_SKILL_FAILED,
  payload,
});
// Update Tabel
export const GetOneUserExperienceRequest = (payload, experience) => ({
  type: ActionType.GETONE_USER_EXPERIENCE_REQUEST,
  payload,
  experience,
});
export const GetOneUserExperienceSuccess = (payload) => ({
  type: ActionType.GETONE_USER_EXPERIENCE_SUCCESS,
  payload,
});
export const GetOneUserExperienceFailed = (payload, experience) => ({
  type: ActionType.GETONE_USER_EXPERIENCE_FAILED,
  payload,
  experience,
});

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
