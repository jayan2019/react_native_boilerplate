import { createSelector } from "reselect";

const getAuthPermissions = state => state.auth.permissions;
const getAuthPermissionsMeta = createSelector(
  getAuthPermissions,
  ({ meta }) => meta
);

export const getAuthPermissionsErrors = createSelector(
  [getAuthPermissionsMeta],
  ({ errors }) => errors
);

export const isAuthPermissionsHasErrors = createSelector(
  [getAuthPermissionsMeta],
  ({ hasErrors }) => hasErrors
);

export const isAuthPermissionsLoading = createSelector(
  [getAuthPermissionsMeta],
  ({ isLoading }) => isLoading
);

export const isAuthPermissionsLoaded = createSelector(
  [getAuthPermissionsMeta],
  ({ isLoaded }) => isLoaded
);

export const getAuthPermissionsData = createSelector(
  [getAuthPermissions],
  ({ data }) => data
);
