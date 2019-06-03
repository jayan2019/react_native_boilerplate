import { createSelector } from "reselect";

const getUserImage = state => state.auth.userImage;
const getUserImageMeta = createSelector(
  [getUserImage],
  ({ meta }) => meta
);

export const getUserImageErrors = createSelector(
  [getUserImageMeta],
  ({ errors }) => errors
);

export const isUserImageHasErrors = createSelector(
  [getUserImageMeta],
  ({ hasErrors }) => hasErrors
);

export const isUserImageLoading = createSelector(
  [getUserImageMeta],
  ({ isLoading }) => isLoading
);

export const isUserImageCreated = createSelector(
  [getUserImageMeta],
  ({ created }) => created
);

export const getUserImageData = createSelector(
  [getUserImage],
  ({ data }) => data
);
