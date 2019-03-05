import moment from "moment";
import { createSelector } from "reselect";

const getAccessToken = state => state.auth.accessToken;
const getAccessTokenMeta = createSelector(
  [getAccessToken],
  ({ meta }) => meta
);

export const getAccessTokenErrors = createSelector(
  [getAccessTokenMeta],
  ({ errors }) => errors
);

export const getAccessTokenCreated = createSelector(
  [getAccessTokenMeta],
  ({ created }) => created
);

export const isAccessTokenHasErrors = createSelector(
  [getAccessTokenMeta],
  ({ hasErrors }) => hasErrors
);

export const isAccessTokenLoading = createSelector(
  [getAccessTokenMeta],
  ({ isLoading }) => isLoading
);

export const isAccessTokenLoaded = createSelector(
  [getAccessTokenMeta],
  ({ isLoaded }) => isLoaded
);

// access token data selectors
export const getAccessTokenData = createSelector(
  [getAccessToken],
  ({ data }) => data
);

export const getAccessTokenToken = createSelector(
  [getAccessTokenData],
  ({ token }) => token
);

export const getAccessTokenRefreshToken = createSelector(
  [getAccessTokenData],
  ({ refreshToken }) => refreshToken
);

export const getAccessTokenTokenType = createSelector(
  [getAccessTokenData],
  ({ tokenType }) => tokenType
);

export const getAccessTokenExpiresIn = createSelector(
  [getAccessTokenData],
  ({ expiresIn }) => expiresIn
);

export const isAccessTokenValid = createSelector(
  [getAccessTokenCreated, getAccessTokenExpiresIn],
  (created, expiresIn) =>
    moment().isBefore(moment(created).add(expiresIn, "seconds"))
);

export const getAccessTokenFormData = createSelector(
  [getAccessTokenData],
  ({ formData }) => formData
);
