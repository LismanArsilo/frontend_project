import * as ActionType from "../constants/MasterSetting";

const INIT_STATE = {
  users: [],
  user: [],

  emailSuper: [],
  emails: [],
  email: [],

  phoneSuper: [],
  phones: [],
  phone: [],

  experienceSuper: [],
  experiences: [],
  experience: [],

  addressSuper: [],
  addresses: [],
  address: [],

  skillSuper: [],
  skills: [],
  skill: [],

  educationSuper: [],
  educations: [],
  education: [],

  city: [],
};

const userMasterReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    // User
    case ActionType.GET_USER_REQUEST:
      return { ...state };
    case ActionType.GET_USER_SUCCESS:
      return GetUsersSuccedd(state, action);
    case ActionType.GET_ONE_USER_REQUEST:
      return { ...state };
    case ActionType.GET_ONE_USER_SUCCESS:
      return GetOneUserSuccedd(state, action);
    //
    // Phone
    case ActionType.GET_PHONE_SUPER_REQUEST:
      return { ...state };
    case ActionType.GET_PHONE_SUPER_SUCCESS:
      return GetPhoneSuperSuccedd(state, action);
    case ActionType.GET_PHONE_REQUEST:
      return { ...state };
    case ActionType.GET_PHONE_SUCCESS:
      return GetPhoneSuccedd(state, action);
    case ActionType.GET_ONE_PHONE_REQUEST:
      return { ...state };
    case ActionType.GET_ONE_PHONE_SUCCESS:
      return GetOnePhoneSuccedd(state, action);
    case ActionType.EDIT_PHONE_REQUEST:
      return { ...state };
    case ActionType.EDIT_PHONE_SUCCESS:
      return EditPhoneSuccedd(state, action);
    case ActionType.ADD_PHONE_REQUEST:
      return { ...state };
    case ActionType.ADD_PHONE_SUCCESS:
      return AddPhoneSuccedd(state, action);
    case ActionType.DEL_PHONE_REQUEST:
      return { ...state };
    case ActionType.DEL_PHONE_SUCCESS:
      return DelPhoneSuccedd(state, action);
    //
    // Email
    case ActionType.GET_EMAIL_SUPER_REQUEST:
      return { ...state };
    case ActionType.GET_EMAIL_SUPER_SUCCESS:
      return GetEmailSuperSuccedd(state, action);
    case ActionType.GET_EMAIL_REQUEST:
      return { ...state };
    case ActionType.GET_EMAIL_SUCCESS:
      return GetEmailSuccedd(state, action);
    case ActionType.GET_ONE_EMAIL_REQUEST:
      return { ...state };
    case ActionType.GET_ONE_EMAIL_SUCCESS:
      return GetOneEmailSuccedd(state, action);
    case ActionType.EDIT_EMAIL_REQUEST:
      return { ...state };
    case ActionType.EDIT_EMAIL_SUCCESS:
      return EditEmailSuccedd(state, action);
    case ActionType.ADD_EMAIL_REQUEST:
      return { ...state };
    case ActionType.ADD_EMAIL_SUCCESS:
      return AddEmailSuccedd(state, action);
    case ActionType.DEL_EMAIL_REQUEST:
      return { ...state };
    case ActionType.DEL_EMAIL_SUCCESS:
      return DelEmailSuccedd(state, action);
    //
    // city
    case ActionType.GET_CITY_REQUEST:
      return { ...state };
    case ActionType.GET_CITY_SUCCESS:
      return GetCitySuccedd(state, action);
    //
    // Education
    case ActionType.GET_EDUCATION_SUPER_REQUEST:
      return { ...state };
    case ActionType.GET_EDUCATION_SUPER_SUCCESS:
      return GetEducationSuperSuccedd(state, action);
    case ActionType.GET_EDUCATION_REQUEST:
      return { ...state };
    case ActionType.GET_EDUCATION_SUCCESS:
      return GetEducationSuccedd(state, action);
    case ActionType.GET_ONE_EDUCATION_REQUEST:
      return { ...state };
    case ActionType.GET_ONE_EDUCATION_SUCCESS:
      return GetOneEducationSuccedd(state, action);
    case ActionType.EDIT_EDUCATION_REQUEST:
      return { ...state };
    case ActionType.EDIT_EDUCATION_SUCCESS:
      return EditEducationSuccedd(state, action);
    case ActionType.ADD_EDUCATION_REQUEST:
      return { ...state };
    case ActionType.ADD_EDUCATION_SUCCESS:
      return AddEducationSuccedd(state, action);
    case ActionType.DEL_EDUCATION_REQUEST:
      return { ...state };
    case ActionType.DEL_EDUCATION_SUCCESS:
      return DelEducationSuccedd(state, action);
    //
    // Address
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
    //
    // Experience
    case ActionType.GET_EXPERIENCE_SUPER_REQUEST:
      return { ...state };
    case ActionType.GET_EXPERIENCE_SUPER_SUCCESS:
      return GetExperienceSuperSuccedd(state, action);
    case ActionType.GET_EXPERIENCE_REQUEST:
      return { ...state };
    case ActionType.GET_EXPERIENCE_SUCCESS:
      return GetExperienceSuccedd(state, action);
    case ActionType.GET_ONE_EXPERIENCE_REQUEST:
      return { ...state };
    case ActionType.GET_ONE_EXPERIENCE_SUCCESS:
      return GetOneExperienceSuccedd(state, action);
    case ActionType.EDIT_EXPERIENCE_REQUEST:
      return { ...state };
    case ActionType.EDIT_EXPERIENCE_SUCCESS:
      return EditExperienceSuccedd(state, action);
    case ActionType.ADD_EXPERIENCE_REQUEST:
      return { ...state };
    case ActionType.ADD_EXPERIENCE_SUCCESS:
      return AddExperienceSuccedd(state, action);
    case ActionType.DEL_EXPERIENCE_REQUEST:
      return { ...state };
    case ActionType.DEL_EXPERIENCE_SUCCESS:
      return DelExperienceSuccedd(state, action);
    //
    // Skill
    case ActionType.GET_SKILL_SUPER_REQUEST:
      return { ...state };
    case ActionType.GET_SKILL_SUPER_SUCCESS:
      return GetSkillSuperSuccedd(state, action);
    case ActionType.GET_SKILL_REQUEST:
      return { ...state };
    case ActionType.GET_SKILL_SUCCESS:
      return GetSkillSuccedd(state, action);
    case ActionType.GET_ONE_SKILL_REQUEST:
      return { ...state };
    case ActionType.GET_ONE_SKILL_SUCCESS:
      return GetOneSkillSuccedd(state, action);
    case ActionType.ADD_SKILL_REQUEST:
      return { ...state };
    case ActionType.ADD_SKILL_SUCCESS:
      return AddSkillSuccedd(state, action);
    case ActionType.DEL_SKILL_REQUEST:
      return { ...state };
    case ActionType.DEL_SKILL_SUCCESS:
      return DelSkillSuccedd(state, action);
    default:
      return state;
  }
};

// User
const GetUsersSuccedd = (state, action) => {
  return {
    ...state,
    users: action.payload,
  };
};
const GetOneUserSuccedd = (state, action) => {
  return {
    ...state,
    user: action.payload,
  };
};

//
// Email
const GetEmailSuperSuccedd = (state, action) => {
  return {
    ...state,
    emailSuper: action.payload,
  };
};
const GetEmailSuccedd = (state, action) => {
  return {
    ...state,
    emails: action.payload,
  };
};
const GetOneEmailSuccedd = (state, action) => {
  return {
    ...state,
    email: action.payload,
  };
};
const EditEmailSuccedd = (state, action) => {
  const { payload } = action;
  const filterEmails = state.emails.filter(
    (el) => el.pmail_id !== payload.pmail_id
  );
  return { ...state, emails: [...filterEmails, payload] };
};
const AddEmailSuccedd = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    emails: [...state.emails, payload],
  };
};
const DelEmailSuccedd = (state, action) => {
  const { payload } = action;
  const filterEmails = state.emails.filter((el) => el.pmail_id !== payload);
  return { ...state, emails: [...filterEmails] };
};

//
// Phone
const GetPhoneSuperSuccedd = (state, action) => {
  return {
    ...state,
    phoneSuper: action.payload,
  };
};
const GetPhoneSuccedd = (state, action) => {
  return {
    ...state,
    phones: action.payload,
  };
};
const GetOnePhoneSuccedd = (state, action) => {
  return {
    ...state,
    phone: action.payload,
  };
};
const EditPhoneSuccedd = (state, action) => {
  const { payload } = action;
  const filterPhones = state.phones.filter(
    (el) => el.uspo_number !== payload.uspo_number
  );
  return { ...state, phones: [...filterPhones, payload] };
};
const AddPhoneSuccedd = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    phones: [...state.phones, payload],
  };
};
const DelPhoneSuccedd = (state, action) => {
  const { payload } = action;
  const filterphones = state.phones.filter((el) => el.uspo_number !== payload);
  return { ...state, phones: [...filterphones] };
};

//
// City
const GetCitySuccedd = (state, action) => {
  return {
    ...state,
    city: action.payload,
  };
};

//
// Address
const GetAddressSuperSuccedd = (state, action) => {
  return {
    ...state,
    addressSuper: action.payload,
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
  console.info(payload);
  const filterAddresses = state.addresses.filter(
    (el) => el.etad_addr_id !== payload
  );
  return { ...state, addresses: [...filterAddresses] };
};
//
// Education
const GetEducationSuperSuccedd = (state, action) => {
  return {
    ...state,
    educationSuper: action.payload,
  };
};
const GetEducationSuccedd = (state, action) => {
  return {
    ...state,
    educations: action.payload,
  };
};
const GetOneEducationSuccedd = (state, action) => {
  return {
    ...state,
    education: action.payload,
  };
};
const EditEducationSuccedd = (state, action) => {
  const { payload } = action;
  const filterEducations = state.educations.filter(
    (el) => el.usdu_id !== payload.usdu_id
  );
  return { ...state, educations: [...filterEducations, payload] };
};
const AddEducationSuccedd = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    educations: [...state.educations, payload],
  };
};
const DelEducationSuccedd = (state, action) => {
  const { payload } = action;
  const filterEducations = state.educations.filter(
    (el) => el.usdu_id !== payload
  );
  return { ...state, educations: [...filterEducations] };
};

//
// Experience
const GetExperienceSuperSuccedd = (state, action) => {
  return {
    ...state,
    experienceSuper: action.payload,
  };
};
const GetExperienceSuccedd = (state, action) => {
  return {
    ...state,
    experiences: action.payload,
  };
};
const GetOneExperienceSuccedd = (state, action) => {
  return {
    ...state,
    experience: action.payload,
  };
};
const EditExperienceSuccedd = (state, action) => {
  const { payload } = action;
  const filterExperiences = state.experiences.filter(
    (el) => el.usex_id !== payload.usex_id
  );
  return { ...state, experiences: [...filterExperiences, payload] };
};
const AddExperienceSuccedd = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    experiences: [...state.experiences, payload],
  };
};
const DelExperienceSuccedd = (state, action) => {
  const { payload } = action;
  const filterExperiences = state.experiences.filter(
    (el) => el.usex_id !== payload
  );
  return { ...state, experiences: [...filterExperiences] };
};

//
// Skill
const GetSkillSuperSuccedd = (state, action) => {
  return {
    ...state,
    skillSuper: action.payload,
  };
};
const GetSkillSuccedd = (state, action) => {
  return {
    ...state,
    skills: action.payload,
  };
};
const GetOneSkillSuccedd = (state, action) => {
  return {
    ...state,
    skill: action.payload,
  };
};
const AddSkillSuccedd = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    skills: [...state.skills, payload],
  };
};
const DelSkillSuccedd = (state, action) => {
  const { payload } = action;
  const filterSkills = state.skills.filter((el) => el.uski_id !== payload);
  return { ...state, skills: [...filterSkills] };
};

export default userMasterReducer;
