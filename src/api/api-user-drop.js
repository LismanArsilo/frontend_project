import axios from "axios";
import config from "../config/config";

const findAllCity = async () => {
  try {
    const result = await axios.get(`${config.domain}/city/`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const findOneCity = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/city/${id}`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};

const findAllPhoneType = async () => {
  try {
    const result = await axios.get(`${config.domain}/phonetype/`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const findOnePhoneType = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/phonetype/${id}`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};

const findAllAddressType = async () => {
  try {
    const result = await axios.get(`${config.domain}/addresstype/`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};

const findOneAddressType = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/addresstype/${id}`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const findAllSkillType = async () => {
  try {
    const result = await axios.get(`${config.domain}/skilltype/`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};

export default {
  findAllCity,
  findOneCity,
  findAllAddressType,
  findOneAddressType,
  findAllPhoneType,
  findOnePhoneType,
  findAllSkillType,
};
