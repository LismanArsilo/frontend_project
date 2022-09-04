import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";

import apiUserExperience from "../../api/api-experience";
import {
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
} from "../actions/UserExperience";

function* handleGetExperienceSuper() {
  try {
    const result = yield call(apiUserExperience.findAllSuper);
    yield put(GetExperienceSuperSuccess(result));
  } catch (error) {
    yield put(GetExperienceSuperFailed(error));
  }
}
function* handleGetExperience(action) {
  const { payload } = action;
  try {
    const result = yield call(apiUserExperience.findAll, payload);
    yield put(GetExperienceSuccess(result));
  } catch (error) {
    yield put(GetExperienceFailed(error));
  }
}

function* handleGetOneExperience(action) {
  const { payload } = action;
  try {
    const result = yield call(apiUserExperience.findOne, payload);
    yield put(GetOneExperienceSuccess(result));
  } catch (error) {
    yield put(GetOneExperienceFailed(error));
  }
}
function* handleEditExperience(action) {
  const { payload } = action;
  try {
    const result = yield call(apiUserExperience.update, payload);
    yield put(EditExperienceSuccess(result.data));
  } catch (error) {
    yield put(EditExperienceFailed(error));
  }
}

function* handleAddExperience(action) {
  const { payload } = action;
  try {
    const result = yield call(apiUserExperience.create, payload);
    yield put(AddExperienceSuccess(result.data));
  } catch (error) {
    yield put(AddExperienceFailed(error));
  }
}
function* handleDelExperience(action) {
  const { payload } = action;
  try {
    const result = yield call(apiUserExperience.deleted, payload);
    yield put(DelExperienceSuccess(payload));
  } catch (error) {
    yield put(DelExperienceFailed(error));
  }
}

export {
  handleGetExperienceSuper,
  handleGetExperience,
  handleGetOneExperience,
  handleEditExperience,
  handleAddExperience,
  handleDelExperience,
};
