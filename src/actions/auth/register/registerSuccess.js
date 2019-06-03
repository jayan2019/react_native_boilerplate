import { REGISTER_SUCCESS } from "../../../constants";

const registerSuccess = response => ({
  type: REGISTER_SUCCESS,
  message: response.status
});

export default registerSuccess;
