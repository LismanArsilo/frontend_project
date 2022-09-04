import axios from "axios";
import config from "../config/config";

const findAllSuper = async () => {
  try {
    const result = await axios.get(`${config.domain}/skill/`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const findAll = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/skill/${id}`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const findOne = async (id, skill) => {
  try {
    const result = await axios.get(
      `${config.domain}/skill/${id}/skill/${skill}`
    );
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const create = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/skill/`, payload);
    return result;
  } catch (error) {
    return error.message;
  }
};
const deleted = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/skill/${id}`);
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
  deleted,
};
