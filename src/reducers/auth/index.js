import { combineReducers } from "redux";
import accessToken from "./accessToken";
import forgetPassword from "./forgetPassword";
import resetPassword from "./resetPassword";
import register from "./register";
import user from "./user";

const auth = combineReducers({
  accessToken,
  forgetPassword,
  resetPassword,
  register,
  user
});

export default auth;
