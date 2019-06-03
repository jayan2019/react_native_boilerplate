import { FORGET_PASSWORD_FAILURE } from "../../../constants";

const forgetPasswordFailure = errors => ({
  type: FORGET_PASSWORD_FAILURE,
  errors
});

export default forgetPasswordFailure;
