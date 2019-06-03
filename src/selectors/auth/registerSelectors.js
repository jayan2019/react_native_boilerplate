import { createSelector } from "reselect";

const getRegister = state => state.auth.register;

// register meta selectors
export const getRegisterMeta = createSelector(
  getRegister,
  ({ meta }) => meta
);

export const getRegisterErrors = createSelector(
  getRegisterMeta,
  ({ errors }) => errors
);

export const isRegisterHasErrors = createSelector(
  getRegisterMeta,
  ({ hasErrors }) => hasErrors
);

export const isRegisterLoading = createSelector(
  getRegisterMeta,
  ({ isLoading }) => isLoading
);

export const isRegisterLoaded = createSelector(
  getRegisterMeta,
  ({ isLoaded }) => isLoaded
);

export const isRegisterSuccess = createSelector(
  getRegisterMeta,
  ({ isSuccess }) => isSuccess
);

export const isRegisterSubscribed = createSelector(
  getRegisterMeta,
  ({ isSubscribed }) => isSubscribed
);

export const getRegisterMessage = createSelector(
  [getRegisterMeta],
  ({ message }) => message
);

// register data selectors
export const getRegisterData = createSelector(
  getRegister,
  ({ data }) => data
);

export const getRegisterFormData = createSelector(
  getRegisterData,
  ({ formData }) => formData
);
