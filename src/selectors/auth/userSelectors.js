import { createSelector } from "reselect";

const getAuthUser = state => state.auth.user;
const getAuthUserMeta = createSelector(
  [getAuthUser],
  ({ meta }) => meta
);

export const getAuthUserErrors = createSelector(
  [getAuthUserMeta],
  ({ errors }) => errors
);

export const isAuthUserHasErrors = createSelector(
  [getAuthUserMeta],
  ({ hasErrors }) => hasErrors
);

export const isAuthUserLoading = createSelector(
  [getAuthUserMeta],
  ({ isLoading }) => isLoading
);

export const isAuthUserLoaded = createSelector(
  [getAuthUserMeta],
  ({ isLoaded }) => isLoaded
);

export const getAuthUserData = createSelector(
  [getAuthUser],
  ({ data }) => data
);

export const getAuthUserId = createSelector(
  [getAuthUserData],
  ({ id }) => id
);

export const getAuthUserUniqueId = createSelector(
  [getAuthUserData],
  ({ uuid }) => uuid
);

export const getAuthUserAvatar = createSelector(
  [getAuthUserData],
  ({ avatar }) => avatar
);

export const getAuthUserName = createSelector(
  [getAuthUserData],
  ({ name }) => name
);

export const getAuthUserEmail = createSelector(
  [getAuthUserData],
  ({ email }) => email
);

export const getUserSkipDownload = createSelector(
  [getAuthUserData],
  ({ skip }) => skip
);

export const getDetailActivityEnabled = createSelector(
  [getAuthUserData],
  ({ enable_detail_activity }) => enable_detail_activity
);
