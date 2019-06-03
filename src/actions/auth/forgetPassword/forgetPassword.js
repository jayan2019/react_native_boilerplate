import { FORGET_PASSWORD, HTTP_REQUEST } from "../../../constants";
import forgetPasswordFailure from "./forgetPasswordFailure";
import forgetPasswordSuccess from "./forgetPasswordSuccess";

const forgetPassword = formData => ({
  type: FORGET_PASSWORD,
  [HTTP_REQUEST]: {
    method: "POST",
    payload: formData,
    authorized: false,
    disableStateClear: true,
    route: "password/email",
    onError: forgetPasswordFailure,
    onSuccess: forgetPasswordSuccess
  }
});

export default forgetPassword;
