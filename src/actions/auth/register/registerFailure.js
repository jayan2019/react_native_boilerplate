import { REGISTER_FAILURE } from "../../../constants";

const registerFailure = errors => ({
  type: REGISTER_FAILURE,
  errors
});

export default registerFailure;
