import * as ActionType from "../constants/UserExperience";

const INIT_STATE = {
  experienceSuper: [],
  experiences: [],
  experience: [],
};

const userExperienceReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
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
    default:
      return { ...state };
  }
};

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
  console.info(action.payload);
  const { payload } = action;
  const filterExperiences = state.experiences.filter(
    (el) => el.usex_id !== payload
  );
  return { ...state, experiences: [...filterExperiences] };
};

export default userExperienceReducer;
