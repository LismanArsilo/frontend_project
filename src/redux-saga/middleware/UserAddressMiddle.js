import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";

import apiUserAddress from "../../api/api-address";
import {
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
} from "../actions/UserAddress";

function* handleGetAddressSuper() {
  try {
    const result = yield call(apiUserAddress.findAllSuper);
    yield put(GetAddressSuperSuccess(result));
  } catch (error) {
    yield put(GetAddressSuperFailed(error));
  }
}
function* handleGetAddress(action) {
  const { payload } = action;
  try {
    const result = yield call(apiUserAddress.findAll, payload);
    yield put(GetAddressSuccess(result));
  } catch (error) {
    yield put(GetAddressFailed(error));
  }
}

function* handleGetOneAddress(action) {
  const { payload } = action;
  const { address } = action;
  try {
    const result = yield call(apiUserAddress.findOne, payload, address);
    yield put(GetOneAddressSuccess(result));
  } catch (error) {
    yield put(GetOneAddressFailed(error));
  }
}
function* handleEditAddress(action) {
  const { payload } = action;
  try {
    const result = yield call(apiUserAddress.update, payload);
    yield put(EditAddressSuccess(result.data));
  } catch (error) {
    yield put(EditAddressFailed(error));
  }
}

function* handleAddAddress(action) {
  const { payload } = action;
  try {
    const result = yield call(apiUserAddress.create, payload);
    yield put(AddAddressSuccess(result.data));
  } catch (error) {
    yield put(AddAddressFailed(error));
  }
}
function* handleDelAddress(action) {
  const { payload } = action;
  try {
    const result = yield call(apiUserAddress.deleted, payload);
    yield put(DelAddressSuccess(payload));
  } catch (error) {
    yield put(DelAddressFailed(error));
  }
}

export {
  handleGetAddressSuper,
  handleGetAddress,
  handleGetOneAddress,
  handleEditAddress,
  handleAddAddress,
  handleDelAddress,
};
