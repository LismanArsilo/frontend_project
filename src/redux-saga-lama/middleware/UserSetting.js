import { call, put } from "redux-saga/effects";
import apiSetting from "../../api/api-setting";

import {
  GetUserRoleSuccess,
  GetUserRoleFailed,
  GetUserSuccess,
  GetUserFailed,
  GetUserEmailSuccess,
  GetUserEmailFailed,
  GetUserPhoneSuccess,
  GetUserPhoneFailed,
  GetUserAddressSuccess,
  GetUserAddressFailed,
  GetUserEducationSuccess,
  GetUserEducationFailed,
  GetUserExperienceSuccess,
  GetUserExperienceFailed,
  GetUserSkillSuccess,
  GetUserSkillFailed,
  GetUserCitySuccess,
  GetUserCityFailed,
  GetPhoneTypeSuccess,
  GetPhoneTypeFailed,
  GetAddressTypeSuccess,
  GetAddressTypeFailed,
  GetSkillTypeSuccess,
  GetSkillTypeFailed,
  GetLineAddressSuccess,
  GetLineAddressFailed,
  DelUserSkillSuccess,
  DelUserSkillFailed,
  DelUserEmailSuccess,
  DelUserEmailFailed,
  DelUserPhoneSuccess,
  DelUserPhoneFailed,
  DelUserAddressSuccess,
  DelUserAddressFailed,
  DelUserEducationSuccess,
  DelUserEducationFailed,
  DelUserExperienceSuccess,
  DelUserExperienceFailed,
  AddUserSkillSuccess,
  AddUserSkillFailed,
  AddUserExperienceSuccess,
  AddUserExperienceFailed,
  AddUserEducationSuccess,
  AddUserEducationFailed,
  AddUserAddressSuccess,
  AddUserAddressFailed,
  AddUserPhoneSuccess,
  AddUserPhoneFailed,
  AddUserEmailSuccess,
  AddUserEmailFailed,
  // Edit
  EditExperienceSuccess,
  EditExperienceFailed,
  GetOneUserExperienceFailed,
  GetOneUserExperienceSuccess,
} from "../actions/UserSetting";

function* handleGetRole(action) {
  const { payload } = action;
  try {
    const result = yield call(apiSetting.findOneRole, payload);
    yield put(GetUserRoleSuccess(result));
  } catch (error) {
    yield put(GetUserRoleFailed(error));
  }
}
function* handleGetUser(action) {
  const { payload } = action;
  try {
    const result = yield call(apiSetting.findOneUser, payload);
    yield put(GetUserSuccess(result));
  } catch (error) {
    yield put(GetUserFailed(error));
  }
}
function* handleGetEmail(action) {
  const { payload } = action;
  try {
    const result = yield call(apiSetting.findOneEmail, payload);
    yield put(GetUserEmailSuccess(result));
  } catch (error) {
    yield put(GetUserEmailFailed(error));
  }
}
function* handleGetPhone(action) {
  const { payload } = action;
  try {
    const result = yield call(apiSetting.findOnePhone, payload);
    yield put(GetUserPhoneSuccess(result));
  } catch (error) {
    yield put(GetUserPhoneFailed(error));
  }
}
function* handleGetAddress(action) {
  const { payload } = action;
  try {
    const result = yield call(apiSetting.findOneAddress, payload);
    yield put(GetUserAddressSuccess(result));
  } catch (error) {
    yield put(GetUserAddressFailed(error));
  }
}
function* handleGetEducation(action) {
  const { payload } = action;
  try {
    const result = yield call(apiSetting.findOneEducation, payload);
    yield put(GetUserEducationSuccess(result));
  } catch (error) {
    yield put(GetUserEducationFailed(error));
  }
}
function* handleGetExperience(action) {
  const { payload } = action;
  try {
    const result = yield call(apiSetting.findOneExperience, payload);
    yield put(GetUserExperienceSuccess(result));
  } catch (error) {
    yield put(GetUserExperienceFailed(error));
  }
}
function* handleGetSkill(action) {
  const { payload } = action;
  try {
    const result = yield call(apiSetting.findOneSkill, payload);
    yield put(GetUserSkillSuccess(result));
  } catch (error) {
    yield put(GetUserSkillFailed(error));
  }
}
// Drop Down
function* handleGetCity() {
  try {
    const result = yield call(apiSetting.findAllCity);
    yield put(GetUserCitySuccess(result));
  } catch (error) {
    yield put(GetUserCityFailed(error));
  }
}
function* handleGetSkillType() {
  try {
    const result = yield call(apiSetting.findAllSkillType);
    yield put(GetSkillTypeSuccess(result));
  } catch (error) {
    yield put(GetSkillTypeFailed(error));
  }
}
function* handleGetPhoneType() {
  try {
    const result = yield call(apiSetting.findAllPhoneType);
    yield put(GetPhoneTypeSuccess(result));
  } catch (error) {
    yield put(GetPhoneTypeFailed(error));
  }
}
function* handleGetAddressType() {
  try {
    const result = yield call(apiSetting.findAllAddressType);
    yield put(GetAddressTypeSuccess(result));
  } catch (error) {
    yield put(GetAddressTypeFailed(error));
  }
}
function* handleGetLineAddress() {
  try {
    const result = yield call(apiSetting.findAllUsersAddress);
    yield put(GetLineAddressSuccess(result));
  } catch (error) {
    yield put(GetLineAddressFailed(error));
  }
}
// Handle Deleted
function* handleDelUserEmail(action) {
  const { payload } = action;
  const { email } = action;
  try {
    yield call(apiSetting.deletedEmail, payload, email);
    yield put(DelUserEmailSuccess(payload, email));
  } catch (error) {
    yield put(DelUserEmailFailed(error));
  }
}
function* handleDelUserPhone(action) {
  const { payload } = action;
  const { phone } = action;
  try {
    yield call(apiSetting.deletedPhone, payload, phone);
    yield put(DelUserPhoneSuccess(payload, phone));
  } catch (error) {
    yield put(DelUserPhoneFailed(error));
  }
}
function* handleDelUserAddress(action) {
  const { payload } = action;
  const { address } = action;
  try {
    yield call(apiSetting.deletedAddress, payload, address);
    yield put(DelUserAddressSuccess(payload, address));
  } catch (error) {
    yield put(DelUserAddressFailed(error));
  }
}
function* handleDelUserEducation(action) {
  const { payload } = action;
  const { education } = action;
  try {
    yield call(apiSetting.deletedEducation, payload, education);
    yield put(DelUserEducationSuccess(payload, education));
  } catch (error) {
    yield put(DelUserEducationFailed(error));
  }
}
function* handleDelUserExperience(action) {
  const { payload } = action;
  const { experience } = action;
  try {
    yield call(apiSetting.deletedExperience, payload, experience);
    yield put(DelUserExperienceSuccess(payload, experience));
  } catch (error) {
    yield put(DelUserExperienceFailed(error));
  }
}
function* handleDelUserSkill(action) {
  const { payload } = action;
  const { skill } = action;
  try {
    yield call(apiSetting.deletedSkill, payload, skill);
    yield put(DelUserSkillSuccess(payload, skill));
  } catch (error) {
    yield put(DelUserSkillFailed(error));
  }
}
// Create Table
function* handleAddUserEmail(action) {
  const { payload } = action;
  try {
    const result = yield call(apiSetting.createEmail, payload);
    yield put(AddUserEmailSuccess(result.data));
  } catch (error) {
    yield put(AddUserEmailFailed(error));
  }
}
function* handleAddUserPhone(action) {
  const { payload } = action;
  try {
    const result = yield call(apiSetting.createPhone, payload);
    yield put(AddUserPhoneSuccess(result.data));
  } catch (error) {
    yield put(AddUserPhoneFailed(error));
  }
}

function* handleAddUserAddress(action) {
  const { payload } = action;
  try {
    const result = yield call(apiSetting.createAddress, payload);
    yield put(AddUserAddressSuccess(result.data));
  } catch (error) {
    yield put(AddUserAddressFailed(error));
  }
}
function* handleAddUserEducation(action) {
  const { payload } = action;
  try {
    const result = yield call(apiSetting.createEducation, payload);
    yield put(AddUserEducationSuccess(result.data));
  } catch (error) {
    yield put(AddUserEducationFailed(error));
  }
}
function* handleAddUserExperience(action) {
  const { payload } = action;
  try {
    const result = yield call(apiSetting.createExperience, payload);
    yield put(AddUserExperienceSuccess(result.data));
  } catch (error) {
    yield put(AddUserExperienceFailed(error));
  }
}
function* handleAddUserSkill(action) {
  const { payload } = action;
  try {
    const result = yield call(apiSetting.createSkill, payload);
    yield put(AddUserSkillSuccess(result.data));
  } catch (error) {
    yield put(AddUserSkillFailed(error));
  }
}
// Update

function* handleEditExperience(action) {
  const { payload } = action;
  try {
    const result = yield call(apiSetting.editExperience, payload);
    console.info(result);
    yield put(EditExperienceSuccess(result.data[1]));
  } catch (error) {
    yield put(EditExperienceFailed(error));
  }
}
function* handleGetOneExperience(action) {
  const { payload } = action;
  const { experience } = action;
  try {
    const result = yield call(apiSetting.findExperience, payload, experience);
    console.info(result);
    yield put(GetOneUserExperienceSuccess(result));
  } catch (error) {
    yield put(GetOneUserExperienceFailed(error));
  }
}

export {
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
};
