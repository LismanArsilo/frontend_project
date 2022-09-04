import axios from "axios";
import config from "../config/config";

const findAllSuper = async () => {
  try {
    const result = await axios.get(`${config.domain}/phone/`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const findAll = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/phone/${id}`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const findOne = async (id, phone) => {
  try {
    const result = await axios.get(
      `${config.domain}/phone/${id}/phone/${phone}`
    );
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const create = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/phone/`, payload);
    return result;
  } catch (error) {
    return error.message;
  }
};
const update = async (payload) => {
  try {
    const result = await axios.put(
      `${config.domain}/phone/${payload.phone_number}`,
      payload
    );
    return result;
  } catch (error) {
    return error.message;
  }
};
const deleted = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/phone/${id}`);
    return result;
  } catch (error) {
    return error.message;
  }
};

export default {
  findAllSuper,
  findAll,
  findOne,
  create,
  update,
  deleted,
};
