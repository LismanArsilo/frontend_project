import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeUser from "../constants/User";
// import * as ActionTypeUserSetting from "../constants/UserSetting";
// import * as ActionTypeExperience from "../constants/UserExperience";
import * as ActionTypeAddress from "../constants/UserAddress";
import * as ActionTypeDrop from "../constants/UserDrop";
import * as ActionTypeMaster from "../constants/MasterSetting";

import { handleSignup, handleSignin, handleSignout } from "./UserSaga";
// import { handleGetUser, handleGetOneUser } from "./UserSettingMiddle";
// import {
//   handleAddExperience,
//   handleDelExperience,
//   handleEditExperience,
//   handleGetExperience,
//   handleGetExperienceSuper,
//   handleGetOneExperience,
// } from "./UserExperineceMiddle";
import {
  handleGetCity,
  handleGetAddressType,
  handleGetPhoneType,
  handleGetSkillType,
} from "./UserDrop";
import {
  // User
  handleGetUser,
  handleGetOneUser,
  // Experience
  handleAddExperience,
  handleDelExperience,
  handleEditExperience,
  handleGetExperience,
  handleGetExperienceSuper,
  handleGetOneExperience,
  // Email
  handleAddEmail,
  handleDelEmail,
  handleEditEmail,
  handleGetEmail,
  handleGetEmailSuper,
  handleGetOneEmail,
  // phone
  handleAddPhone,
  handleDelPhone,
  handleEditPhone,
  handleGetPhone,
  handleGetPhoneSuper,
  handleGetOnePhone,
  // Skill
  handleAddSkill,
  handleDelSkill,
  handleGetSkill,
  handleGetSkillSuper,
  handleGetOneSkill,
  // Address
  handleAddAddress,
  handleDelAddress,
  handleEditAddress,
  handleGetAddress,
  handleGetAddressSuper,
  handleGetOneAddress,
  // Education
  handleAddEducation,
  handleDelEducation,
  handleEditEducation,
  handleGetEducation,
  handleGetEducationSuper,
  handleGetOneEducation,
} from "./MasterSetting";

function* watchAll() {
  yield all([
    // Drop
    takeEvery(ActionTypeDrop.GET_CITY_REQUEST, handleGetCity),
    takeEvery(ActionTypeDrop.GET_ADDRESS_TYPE_REQUEST, handleGetAddressType),
    takeEvery(ActionTypeDrop.GET_PHONE_TYPE_REQUEST, handleGetPhoneType),
    takeEvery(ActionTypeDrop.GET_SKILL_TYPE_REQUEST, handleGetSkillType),
    // UserLogin
    takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.GET_SIGNOUT_REQUEST, handleSignout),
    // Drop
    // takeEvery(ActionTypeDrop.GET_CITY_REQUEST, handleGetCity),
    // takeEvery(ActionTypeUserSetting.GET_USER_REQUEST, handleGetUser),
    // takeEvery(ActionTypeUserSetting.GET_ONE_USER_REQUEST, handleGetOneUser),
    // // Experience
    // takeEvery(
    //   ActionTypeExperience.GET_EXPERIENCE_SUPER_REQUEST,
    //   handleGetExperienceSuper
    // ),
    // takeEvery(ActionTypeExperience.GET_EXPERIENCE_REQUEST, handleGetExperience),
    // takeEvery(
    //   ActionTypeExperience.GET_ONE_EXPERIENCE_REQUEST,
    //   handleGetOneExperience
    // ),
    // takeEvery(ActionTypeExperience.ADD_EXPERIENCE_REQUEST, handleAddExperience),
    // takeEvery(
    //   ActionTypeExperience.EDIT_EXPERIENCE_REQUEST,
    //   handleEditExperience
    // ),
    // takeEvery(ActionTypeExperience.DEL_EXPERIENCE_REQUEST, handleDelExperience),
    // // Address
    // takeEvery(
    //   ActionTypeAddress.GET_ADDRESS_SUPER_REQUEST,
    //   handleGetAddressSuper
    // ),
    // takeEvery(ActionTypeAddress.GET_ADDRESS_REQUEST, handleGetAddress),
    // takeEvery(ActionTypeAddress.GET_ONE_ADDRESS_REQUEST, handleGetOneAddress),
    // takeEvery(ActionTypeAddress.ADD_ADDRESS_REQUEST, handleAddAddress),
    // takeEvery(ActionTypeAddress.EDIT_ADDRESS_REQUEST, handleEditAddress),
    // takeEvery(ActionTypeAddress.DEL_ADDRESS_REQUEST, handleDelAddress),
    // City & User
    takeEvery(ActionTypeMaster.GET_USER_REQUEST, handleGetUser),
    takeEvery(ActionTypeMaster.GET_ONE_USER_REQUEST, handleGetOneUser),
    // Phone
    takeEvery(ActionTypeMaster.GET_PHONE_SUPER_REQUEST, handleGetPhoneSuper),
    takeEvery(ActionTypeMaster.GET_PHONE_REQUEST, handleGetPhone),
    takeEvery(ActionTypeMaster.GET_ONE_PHONE_REQUEST, handleGetOnePhone),
    takeEvery(ActionTypeMaster.ADD_PHONE_REQUEST, handleAddPhone),
    takeEvery(ActionTypeMaster.EDIT_PHONE_REQUEST, handleEditPhone),
    takeEvery(ActionTypeMaster.DEL_PHONE_REQUEST, handleDelPhone),
    // Email
    takeEvery(ActionTypeMaster.GET_EMAIL_SUPER_REQUEST, handleGetEmailSuper),
    takeEvery(ActionTypeMaster.GET_EMAIL_REQUEST, handleGetEmail),
    takeEvery(ActionTypeMaster.GET_ONE_EMAIL_REQUEST, handleGetOneEmail),
    takeEvery(ActionTypeMaster.ADD_EMAIL_REQUEST, handleAddEmail),
    takeEvery(ActionTypeMaster.EDIT_EMAIL_REQUEST, handleEditEmail),
    takeEvery(ActionTypeMaster.DEL_EMAIL_REQUEST, handleDelEmail),
    // Skill
    takeEvery(ActionTypeMaster.GET_SKILL_SUPER_REQUEST, handleGetSkillSuper),
    takeEvery(ActionTypeMaster.GET_SKILL_REQUEST, handleGetSkill),
    takeEvery(ActionTypeMaster.GET_ONE_SKILL_REQUEST, handleGetOneSkill),
    takeEvery(ActionTypeMaster.ADD_SKILL_REQUEST, handleAddSkill),
    takeEvery(ActionTypeMaster.DEL_SKILL_REQUEST, handleDelSkill),
    // Experience
    takeEvery(
      ActionTypeMaster.GET_EXPERIENCE_SUPER_REQUEST,
      handleGetExperienceSuper
    ),
    takeEvery(ActionTypeMaster.GET_EXPERIENCE_REQUEST, handleGetExperience),
    takeEvery(
      ActionTypeMaster.GET_ONE_EXPERIENCE_REQUEST,
      handleGetOneExperience
    ),
    takeEvery(ActionTypeMaster.ADD_EXPERIENCE_REQUEST, handleAddExperience),
    takeEvery(ActionTypeMaster.EDIT_EXPERIENCE_REQUEST, handleEditExperience),
    takeEvery(ActionTypeMaster.DEL_EXPERIENCE_REQUEST, handleDelExperience),
    // Address
    takeEvery(
      ActionTypeMaster.GET_ADDRESS_SUPER_REQUEST,
      handleGetAddressSuper
    ),
    takeEvery(ActionTypeMaster.GET_ADDRESS_REQUEST, handleGetAddress),
    takeEvery(ActionTypeMaster.GET_ONE_ADDRESS_REQUEST, handleGetOneAddress),
    takeEvery(ActionTypeMaster.ADD_ADDRESS_REQUEST, handleAddAddress),
    takeEvery(ActionTypeMaster.EDIT_ADDRESS_REQUEST, handleEditAddress),
    takeEvery(ActionTypeMaster.DEL_ADDRESS_REQUEST, handleDelAddress),
    // Education
    takeEvery(
      ActionTypeMaster.GET_EDUCATION_SUPER_REQUEST,
      handleGetEducationSuper
    ),
    takeEvery(ActionTypeMaster.GET_EDUCATION_REQUEST, handleGetEducation),
    takeEvery(
      ActionTypeMaster.GET_ONE_EDUCATION_REQUEST,
      handleGetOneEducation
    ),
    takeEvery(ActionTypeMaster.ADD_EDUCATION_REQUEST, handleAddEducation),
    takeEvery(ActionTypeMaster.EDIT_EDUCATION_REQUEST, handleEditEducation),
    takeEvery(ActionTypeMaster.DEL_EDUCATION_REQUEST, handleDelEducation),
  ]);
}
export default watchAll;
