import * as ActionType from "../constants/MasterSetting";
// User
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

// Email
// Super
export const GetEmailSuperRequest = () => ({
  type: ActionType.GET_EMAIL_SUPER_REQUEST,
});
export const GetEmailSuperSuccess = (payload) => ({
  type: ActionType.GET_EMAIL_SUPER_SUCCESS,
  payload,
});
export const GetEmailSuperFailed = (payload) => ({
  type: ActionType.GET_EMAIL_SUPER_FAILED,
  payload,
});
// Get All
export const GetEmailRequest = (payload) => ({
  type: ActionType.GET_EMAIL_REQUEST,
  payload,
});
export const GetEmailSuccess = (payload) => ({
  type: ActionType.GET_EMAIL_SUCCESS,
  payload,
});
export const GetEmailFailed = (payload) => ({
  type: ActionType.GET_EMAIL_FAILED,
  payload,
});
// Get One
export const GetOneEmailRequest = (payload, email) => ({
  type: ActionType.GET_ONE_EMAIL_REQUEST,
  payload,
  email,
});
export const GetOneEmailSuccess = (payload, email) => ({
  type: ActionType.GET_ONE_EMAIL_SUCCESS,
  payload,
  email,
});
export const GetOneEmailFailed = (payload, email) => ({
  type: ActionType.GET_ONE_EMAIL_FAILED,
  payload,
  email,
});
// Edit
export const EditEmailRequest = (payload) => ({
  type: ActionType.EDIT_EMAIL_REQUEST,
  payload,
});
export const EditEmailSuccess = (payload) => ({
  type: ActionType.EDIT_EMAIL_SUCCESS,
  payload,
});
export const EditEmailFailed = (payload) => ({
  type: ActionType.EDIT_EMAIL_FAILED,
  payload,
});
// Create
export const AddEmailRequest = (payload) => ({
  type: ActionType.ADD_EMAIL_REQUEST,
  payload,
});
export const AddEmailSuccess = (payload) => ({
  type: ActionType.ADD_EMAIL_SUCCESS,
  payload,
});
export const AddEmailFailed = (payload) => ({
  type: ActionType.ADD_EMAIL_FAILED,
  payload,
});
export const DelEmailRequest = (payload) => ({
  type: ActionType.DEL_EMAIL_REQUEST,
  payload,
});
export const DelEmailSuccess = (payload) => ({
  type: ActionType.DEL_EMAIL_SUCCESS,
  payload,
});
export const DelEmailFailed = (payload) => ({
  type: ActionType.DEL_EMAIL_FAILED,
  payload,
});

//Phone
// Super
export const GetPhoneSuperRequest = () => ({
  type: ActionType.GET_PHONE_SUPER_REQUEST,
});
export const GetPhoneSuperSuccess = (payload) => ({
  type: ActionType.GET_PHONE_SUPER_SUCCESS,
  payload,
});
export const GetPhoneSuperFailed = (payload) => ({
  type: ActionType.GET_PHONE_SUPER_FAILED,
  payload,
});
// Get All
export const GetPhoneRequest = (payload) => ({
  type: ActionType.GET_PHONE_REQUEST,
  payload,
});
export const GetPhoneSuccess = (payload) => ({
  type: ActionType.GET_PHONE_SUCCESS,
  payload,
});
export const GetPhoneFailed = (payload) => ({
  type: ActionType.GET_PHONE_FAILED,
  payload,
});
// Get One
export const GetOnePhoneRequest = (payload, phone) => ({
  type: ActionType.GET_ONE_PHONE_REQUEST,
  payload,
  phone,
});
export const GetOnePhoneSuccess = (payload, phone) => ({
  type: ActionType.GET_ONE_PHONE_SUCCESS,
  payload,
  phone,
});
export const GetOnePhoneFailed = (payload, phone) => ({
  type: ActionType.GET_ONE_PHONE_FAILED,
  payload,
  phone,
});
// Edit
export const EditPhoneRequest = (payload) => ({
  type: ActionType.EDIT_PHONE_REQUEST,
  payload,
});
export const EditPhoneSuccess = (payload) => ({
  type: ActionType.EDIT_PHONE_SUCCESS,
  payload,
});
export const EditPhoneFailed = (payload) => ({
  type: ActionType.EDIT_PHONE_FAILED,
  payload,
});
// Create
export const AddPhoneRequest = (payload) => ({
  type: ActionType.ADD_PHONE_REQUEST,
  payload,
});
export const AddPhoneSuccess = (payload) => ({
  type: ActionType.ADD_PHONE_SUCCESS,
  payload,
});
export const AddPhoneFailed = (payload) => ({
  type: ActionType.ADD_PHONE_FAILED,
  payload,
});
export const DelPhoneRequest = (payload) => ({
  type: ActionType.DEL_PHONE_REQUEST,
  payload,
});
export const DelPhoneSuccess = (payload) => ({
  type: ActionType.DEL_PHONE_SUCCESS,
  payload,
});
export const DelPhoneFailed = (payload) => ({
  type: ActionType.DEL_PHONE_FAILED,
  payload,
});

// City
// Get All
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
// Education
// Super
export const GetEducationSuperRequest = () => ({
  type: ActionType.GET_EDUCATION_SUPER_REQUEST,
});
export const GetEducationSuperSuccess = (payload) => ({
  type: ActionType.GET_EDUCATION_SUPER_SUCCESS,
  payload,
});
export const GetEducationSuperFailed = (payload) => ({
  type: ActionType.GET_EDUCATION_SUPER_FAILED,
  payload,
});
// Get All
export const GetEducationRequest = (payload) => ({
  type: ActionType.GET_EDUCATION_REQUEST,
  payload,
});
export const GetEducationSuccess = (payload) => ({
  type: ActionType.GET_EDUCATION_SUCCESS,
  payload,
});
export const GetEducationFailed = (payload) => ({
  type: ActionType.GET_EDUCATION_FAILED,
  payload,
});
// Get One
export const GetOneEducationRequest = (payload, education) => ({
  type: ActionType.GET_ONE_EDUCATION_REQUEST,
  payload,
  education,
});
export const GetOneEducationSuccess = (payload, education) => ({
  type: ActionType.GET_ONE_EDUCATION_SUCCESS,
  payload,
  education,
});
export const GetOneEducationFailed = (payload, education) => ({
  type: ActionType.GET_ONE_EDUCATION_FAILED,
  payload,
  education,
});
// Edit
export const EditEducationRequest = (payload) => ({
  type: ActionType.EDIT_EDUCATION_REQUEST,
  payload,
});
export const EditEducationSuccess = (payload) => ({
  type: ActionType.EDIT_EDUCATION_SUCCESS,
  payload,
});
export const EditEducationFailed = (payload) => ({
  type: ActionType.EDIT_EDUCATION_FAILED,
  payload,
});
// Create
export const AddEducationRequest = (payload) => ({
  type: ActionType.ADD_EDUCATION_REQUEST,
  payload,
});
export const AddEducationSuccess = (payload) => ({
  type: ActionType.ADD_EDUCATION_SUCCESS,
  payload,
});
export const AddEducationFailed = (payload) => ({
  type: ActionType.ADD_EDUCATION_FAILED,
  payload,
});
export const DelEducationRequest = (payload) => ({
  type: ActionType.DEL_EDUCATION_REQUEST,
  payload,
});
export const DelEducationSuccess = (payload) => ({
  type: ActionType.DEL_EDUCATION_SUCCESS,
  payload,
});
export const DelEducationFailed = (payload) => ({
  type: ActionType.DEL_EDUCATION_FAILED,
  payload,
});

//
// Address
// Super
export const GetAddressSuperRequest = () => ({
  type: ActionType.GET_ADDRESS_SUPER_REQUEST,
});
export const GetAddressSuperSuccess = (payload) => ({
  type: ActionType.GET_ADDRESS_SUPER_SUCCESS,
  payload,
});
export const GetAddressSuperFailed = (payload) => ({
  type: ActionType.GET_ADDRESS_SUPER_FAILED,
  payload,
});
// Get All
export const GetAddressRequest = (payload) => ({
  type: ActionType.GET_ADDRESS_REQUEST,
  payload,
});
export const GetAddressSuccess = (payload) => ({
  type: ActionType.GET_ADDRESS_SUCCESS,
  payload,
});
export const GetAddressFailed = (payload) => ({
  type: ActionType.GET_ADDRESS_FAILED,
  payload,
});
// Get One
export const GetOneAddressRequest = (payload, address) => ({
  type: ActionType.GET_ONE_ADDRESS_REQUEST,
  payload,
  address,
});
export const GetOneAddressSuccess = (payload, address) => ({
  type: ActionType.GET_ONE_ADDRESS_SUCCESS,
  payload,
  address,
});
export const GetOneAddressFailed = (payload, address) => ({
  type: ActionType.GET_ONE_ADDRESS_FAILED,
  payload,
  address,
});
// Edit
export const EditAddressRequest = (payload) => ({
  type: ActionType.EDIT_ADDRESS_REQUEST,
  payload,
});
export const EditAddressSuccess = (payload) => ({
  type: ActionType.EDIT_ADDRESS_SUCCESS,
  payload,
});
export const EditAddressFailed = (payload) => ({
  type: ActionType.EDIT_ADDRESS_FAILED,
  payload,
});
// Create
export const AddAddressRequest = (payload) => ({
  type: ActionType.ADD_ADDRESS_REQUEST,
  payload,
});
export const AddAddressSuccess = (payload) => ({
  type: ActionType.ADD_ADDRESS_SUCCESS,
  payload,
});
export const AddAddressFailed = (payload) => ({
  type: ActionType.ADD_ADDRESS_FAILED,
  payload,
});
export const DelAddressRequest = (payload) => ({
  type: ActionType.DEL_ADDRESS_REQUEST,
  payload,
});
export const DelAddressSuccess = (payload) => ({
  type: ActionType.DEL_ADDRESS_SUCCESS,
  payload,
});
export const DelAddressFailed = (payload) => ({
  type: ActionType.DEL_ADDRESS_FAILED,
  payload,
});

//
// Experience
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
export const GetOneExperienceRequest = (payload, experience) => ({
  type: ActionType.GET_ONE_EXPERIENCE_REQUEST,
  payload,
  experience,
});
export const GetOneExperienceSuccess = (payload, experience) => ({
  type: ActionType.GET_ONE_EXPERIENCE_SUCCESS,
  payload,
  experience,
});
export const GetOneExperienceFailed = (payload, experience) => ({
  type: ActionType.GET_ONE_EXPERIENCE_FAILED,
  payload,
  experience,
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
// Deleted
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

// Skill
// Super
export const GetSkillSuperRequest = () => ({
  type: ActionType.GET_SKILL_SUPER_REQUEST,
});
export const GetSkillSuperSuccess = (payload) => ({
  type: ActionType.GET_SKILL_SUPER_SUCCESS,
  payload,
});
export const GetSkillSuperFailed = (payload) => ({
  type: ActionType.GET_SKILL_SUPER_FAILED,
  payload,
});
// Get All
export const GetSkillRequest = (payload) => ({
  type: ActionType.GET_SKILL_REQUEST,
  payload,
});
export const GetSkillSuccess = (payload) => ({
  type: ActionType.GET_SKILL_SUCCESS,
  payload,
});
export const GetSkillFailed = (payload) => ({
  type: ActionType.GET_SKILL_FAILED,
  payload,
});
// Get One
export const GetOneSkillRequest = (payload, skill) => ({
  type: ActionType.GET_ONE_SKILL_REQUEST,
  payload,
  skill,
});
export const GetOneSkillSuccess = (payload, skill) => ({
  type: ActionType.GET_ONE_SKILL_SUCCESS,
  payload,
  skill,
});
export const GetOneSkillFailed = (payload, skill) => ({
  type: ActionType.GET_ONE_SKILL_FAILED,
  payload,
  skill,
});
// Create
export const AddSkillRequest = (payload) => ({
  type: ActionType.ADD_SKILL_REQUEST,
  payload,
});
export const AddSkillSuccess = (payload) => ({
  type: ActionType.ADD_SKILL_SUCCESS,
  payload,
});
export const AddSkillFailed = (payload) => ({
  type: ActionType.ADD_SKILL_FAILED,
  payload,
});
// Deleted
export const DelSkillRequest = (payload) => ({
  type: ActionType.DEL_SKILL_REQUEST,
  payload,
});
export const DelSkillSuccess = (payload) => ({
  type: ActionType.DEL_SKILL_SUCCESS,
  payload,
});
export const DelSkillFailed = (payload) => ({
  type: ActionType.DEL_SKILL_FAILED,
  payload,
});
