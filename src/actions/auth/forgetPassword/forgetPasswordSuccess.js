import { FORGET_PASSWORD_SUCCESS } from "../../../constants";

const forgetPasswordSuccess = response => ({
  type: FORGET_PASSWORD_SUCCESS,
  message: response.status
});

export default forgetPasswordSuccess;
