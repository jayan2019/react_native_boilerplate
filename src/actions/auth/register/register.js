import { REGISTER, HTTP_REQUEST } from "../../../constants";
import registerFailure from "./registerFailure";
import registerSuccess from "./registerSuccess";

const register = formData => ({
  type: REGISTER,
  [HTTP_REQUEST]: {
    method: "POST",
    payload: formData,
    authorized: false,
    disableStateClear: true,
    route: "register",
    onError: registerFailure,
    onSuccess: registerSuccess
  }
});

export default register;
