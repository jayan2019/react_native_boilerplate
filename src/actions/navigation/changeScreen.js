import { CHANGE_SCREEN } from "../../constants";

const changeScreen = screen => ({
  type: CHANGE_SCREEN,
  screen
});

export default changeScreen;
