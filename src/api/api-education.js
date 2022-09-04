import axios from "axios";
import config from "../config/config";

const findAllSuper = async () => {
  try {
    const result = await axios.get(`${config.domain}/education/`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const findAll = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/education/${id}`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const findOne = async (id, education) => {
  try {
    const result = await axios.get(
      `${config.domain}/education/${id}/education/${education}`
    );
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const create = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/education/`, payload);
    return result;
  } catch (error) {
    return error.message;
  }
};
const update = async (payload) => {
  try {
    const result = await axios.update(
      `${config.domain}/education/${payload.usdu_id}`,
      payload
    );
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const deleted = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/education/${id}`);
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
