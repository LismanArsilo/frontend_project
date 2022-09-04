import * as ActionType from "../constants/UserAddress";
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
