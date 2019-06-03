import { createSelector } from "reselect";

const getForgetPassword = state => state.auth.forgetPassword;
const getForgetPasswordMeta = createSelector(
  [getForgetPassword],
  ({ meta }) => meta
);

export const getForgetPasswordErrors = createSelector(
  [getForgetPasswordMeta],
  ({ errors }) => errors
);

export const isForgetPasswordHasErrors = createSelector(
  [getForgetPasswordMeta],
  ({ hasErrors }) => hasErrors
);

export const isForgetPasswordLoading = createSelector(
  [getForgetPasswordMeta],
  ({ isLoading }) => isLoading
);

export const isForgetPasswordSuccess = createSelector(
  [getForgetPasswordMeta],
  ({ isSuccess }) => isSuccess
);

export const getForgetPasswordMessage = createSelector(
  [getForgetPasswordMeta],
  ({ message }) => message
);

// access token data selectors
export const getForgetPasswordData = createSelector(
  [getForgetPassword],
  ({ data }) => data
);

export const getForgetPasswordFormData = createSelector(
  [getForgetPasswordData],
  ({ formData }) => formData
);
