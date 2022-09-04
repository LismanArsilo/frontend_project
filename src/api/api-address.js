import axios from "axios";
import config from "../config/config";

const findAllSuper = async () => {
  try {
    const result = await axios.get(`${config.domain}/address/`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const findAll = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/address/${id}`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};

const findOne = async (id, address) => {
  try {
    const result = await axios.get(
      `${config.domain}/address/${id}/address/${address}`
    );
    return result.data;
  } catch (error) {
    return error.message;
  }
};

const create = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/address/`, payload);
    return result;
  } catch (error) {
    return error.message;
  }
};
const update = async (payload) => {
  try {
    const result = await axios.put(
      `${config.domain}/address/${payload.addr_id}`,
      payload
    );
    return result;
  } catch (error) {
    return error.message;
  }
};
const deleted = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/address/${id}`);
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
