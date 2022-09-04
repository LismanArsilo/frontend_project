import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeUser from "../constants/User";
import * as ActionTypeSetting from "../constants/UserSetting";

import { handleSignup, handleSignin, handleSignout } from "./UserSaga";
import {
  handleGetRole,
  handleGetUser,
  handleGetEmail,
  handleGetPhone,
  handleGetAddress,
  handleGetEducation,
  handleGetExperience,
  handleGetSkill,
  handleGetCity,
  handleGetPhoneType,
  handleGetAddressType,
  handleGetSkillType,
  handleGetLineAddress,
  handleDelUserEmail,
  handleDelUserPhone,
  handleDelUserAddress,
  handleDelUserEducation,
  handleDelUserExperience,
  handleDelUserSkill,
  handleAddUserSkill,
  handleAddUserExperience,
  handleAddUserEducation,
  handleAddUserAddress,
  handleAddUserPhone,
  handleAddUserEmail,
  handleEditExperience,
  handleGetOneExperience,
} from "./UserSetting";

function* watchAll() {
  yield all([
    takeEvery(ActionTypeSetting.EDIT_EXPERIENCE_REQUEST, handleEditExperience),
    takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.GET_SIGNOUT_REQUEST, handleSignout),
    takeEvery(ActionTypeSetting.GET_USER_ROLE_REQUEST, handleGetRole),
    takeEvery(ActionTypeSetting.GET_USER_REQUEST, handleGetUser),
    takeEvery(ActionTypeSetting.GET_USER_EMAIL_REQUEST, handleGetEmail),
    takeEvery(ActionTypeSetting.GET_USER_PHONE_REQUEST, handleGetPhone),
    takeEvery(ActionTypeSetting.GET_USER_ADDRESS_REQUEST, handleGetAddress),
    takeEvery(ActionTypeSetting.GET_USER_EDUCATION_REQUEST, handleGetEducation),
    takeEvery(
      ActionTypeSetting.GET_USER_EXPERIENCE_REQUEST,
      handleGetExperience
    ),
    takeEvery(ActionTypeSetting.GET_USER_SKILL_REQUEST, handleGetSkill),
    takeEvery(ActionTypeSetting.GET_CITY_REQUEST, handleGetCity),
    takeEvery(ActionTypeSetting.GET_PHONE_TYPE_REQUEST, handleGetPhoneType),
    takeEvery(ActionTypeSetting.GET_ADDRESS_TYPE_REQUEST, handleGetAddressType),
    takeEvery(ActionTypeSetting.GET_SKILL_TYPE_REQUEST, handleGetSkillType),
    takeEvery(ActionTypeSetting.GET_ADDRESS_REQUEST, handleGetLineAddress),
    takeEvery(ActionTypeSetting.DEL_EMAIL_REQUEST, handleDelUserEmail),
    takeEvery(ActionTypeSetting.DEL_PHONE_REQUEST, handleDelUserPhone),
    takeEvery(ActionTypeSetting.DEL_ADDRESS_REQUEST, handleDelUserAddress),
    takeEvery(ActionTypeSetting.DEL_EDUCATION_REQUEST, handleDelUserEducation),
    takeEvery(
      ActionTypeSetting.DEL_EXPERIENCE_REQUEST,
      handleDelUserExperience
    ),
    takeEvery(ActionTypeSetting.DEL_SKILL_REQUEST, handleDelUserSkill),
    takeEvery(ActionTypeSetting.ADD_SKILL_REQUEST, handleAddUserSkill),
    takeEvery(
      ActionTypeSetting.ADD_EXPERIENCE_REQUEST,
      handleAddUserExperience
    ),
    takeEvery(ActionTypeSetting.ADD_EDUCATION_REQUEST, handleAddUserEducation),
    takeEvery(ActionTypeSetting.ADD_ADDRESS_REQUEST, handleAddUserAddress),
    takeEvery(ActionTypeSetting.ADD_PHONE_REQUEST, handleAddUserPhone),
    takeEvery(ActionTypeSetting.ADD_EMAIL_REQUEST, handleAddUserEmail),
    takeEvery(
      ActionTypeSetting.GETONE_USER_EXPERIENCE_REQUEST,
      handleGetOneExperience
    ),
  ]);
}

export default watchAll;
