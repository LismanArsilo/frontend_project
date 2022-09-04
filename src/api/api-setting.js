import axios from "axios";
import config from "../config/config";

// Get Table
const findOneRole = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/setting/${id}/role`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const findOneUser = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/setting/${id}`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const findOneEmail = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/setting/${id}/emails`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const findOnePhone = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/setting/${id}/phones`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const findOneAddress = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/setting/${id}/address`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const findOneEducation = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/setting/${id}/education`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const findOneExperience = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/setting/${id}/experience`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const findOneSkill = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/setting/${id}/skill`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};
// Get DropDown
const findAllAddressType = async () => {
  try {
    const result = await axios.get(`${config.domain}/setting/address`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const findAllCity = async () => {
  try {
    const result = await axios.get(`${config.domain}/setting/city`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const findAllSkillType = async () => {
  try {
    const result = await axios.get(`${config.domain}/setting/skill`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const findAllPhoneType = async () => {
  try {
    const result = await axios.get(`${config.domain}/setting/phone`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const findAllUsersAddress = async () => {
  try {
    const result = await axios.get(`${config.domain}/setting/usersaddress`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};

// Deleted Table
const deletedEmail = async (id, email) => {
  try {
    const result = await axios.delete(
      `${config.domain}/setting/${id}/email/${email}`
    );
    return result;
  } catch (error) {
    return error.message;
  }
};

const deletedPhone = async (id, phone) => {
  try {
    const result = await axios.delete(
      `${config.domain}/setting/${id}/phone/${phone}`
    );
    return result;
  } catch (error) {
    return error.message;
  }
};
const deletedEducation = async (id, education) => {
  try {
    const result = await axios.delete(
      `${config.domain}/setting/${id}/education/${education}`
    );
    return result;
  } catch (error) {
    return error.message;
  }
};
const deletedExperience = async (id, experience) => {
  try {
    const result = await axios.delete(
      `${config.domain}/setting/${id}/experiences/${experience}`
    );
    return result;
  } catch (error) {
    return error.message;
  }
};

const deletedAddress = async (id, address) => {
  try {
    const result = await axios.delete(
      `${config.domain}/setting/${id}/address/${address}`
    );
    return result;
  } catch (error) {
    return error.message;
  }
};
const deletedSkill = async (id, skill) => {
  try {
    const result = await axios.delete(
      `${config.domain}/setting/${id}/skill/${skill}`
    );
    return result;
  } catch (error) {
    return error.message;
  }
};

// Create Table
const createEmail = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/setting/email`, payload);
    return result;
  } catch (error) {
    return error.message;
  }
};
const createPhone = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/setting/phone`, payload);
    return result;
  } catch (error) {
    return error.message;
  }
};
const createAddress = async (payload) => {
  try {
    const result = await axios.post(
      `${config.domain}/setting/address`,
      payload
    );
    return result;
  } catch (error) {
    return error.message;
  }
};
const createEducation = async (payload) => {
  try {
    const result = await axios.post(
      `${config.domain}/setting/education`,
      payload
    );
    return result;
  } catch (error) {
    return error.message;
  }
};
const createExperience = async (payload) => {
  try {
    const result = await axios.post(
      `${config.domain}/setting/experience`,
      payload
    );
    return result;
  } catch (error) {
    return error.message;
  }
};
const createSkill = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/setting/skill`, payload);
    return result;
  } catch (error) {
    return error.message;
  }
};
// Update Table
const findExperience = async (id, experience) => {
  try {
    const result = await axios.get(
      `${config.domain}/setting/${id}/experience/${experience}`
    );
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const editExperience = async (payload) => {
  console.info(payload);
  try {
    const result = await axios.put(
      `${config.domain}/setting/${payload.usex_entity_id}/experience/${payload.usex_id}`,
      payload
    );
    return result;
  } catch (error) {
    return error.message;
  }
};

export default {
  findOneRole,
  findOneUser,
  findOneEmail,
  findOnePhone,
  findOneAddress,
  findOneEducation,
  findOneExperience,
  findOneSkill,
  findAllAddressType,
  findAllCity,
  findAllSkillType,
  findAllPhoneType,
  findAllUsersAddress,
  deletedEmail,
  deletedPhone,
  deletedAddress,
  deletedEducation,
  deletedExperience,
  deletedSkill,
  createEmail,
  createPhone,
  createAddress,
  createEducation,
  createExperience,
  createSkill,
  // update
  findExperience,
  editExperience,
};
