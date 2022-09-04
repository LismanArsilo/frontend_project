import axios from "axios";
import config from "../config/config";

const findAllSuper = async () => {
  try {
    const result = await axios.get(`${config.domain}/experience/`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const findAll = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/experience/${id}`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const findOne = async (id, experience) => {
  try {
    const result = await axios.get(
      `${config.domain}/experience/${id}/experience/${experience}`
    );
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const create = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/experience/`, payload);
    return result;
  } catch (error) {
    return error.message;
  }
};
const update = async (payload) => {
  try {
    const result = await axios.put(
      `${config.domain}/experience/${payload.usex_id}`,
      payload
    );
    return result;
  } catch (error) {
    return error.message;
  }
};
const deleted = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/experience/${id}`);
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
