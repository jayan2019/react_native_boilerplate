import Config from "react-native-config";
import { GET_AUTH_TOKEN, HTTP_REQUEST } from "../../../constants";
import getAccessTokenFailure from "./getAccessTokenFailure";
import getAccessTokenSuccess from "./getAccessTokenSuccess";

const getAccessToken = formData => ({
  type: GET_AUTH_TOKEN,
  [HTTP_REQUEST]: {
    method: "POST",
    fullURL: true,
    payload: formData,
    authorized: false,
    disableStateClear: true,
    route: Config.APP_AUTH_URL,
    onError: getAccessTokenFailure,
    onSuccess: getAccessTokenSuccess
  }
});

export default getAccessToken;
