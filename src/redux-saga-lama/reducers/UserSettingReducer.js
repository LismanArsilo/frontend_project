import * as ActionType from "../constants/UserSetting";

const INIT_STATE = {
  user: [],
  role: [],
  email: [],
  phone: [],
  address: [],
  education: [],
  experience: [],
  experiences: [],
  skill: [],
  skillType: [],
  addressType: [],
  phoneType: [],
  city: [],
  lineAddress: [],
  // Terbalik S
};

const userSettingReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_USER_ROLE_REQUEST:
      return { ...state };
    case ActionType.GET_USER_ROLE_SUCCESS:
      return GetUserRoleSuccedd(state, action);
    case ActionType.GET_USER_REQUEST:
      return { ...state };
    case ActionType.GET_USER_SUCCESS:
      return GetUserSuccedd(state, action);
    case ActionType.GET_USER_EMAIL_REQUEST:
      return { ...state };
    case ActionType.GET_USER_EMAIL_SUCCESS:
      return GetUserEmailSuccedd(state, action);
    case ActionType.GET_USER_PHONE_REQUEST:
      return { ...state };
    case ActionType.GET_USER_PHONE_SUCCESS:
      return GetUserPhoneSuccedd(state, action);
    case ActionType.GET_USER_ADDRESS_REQUEST:
      return { ...state };
    case ActionType.GET_USER_ADDRESS_SUCCESS:
      return GetUserAddressSuccedd(state, action);
    case ActionType.GET_USER_EDUCATION_REQUEST:
      return { ...state };
    case ActionType.GET_USER_EDUCATION_SUCCESS:
      return GetUserEducationSuccedd(state, action);
    case ActionType.GET_USER_EXPERIENCE_REQUEST:
      return { ...state };
    case ActionType.GET_USER_EXPERIENCE_SUCCESS:
      return GetUserExperienceSuccedd(state, action);
    case ActionType.GET_USER_SKILL_REQUEST:
      return { ...state };
    case ActionType.GET_USER_SKILL_SUCCESS:
      return GetUserSkillSuccedd(state, action);
    // Get One
    case ActionType.GETONE_USER_EXPERIENCE_REQUEST:
      return { ...state };
    case ActionType.GETONE_USER_EXPERIENCE_SUCCESS:
      return GetOneUserExperienceSuccedd(state, action);
    // Get Dropdown
    case ActionType.GET_SKILL_TYPE_REQUEST:
      return { ...state };
    case ActionType.GET_SKILL_TYPE_SUCCESS:
      return GetSkillTypeSuccedd(state, action);
    case ActionType.GET_PHONE_TYPE_REQUEST:
      return { ...state };
    case ActionType.GET_PHONE_TYPE_SUCCESS:
      return GetPhoneTypeSuccedd(state, action);
    case ActionType.GET_ADDRESS_TYPE_REQUEST:
      return { ...state };
    case ActionType.GET_ADDRESS_TYPE_SUCCESS:
      return GetAddressTypeSuccedd(state, action);
    case ActionType.GET_CITY_REQUEST:
      return { ...state };
    case ActionType.GET_CITY_SUCCESS:
      return GetUserCitySuccedd(state, action);
    case ActionType.GET_ADDRESS_REQUEST:
      return { ...state };
    case ActionType.GET_ADDRESS_SUCCESS:
      return GetLineAddressSuccedd(state, action);
    // Deleted Table
    case ActionType.DEL_EMAIL_REQUEST:
      return { ...state };
    case ActionType.DEL_EMAIL_SUCCESS:
      return DelUserEmailSuccedd(state, action);
    case ActionType.DEL_PHONE_REQUEST:
      return { ...state };
    case ActionType.DEL_PHONE_SUCCESS:
      return DelUserPhoneSuccedd(state, action);
    case ActionType.DEL_ADDRESS_REQUEST:
      return { ...state };
    case ActionType.DEL_ADDRESS_SUCCESS:
      return DelUserAddressSuccedd(state, action);
    case ActionType.DEL_EDUCATION_REQUEST:
      return { ...state };
    case ActionType.DEL_EDUCATION_SUCCESS:
      return DelUserEducationSuccedd(state, action);
    case ActionType.DEL_EXPERIENCE_REQUEST:
      return { ...state };
    case ActionType.DEL_EXPERIENCE_SUCCESS:
      return DelUserExperienceSuccedd(state, action);
    case ActionType.DEL_SKILL_REQUEST:
      return { ...state };
    case ActionType.DEL_SKILL_SUCCESS:
      return DelUserSkillSuccedd(state, action);
    // Created Table
    case ActionType.ADD_EMAIL_REQUEST:
      return { ...state };
    case ActionType.ADD_EMAIL_SUCCESS:
      return AddUserEmailSuccedd(state, action);
    case ActionType.ADD_PHONE_REQUEST:
      return { ...state };
    case ActionType.ADD_PHONE_SUCCESS:
      return AddUserPhoneSuccedd(state, action);
    case ActionType.ADD_ADDRESS_REQUEST:
      return { ...state };
    case ActionType.ADD_ADDRESS_SUCCESS:
      return AddUserAddressSuccedd(state, action);
    case ActionType.ADD_EDUCATION_REQUEST:
      return { ...state };
    case ActionType.ADD_EDUCATION_SUCCESS:
      return AddUserEducationSuccedd(state, action);
    case ActionType.ADD_EXPERIENCE_REQUEST:
      return { ...state };
    case ActionType.ADD_EXPERIENCE_SUCCESS:
      return AddUserExperienceSuccedd(state, action);
    case ActionType.ADD_SKILL_REQUEST:
      return { ...state };
    case ActionType.ADD_SKILL_SUCCESS:
      return AddUserSkillSuccedd(state, action);
    // Update
    case ActionType.EDIT_EXPERIENCE_REQUEST:
      return { ...state };
    case ActionType.EDIT_EXPERIENCE_SUCCESS:
      return EditExperienceSucceed(state, action);
    default:
      return state;
  }
};

const GetUserRoleSuccedd = (state, action) => {
  return {
    ...state,
    role: action.payload,
  };
};
const GetUserSuccedd = (state, action) => {
  return {
    ...state,
    user: action.payload,
  };
};
const GetUserEmailSuccedd = (state, action) => {
  return {
    ...state,
    email: action.payload,
  };
};
const GetUserPhoneSuccedd = (state, action) => {
  return {
    ...state,
    phone: action.payload,
  };
};
const GetUserAddressSuccedd = (state, action) => {
  return {
    ...state,
    address: action.payload,
  };
};
const GetUserEducationSuccedd = (state, action) => {
  return {
    ...state,
    education: action.payload,
  };
};
const GetUserExperienceSuccedd = (state, action) => {
  return {
    ...state,
    experience: action.payload,
  };
};
const GetUserSkillSuccedd = (state, action) => {
  return {
    ...state,
    skill: action.payload,
  };
};
// Get One
const GetOneUserExperienceSuccedd = (state, action) => {
  return {
    ...state,
    experiences: action.payload,
  };
};

// Get DropDown Type
const GetSkillTypeSuccedd = (state, action) => {
  return { ...state, skillType: action.payload };
};
const GetPhoneTypeSuccedd = (state, action) => {
  return { ...state, phoneType: action.payload };
};
const GetAddressTypeSuccedd = (state, action) => {
  return { ...state, addressType: action.payload };
};
const GetUserCitySuccedd = (state, action) => {
  return { ...state, city: action.payload };
};
const GetLineAddressSuccedd = (state, action) => {
  return { ...state, lineAddress: action.payload };
};

// Deleted Type
const DelUserEmailSuccedd = (state, action) => {
  const { email } = action;
  const filterUserEmail = state.email.filter((el) => el.pmail_id !== email);

  return {
    ...state,
    email: [...filterUserEmail],
  };
};
const DelUserPhoneSuccedd = (state, action) => {
  const { phone } = action;
  const filterUserPhone = state.phone.filter((el) => el.uspo_number !== phone);

  return {
    ...state,
    phone: [...filterUserPhone],
  };
};
const DelUserEducationSuccedd = (state, action) => {
  const { education } = action;
  const filterUserEducation = state.education.filter(
    (el) => el.usdu_id !== education
  );

  return {
    ...state,
    education: [...filterUserEducation],
  };
};
const DelUserExperienceSuccedd = (state, action) => {
  const { experience } = action;
  const filterUserExperience = state.experience.filter(
    (el) => el.usex_id !== experience
  );

  return {
    ...state,
    experience: [...filterUserExperience],
  };
};

const DelUserAddressSuccedd = (state, action) => {
  const { address } = action;
  const filterUserAddress = state.address.filter(
    (el) => el.etad_addr_id !== address
  );

  return {
    ...state,
    address: [...filterUserAddress],
  };
};
const DelUserSkillSuccedd = (state, action) => {
  const { skill } = action;
  const filterUserSkill = state.skill.filter((el) => el.uski_id !== skill);
  console.info(filterUserSkill);
  return {
    ...state,
    skill: [...filterUserSkill],
  };
};

// Create Table
const AddUserEmailSuccedd = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    email: [...state.email, payload],
  };
};
const AddUserPhoneSuccedd = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    phone: [...state.phone, payload],
  };
};

const AddUserLineAddressSuccedd = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    lineAddress: [...state.address, payload],
  };
};
const AddUserAddressSuccedd = (state, action) => {
  const { payload } = action;

  return {
    ...state,
    address: [...state.address, ...state.lineAddress, [payload]],
  };
};

const AddUserEducationSuccedd = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    education: [...state.education, payload],
  };
};

const AddUserExperienceSuccedd = (state, action) => {
  const { payload } = action;
  const { city } = state.city;
  const usex_city = payload.usex_city_id === city.city_id;
  return {
    ...state,
    experience: [...state.experience, [payload, usex_city]],
  };
};
const AddUserSkillSuccedd = (state, action) => {
  const { payload } = action;

  return { ...state, skill: [...state.skill, payload] };
};
// Update Table
const EditExperienceSucceed = (state, action) => {
  const { payload } = action;
  // const { city } = state;
  // console.info(city);
  const filterExperience = state.experience.filter(
    (el) => el.usex_id !== payload.usex_id
  );
  const usex_city = state.city.filter(
    (el) => el.city_id === payload.usex_city_id
  );
  console.info(filterExperience);
  // const filterExperience = state.experience.filter(
  //   (el) => el.usex_id !== payload.usex_id
  // );
  return { ...state, experience: [...filterExperience, payload] };
};

export default userSettingReducer;
