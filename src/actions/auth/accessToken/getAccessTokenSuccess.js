import { GET_AUTH_TOKEN_SUCCESS } from "../../../constants";
import { transformAccessToken } from "../../../helpers";

const getAccessTokenSuccess = token => ({
  type: GET_AUTH_TOKEN_SUCCESS,
  token: transformAccessToken(token)
});

export default getAccessTokenSuccess;
