import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";

import apiUserDrop from "../../api/api-user-drop";
import {
  GetCityFailed,
  GetCitySuccess,
  GetAddressTypeFailed,
  GetAddressTypeSuccess,
  GetPhoneTypeFailed,
  GetPhoneTypeSuccess,
  GetSkillTypeSuccess,
  GetSkillTypeFailed,
} from "../actions/UserDrop";

function* handleGetCity() {
  try {
    const result = yield call(apiUserDrop.findAllCity);
    yield put(GetCitySuccess(result));
  } catch (error) {
    yield put(GetCityFailed(error));
  }
}
function* handleGetAddressType() {
  try {
    const result = yield call(apiUserDrop.findAllAddressType);
    yield put(GetAddressTypeSuccess(result));
  } catch (error) {
    yield put(GetAddressTypeFailed(error));
  }
}
function* handleGetPhoneType() {
  try {
    const result = yield call(apiUserDrop.findAllPhoneType);
    yield put(GetPhoneTypeSuccess(result));
  } catch (error) {
    yield put(GetPhoneTypeFailed(error));
  }
}
function* handleGetSkillType() {
  try {
    const result = yield call(apiUserDrop.findAllSkillType);
    yield put(GetSkillTypeSuccess(result));
  } catch (error) {
    yield put(GetSkillTypeFailed(error));
  }
}

export {
  handleGetCity,
  handleGetAddressType,
  handleGetPhoneType,
  handleGetSkillType,
};
