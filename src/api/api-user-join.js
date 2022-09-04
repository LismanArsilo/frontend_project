import axios from "axios";
import config from "../config/config";

const findAllLineAddress = async () => {
  try {
    const result = await axios.get(`${config.domain}/lineaddress/`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const findOneLineAddress = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/lineaddress/${id}`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const findAllRoles = async () => {
  try {
    const result = await axios.get(`${config.domain}/roles/`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};
const findOneRoles = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/roles/${id}`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};

export default {
  findAllLineAddress,
  findOneLineAddress,
  findAllRoles,
  findOneRoles,
};
