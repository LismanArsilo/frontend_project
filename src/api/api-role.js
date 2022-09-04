import axios from "axios";
import config from "../config/config";

const findAllSuper = async () => {
  try {
    const result = await axios.get(`${config.domain}/role/`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const findOne = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/role/${id}`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};

export default {
  findAllSuper,
  findOne,
};
