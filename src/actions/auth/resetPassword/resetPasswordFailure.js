import { RESET_PASSWORD_FAILURE } from "../../../constants";

const resetPasswordFailure = errors => ({
  type: RESET_PASSWORD_FAILURE,
  errors
});

export default resetPasswordFailure;
