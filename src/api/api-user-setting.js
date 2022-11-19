import axios from "axios";
import config from "../config/config";

const findAllSuper = async () => {
  try {
    const result = await axios.get(`${config.domain}/user`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const findOne = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/user/${id}`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const editUser = async (payload) => {
  const entity_id = parseInt(payload.get("entity_id"));
  try {
    const result = await axios.put(
      `${config.domain}/user/${entity_id}`,
      payload
    );
    return result;
  } catch (error) {
    return await error.message;
  }
};

const editNoUser = async (payload) => {
  const entity_id = payload.entity_id;
  try {
    const result = await axios.put(
      `${config.domain}/user/nofile/${entity_id}`,
      payload
    );
    return result;
  } catch (error) {
    return await error.message;
  }
};

export default {
  findAllSuper,
  findOne,
  editUser,
  editNoUser,
};
