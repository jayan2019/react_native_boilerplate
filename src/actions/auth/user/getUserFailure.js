import { GET_AUTH_USER_FAILURE } from "../../../constants";

const getAuthUserFailure = errors => ({
  type: GET_AUTH_USER_FAILURE,
  errors
});

export default getAuthUserFailure;
