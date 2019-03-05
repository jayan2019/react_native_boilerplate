import { createSelector } from "reselect";
import {
  isAccessTokenValid,
  isAccessTokenLoading,
  isAccessTokenHasErrors,
  getAccessTokenErrors
} from "./accessTokenSelectors";
import {
  getAuthUserId,
  isAuthUserLoading,
  isAuthUserHasErrors,
  getAuthUserErrors
} from "./userSelectors";
import {
  isAuthPermissionsLoaded,
  isAuthPermissionsLoading,
  isAuthPermissionsHasErrors,
  getAuthPermissionsErrors
} from "./permissionsSelectors";

export const isAuthorized = createSelector(
  [isAccessTokenValid, getAuthUserId, isAuthPermissionsLoaded],
  (isValid, userId, permissionsLoaded) =>
    isValid && !!userId && permissionsLoaded
);

export const isAuthLoading = createSelector(
  [isAccessTokenLoading, isAuthUserLoading, isAuthPermissionsLoading],
  (isTokenLoading, isUserLoading, isAuthPermissionsLoading) => {
    return isTokenLoading || isUserLoading || isAuthPermissionsLoading;
  }
);

export const isAuthHasErrors = createSelector(
  [isAccessTokenHasErrors, isAuthUserHasErrors, isAuthPermissionsHasErrors],
  (isTokenHasErrors, isUserHasErrors, isAuthPermissionsHasErrors) =>
    isTokenHasErrors || isUserHasErrors || isAuthPermissionsHasErrors
);

export const getAuthErrors = createSelector(
  [getAccessTokenErrors, getAuthUserErrors, getAuthPermissionsErrors],
  (tokenErrors, userErrors, permissionsErrors) =>
    tokenErrors || userErrors || permissionsErrors
);
