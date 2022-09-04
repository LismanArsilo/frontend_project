import * as ActionType from "../constants/UserAddress";

const INIT_STATE = {
  addressSuper: [],
  addresses: [],
  address: [],
};

const userExperienceReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_ADDRESS_SUPER_REQUEST:
      return { ...state };
    case ActionType.GET_ADDRESS_SUPER_SUCCESS:
      return GetAddressSuperSuccedd(state, action);
    case ActionType.GET_ADDRESS_REQUEST:
      return { ...state };
    case ActionType.GET_ADDRESS_SUCCESS:
      return GetAddressSuccedd(state, action);
    case ActionType.GET_ONE_ADDRESS_REQUEST:
      return { ...state };
    case ActionType.GET_ONE_ADDRESS_SUCCESS:
      return GetOneAddressSuccedd(state, action);
    case ActionType.EDIT_ADDRESS_REQUEST:
      return { ...state };
    case ActionType.EDIT_ADDRESS_SUCCESS:
      return EditAddressSuccedd(state, action);
    case ActionType.ADD_ADDRESS_REQUEST:
      return { ...state };
    case ActionType.ADD_ADDRESS_SUCCESS:
      return AddAddressSuccedd(state, action);
    case ActionType.DEL_ADDRESS_REQUEST:
      return { ...state };
    case ActionType.DEL_ADDRESS_SUCCESS:
      return DelAddressSuccedd(state, action);
    default:
      return { ...state };
  }
};

const GetAddressSuperSuccedd = (state, action) => {
  return {
    ...state,
    AddressSuper: action.payload,
  };
};
const GetAddressSuccedd = (state, action) => {
  return {
    ...state,
    addresses: action.payload,
  };
};
const GetOneAddressSuccedd = (state, action) => {
  return {
    ...state,
    address: action.payload,
  };
};
const EditAddressSuccedd = (state, action) => {
  const { payload } = action;
  const filterAddresses = state.addresses.filter(
    (el) => el.etad_addr_id !== payload.etad_addr_id
  );
  return { ...state, addresses: [...filterAddresses, payload] };
};
const AddAddressSuccedd = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    addresses: [...state.addresses, payload],
  };
};
const DelAddressSuccedd = (state, action) => {
  const { payload } = action;
  const filterAddresses = state.addresses.filter(
    (el) => el.etad_addr_id !== payload
  );
  return { ...state, address: [...filterAddresses] };
};

export default userExperienceReducer;
