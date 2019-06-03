import { GET_AUTH_USER, HTTP_REQUEST } from "../../../constants";
import getUserFailure from "./getUserFailure";
import getUserSuccess from "./getUserSuccess";

const getAuthUser = () => ({
  type: GET_AUTH_USER,
  [HTTP_REQUEST]: {
    method: "GET",
    route: "user",
    onError: getUserFailure,
    onSuccess: getUserSuccess
  }
});

export default getAuthUser;
