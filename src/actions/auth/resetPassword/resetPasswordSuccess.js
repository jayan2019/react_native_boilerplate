import { RESET_PASSWORD_SUCCESS } from "../../../constants";

const resetPasswordSuccess = response => ({
  type: RESET_PASSWORD_SUCCESS,
  message: response.status
});

export default resetPasswordSuccess;
