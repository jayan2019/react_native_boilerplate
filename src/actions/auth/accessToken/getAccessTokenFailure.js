import { GET_AUTH_TOKEN_FAILURE } from "../../../constants";

const getAccessTokenFailure = errors => ({
  type: GET_AUTH_TOKEN_FAILURE,
  errors
});

export default getAccessTokenFailure;
