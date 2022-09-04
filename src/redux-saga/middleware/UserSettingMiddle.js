import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";

import apiUserSetting from "../../api/api-user-setting";
import {
  GetOneUserFailed,
  GetOneUserSuccess,
  GetUserFailed,
  GetUserSuccess,
} from "../actions/UserSetting";

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

export { handleGetUser, handleGetOneUser };
