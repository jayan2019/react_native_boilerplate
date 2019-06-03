import { RESET_PASSWORD, HTTP_REQUEST } from "../../../constants";
import resetPasswordFailure from "./resetPasswordFailure";
import resetPasswordSuccess from "./resetPasswordSuccess";

const resetPassword = formData => ({
  type: RESET_PASSWORD,
  [HTTP_REQUEST]: {
    method: "POST",
    payload: formData,
    authorized: true,
    disableStateClear: true,
    route: "user/update-password",
    onError: resetPasswordFailure,
    onSuccess: resetPasswordSuccess
  }
});

export default resetPassword;
