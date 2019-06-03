import { NavigationActions } from "react-navigation";
import { AppNavigator } from "../navigators";
import {
  CHANGE_SCREEN,
  RESET_STATE,
  DOWNLOAD_NAVIGATION,
  AUTH_NAVIGATION,
  GET_AUTH_TOKEN_SUCCESS
} from "../constants";

const ActionForLoggedOut = AppNavigator.router.getActionForPathAndParams(
  AUTH_NAVIGATION
);
const ActionForLoggedIn = AppNavigator.router.getActionForPathAndParams(
  DOWNLOAD_NAVIGATION
);

const stateForLoggedOut = AppNavigator.router.getStateForAction(
  ActionForLoggedOut
);
const stateForLoggedIn = AppNavigator.router.getStateForAction(
  ActionForLoggedIn,
  stateForLoggedOut
);

const initialState = { stateForLoggedOut, stateForLoggedIn };

const navigation = (state = initialState, action) => {
  let nextState;

  switch (action.type) {
    case AUTH_NAVIGATION:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case CHANGE_SCREEN:
      return {
        ...state,
        stateForLoggedIn: AppNavigator.router.getStateForAction(
          NavigationActions.navigate({ routeName: action.screen })
        )
      };
    case RESET_STATE:
      return {
        ...state,
        stateForLoggedIn: AppNavigator.router.getStateForAction(
          NavigationActions.navigate({ routeName: AUTH_NAVIGATION })
        )
      };
    case GET_AUTH_TOKEN_SUCCESS:
      return {
        ...state,
        stateForLoggedIn: AppNavigator.router.getStateForAction(
          NavigationActions.navigate({ routeName: DOWNLOAD_NAVIGATION })
        )
      };
    default:
      return {
        ...state,
        stateForLoggedIn: AppNavigator.router.getStateForAction(
          action,
          state.stateForLoggedIn
        )
      };
  }

  return nextState || state.stateForLoggedIn;
};

export default navigation;
