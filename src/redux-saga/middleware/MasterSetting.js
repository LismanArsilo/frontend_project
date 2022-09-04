import { call, put } from "redux-saga/effects";

import apiUserDrop from "../../api/api-user-drop";
import apiUserSetting from "../../api/api-user-setting";
import apiExperience from "../../api/api-experience";
import apiPhone from "../../api/api-phone";
import apiEmail from "../../api/api-email";
import apiAddress from "../../api/api-address";
import apiSkill from "../../api/api-skill";
import apiEducation from "../../api/api-education";

import {
  // city
  GetCityFailed,
  GetCitySuccess,
  // User
  GetOneUserFailed,
  GetOneUserSuccess,
  GetUserFailed,
  GetUserSuccess,
  // Experiences
  GetExperienceSuperSuccess,
  GetExperienceSuperFailed,
  GetExperienceSuccess,
  GetExperienceFailed,
  GetOneExperienceSuccess,
  GetOneExperienceFailed,
  EditExperienceSuccess,
  EditExperienceFailed,
  AddExperienceSuccess,
  AddExperienceFailed,
  DelExperienceSuccess,
  DelExperienceFailed,
  // Phone
  GetPhoneSuperSuccess,
  GetPhoneSuperFailed,
  GetPhoneSuccess,
  GetPhoneFailed,
  GetOnePhoneSuccess,
  GetOnePhoneFailed,
  EditPhoneSuccess,
  EditPhoneFailed,
  AddPhoneSuccess,
  AddPhoneFailed,
  DelPhoneSuccess,
  DelPhoneFailed,
  // Email
  GetEmailSuperSuccess,
  GetEmailSuperFailed,
  GetEmailSuccess,
  GetEmailFailed,
  GetOneEmailSuccess,
  GetOneEmailFailed,
  EditEmailSuccess,
  EditEmailFailed,
  AddEmailSuccess,
  AddEmailFailed,
  DelEmailSuccess,
  DelEmailFailed,
  // Education
  GetEducationSuperSuccess,
  GetEducationSuperFailed,
  GetEducationSuccess,
  GetEducationFailed,
  GetOneEducationSuccess,
  GetOneEducationFailed,
  EditEducationSuccess,
  EditEducationFailed,
  AddEducationSuccess,
  AddEducationFailed,
  DelEducationSuccess,
  DelEducationFailed,
  // Address
  GetAddressSuperSuccess,
  GetAddressSuperFailed,
  GetAddressSuccess,
  GetAddressFailed,
  GetOneAddressSuccess,
  GetOneAddressFailed,
  EditAddressSuccess,
  EditAddressFailed,
  AddAddressSuccess,
  AddAddressFailed,
  DelAddressSuccess,
  DelAddressFailed,
  // Skill
  GetSkillSuperSuccess,
  GetSkillSuperFailed,
  GetSkillSuccess,
  GetSkillFailed,
  GetOneSkillSuccess,
  GetOneSkillFailed,
  AddSkillSuccess,
  AddSkillFailed,
  DelSkillSuccess,
  DelSkillFailed,
} from "../actions/MasterSetting";

//
// user
function* handleGetUser() {
  try {
    const result = yield call(apiUserSetting.findAllSuper);
    yield put(GetUserSuccess(result));
  } catch (error) {
    yield put(GetUserFailed(error));
  }
}
function* handleGetOneUser(action) {
  const { payload } = action;
  try {
    const result = yield call(apiUserSetting.findOne, payload);
    yield put(GetOneUserSuccess(result));
  } catch (error) {
    yield put(GetOneUserFailed(error));
  }
}
//
// city
function* handleGetCity() {
  try {
    const result = yield call(apiUserDrop.findAllCity);
    yield put(GetCitySuccess(result));
  } catch (error) {
    yield put(GetCityFailed(error));
  }
}
//
// Email
function* handleGetEmailSuper() {
  try {
    const result = yield call(apiEmail.findAllSuper);
    yield put(GetEmailSuperSuccess(result));
  } catch (error) {
    yield put(GetEmailSuperFailed(error));
  }
}
function* handleGetEmail(action) {
  const { payload } = action;
  try {
    const result = yield call(apiEmail.findAll, payload);
    yield put(GetEmailSuccess(result));
  } catch (error) {
    yield put(GetEmailFailed(error));
  }
}
function* handleGetOneEmail(action) {
  const { payload } = action;
  const { email } = action;
  try {
    const result = yield call(apiEmail.findOne, payload, email);
    yield put(GetOneEmailSuccess(result));
  } catch (error) {
    yield put(GetOneEmailFailed(error));
  }
}
function* handleEditEmail(action) {
  const { payload } = action;
  try {
    const result = yield call(apiEmail.update, payload);
    yield put(EditEmailSuccess(result.data));
  } catch (error) {
    yield put(EditEmailFailed(error));
  }
}
function* handleAddEmail(action) {
  const { payload } = action;
  try {
    const result = yield call(apiEmail.create, payload);
    console.info(result.data);
    yield put(AddEmailSuccess(result.data));
  } catch (error) {
    yield put(AddEmailFailed(error));
  }
}
function* handleDelEmail(action) {
  const { payload } = action;
  try {
    yield call(apiEmail.deleted, payload);
    yield put(DelEmailSuccess(payload));
  } catch (error) {
    yield put(DelEmailFailed(error));
  }
}
//
// Phone
function* handleGetPhoneSuper() {
  try {
    const result = yield call(apiPhone.findAllSuper);
    yield put(GetPhoneSuperSuccess(result));
  } catch (error) {
    yield put(GetPhoneSuperFailed(error));
  }
}
function* handleGetPhone(action) {
  const { payload } = action;
  try {
    const result = yield call(apiPhone.findAll, payload);
    yield put(GetPhoneSuccess(result));
  } catch (error) {
    yield put(GetPhoneFailed(error));
  }
}
function* handleGetOnePhone(action) {
  const { payload } = action;
  const { Phone } = action;
  try {
    const result = yield call(apiPhone.findOne, payload, Phone);
    yield put(GetOnePhoneSuccess(result));
  } catch (error) {
    yield put(GetOnePhoneFailed(error));
  }
}
function* handleEditPhone(action) {
  const { payload } = action;
  try {
    const result = yield call(apiPhone.update, payload);
    yield put(EditPhoneSuccess(result.data));
  } catch (error) {
    yield put(EditPhoneFailed(error));
  }
}
function* handleAddPhone(action) {
  const { payload } = action;
  try {
    const result = yield call(apiPhone.create, payload);
    console.info(result.data);
    yield put(AddPhoneSuccess(result.data));
  } catch (error) {
    yield put(AddPhoneFailed(error));
  }
}
function* handleDelPhone(action) {
  const { payload } = action;
  try {
    yield call(apiPhone.deleted, payload);
    yield put(DelPhoneSuccess(payload));
  } catch (error) {
    yield put(DelPhoneFailed(error));
  }
}
//
// Education
function* handleGetEducationSuper() {
  try {
    const result = yield call(apiEducation.findAllSuper);
    yield put(GetEducationSuperSuccess(result));
  } catch (error) {
    yield put(GetEducationSuperFailed(error));
  }
}
function* handleGetEducation(action) {
  const { payload } = action;
  try {
    const result = yield call(apiEducation.findAll, payload);
    yield put(GetEducationSuccess(result));
  } catch (error) {
    yield put(GetEducationFailed(error));
  }
}
function* handleGetOneEducation(action) {
  const { payload } = action;
  const { education } = action;
  try {
    const result = yield call(apiEducation.findOne, payload, education);
    yield put(GetOneEducationSuccess(result));
  } catch (error) {
    yield put(GetOneEducationFailed(error));
  }
}
function* handleEditEducation(action) {
  const { payload } = action;
  try {
    const result = yield call(apiEducation.update, payload);
    yield put(EditEducationSuccess(result.data));
  } catch (error) {
    yield put(EditEducationFailed(error));
  }
}
function* handleAddEducation(action) {
  const { payload } = action;
  try {
    const result = yield call(apiEducation.create, payload);
    yield put(AddEducationSuccess(result.data));
  } catch (error) {
    yield put(AddEducationFailed(error));
  }
}
function* handleDelEducation(action) {
  const { payload } = action;
  try {
    yield call(apiEducation.deleted, payload);
    yield put(DelEducationSuccess(payload));
  } catch (error) {
    yield put(DelEducationFailed(error));
  }
}

// Address
function* handleGetAddressSuper() {
  try {
    const result = yield call(apiAddress.findAllSuper);
    yield put(GetAddressSuperSuccess(result));
  } catch (error) {
    yield put(GetAddressSuperFailed(error));
  }
}
function* handleGetAddress(action) {
  const { payload } = action;
  try {
    const result = yield call(apiAddress.findAll, payload);
    yield put(GetAddressSuccess(result));
  } catch (error) {
    yield put(GetAddressFailed(error));
  }
}

function* handleGetOneAddress(action) {
  const { payload } = action;
  const { address } = action;
  try {
    const result = yield call(apiAddress.findOne, payload, address);
    yield put(GetOneAddressSuccess(result));
  } catch (error) {
    yield put(GetOneAddressFailed(error));
  }
}
function* handleEditAddress(action) {
  const { payload } = action;
  try {
    const result = yield call(apiAddress.update, payload);
    yield put(EditAddressSuccess(result.data));
  } catch (error) {
    yield put(EditAddressFailed(error));
  }
}

function* handleAddAddress(action) {
  const { payload } = action;
  try {
    const result = yield call(apiAddress.create, payload);
    yield put(AddAddressSuccess(result.data));
  } catch (error) {
    yield put(AddAddressFailed(error));
  }
}
function* handleDelAddress(action) {
  const { payload } = action;
  try {
    yield call(apiAddress.deleted, payload);
    yield put(DelAddressSuccess(payload));
  } catch (error) {
    yield put(DelAddressFailed(error));
  }
}

//
//Experiences
function* handleGetExperienceSuper() {
  try {
    const result = yield call(apiExperience.findAllSuper);
    yield put(GetExperienceSuperSuccess(result));
  } catch (error) {
    yield put(GetExperienceSuperFailed(error));
  }
}
function* handleGetExperience(action) {
  const { payload } = action;
  try {
    const result = yield call(apiExperience.findAll, payload);
    yield put(GetExperienceSuccess(result));
  } catch (error) {
    yield put(GetExperienceFailed(error));
  }
}
function* handleGetOneExperience(action) {
  const { payload } = action;
  const { experience } = action;
  try {
    const result = yield call(apiExperience.findOne, payload, experience);
    yield put(GetOneExperienceSuccess(result));
  } catch (error) {
    yield put(GetOneExperienceFailed(error));
  }
}
function* handleEditExperience(action) {
  const { payload } = action;
  try {
    const result = yield call(apiExperience.update, payload);
    yield put(EditExperienceSuccess(result.data));
  } catch (error) {
    yield put(EditExperienceFailed(error));
  }
}
function* handleAddExperience(action) {
  const { payload } = action;
  try {
    const result = yield call(apiExperience.create, payload);
    console.info(result.data);
    yield put(AddExperienceSuccess(result.data));
  } catch (error) {
    yield put(AddExperienceFailed(error));
  }
}
function* handleDelExperience(action) {
  const { payload } = action;
  try {
    yield call(apiExperience.deleted, payload);
    yield put(DelExperienceSuccess(payload));
  } catch (error) {
    yield put(DelExperienceFailed(error));
  }
}
//
// Skill
function* handleGetSkillSuper() {
  try {
    const result = yield call(apiSkill.findAllSuper);
    yield put(GetSkillSuperSuccess(result));
  } catch (error) {
    yield put(GetSkillSuperFailed(error));
  }
}
function* handleGetSkill(action) {
  const { payload } = action;
  try {
    const result = yield call(apiSkill.findAll, payload);
    yield put(GetSkillSuccess(result));
  } catch (error) {
    yield put(GetSkillFailed(error));
  }
}
function* handleGetOneSkill(action) {
  const { payload } = action;
  const { Skill } = action;
  try {
    const result = yield call(apiSkill.findOne, payload, Skill);
    yield put(GetOneSkillSuccess(result));
  } catch (error) {
    yield put(GetOneSkillFailed(error));
  }
}
function* handleAddSkill(action) {
  const { payload } = action;
  try {
    const result = yield call(apiSkill.create, payload);
    console.info(result.data);
    yield put(AddSkillSuccess(result.data));
  } catch (error) {
    yield put(AddSkillFailed(error));
  }
}
function* handleDelSkill(action) {
  const { payload } = action;
  try {
    yield call(apiSkill.deleted, payload);
    yield put(DelSkillSuccess(payload));
  } catch (error) {
    yield put(DelSkillFailed(error));
  }
}

export {
  // User
  handleGetUser,
  handleGetOneUser,
  // City
  handleGetCity,
  // Experience
  handleGetExperienceSuper,
  handleGetExperience,
  handleGetOneExperience,
  handleEditExperience,
  handleAddExperience,
  handleDelExperience,
  // Email
  handleGetEmailSuper,
  handleGetEmail,
  handleGetOneEmail,
  handleEditEmail,
  handleAddEmail,
  handleDelEmail,
  // phone
  handleGetPhoneSuper,
  handleGetPhone,
  handleGetOnePhone,
  handleEditPhone,
  handleAddPhone,
  handleDelPhone,
  // Education
  handleGetEducationSuper,
  handleGetEducation,
  handleGetOneEducation,
  handleEditEducation,
  handleAddEducation,
  handleDelEducation,
  // Address
  handleGetAddressSuper,
  handleGetAddress,
  handleGetOneAddress,
  handleEditAddress,
  handleAddAddress,
  handleDelAddress,
  // Skill
  handleGetSkillSuper,
  handleGetSkill,
  handleGetOneSkill,
  handleAddSkill,
  handleDelSkill,
};
