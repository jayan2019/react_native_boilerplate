import { GET_AUTH_USER_SUCCESS } from "../../../constants";
import { transformAuthUser } from "../../../helpers";

export default function getAuthUserSuccess(user) {
  const formattedUser = transformAuthUser(user);
  return dispatch => {
    dispatch({
      type: GET_AUTH_USER_SUCCESS,
      user: formattedUser
    });
  };
}
