import { createSelector } from "reselect";

const getResetPassword = state => state.auth.resetPassword;
const getResetPasswordMeta = createSelector(
  [getResetPassword],
  ({ meta }) => meta
);

export const getResetPasswordErrors = createSelector(
  [getResetPasswordMeta],
  ({ errors }) => errors
);

export const isResetPasswordHasErrors = createSelector(
  [getResetPasswordMeta],
  ({ hasErrors }) => hasErrors
);

export const isResetPasswordLoading = createSelector(
  [getResetPasswordMeta],
  ({ isLoading }) => isLoading
);

export const isResetPasswordSuccess = createSelector(
  [getResetPasswordMeta],
  ({ isSuccess }) => isSuccess
);

export const getResetPasswordMessage = createSelector(
  [getResetPasswordMeta],
  ({ message }) => message
);

// access token data selectors
export const getResetPasswordData = createSelector(
  [getResetPassword],
  ({ data }) => data
);

export const getResetPasswordFormData = createSelector(
  [getResetPasswordData],
  ({ formData }) => formData
);
