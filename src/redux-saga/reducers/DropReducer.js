import * as ActionType from "../constants/UserDrop";

const INIT_STATE = {
  city: [],
  addressType: [],
  phoneType: [],
  skillType: [],
};

const userDropReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    // City
    case ActionType.GET_CITY_REQUEST:
      return { ...state };
    case ActionType.GET_CITY_SUCCESS:
      return GetCitySuccedd(state, action);
    // AddressType
    case ActionType.GET_ADDRESS_TYPE_REQUEST:
      return { ...state };
    case ActionType.GET_ADDRESS_TYPE_SUCCESS:
      return GetAddressTypeSuccedd(state, action);
    // PhoneType
    case ActionType.GET_PHONE_TYPE_REQUEST:
      return { ...state };
    case ActionType.GET_PHONE_TYPE_SUCCESS:
      return GetPhoneTypeSuccedd(state, action);
    //SkillType
    case ActionType.GET_SKILL_TYPE_REQUEST:
      return { ...state };
    case ActionType.GET_SKILL_TYPE_SUCCESS:
      return GetSkillTypeSuccedd(state, action);
    default:
      return { ...state };
  }
};

const GetCitySuccedd = (state, action) => {
  return {
    ...state,
    city: action.payload,
  };
};
const GetAddressTypeSuccedd = (state, action) => {
  return {
    ...state,
    addressType: action.payload,
  };
};
const GetPhoneTypeSuccedd = (state, action) => {
  return {
    ...state,
    phoneType: action.payload,
  };
};
const GetSkillTypeSuccedd = (state, action) => {
  return {
    ...state,
    skillType: action.payload,
  };
};

export default userDropReducer;
