import { createSelector } from "reselect";
import { find } from "lodash";

const getUserDefaults = state => state.auth.userDefaults;
const getUserDefaultsMeta = createSelector(
  [getUserDefaults],
  ({ meta }) => meta
);

export const getUserDefaultsErrors = createSelector(
  [getUserDefaultsMeta],
  ({ errors }) => errors
);

export const isUserDefaultsHasErrors = createSelector(
  [getUserDefaultsMeta],
  ({ hasErrors }) => hasErrors
);

export const isUserDefaultsLoading = createSelector(
  [getUserDefaultsMeta],
  ({ isLoading }) => isLoading
);

export const isUserDefaultsCreated = createSelector(
  [getUserDefaultsMeta],
  ({ created }) => created
);

export const getUserDefaultsData = createSelector(
  [getUserDefaults],
  ({ data }) => data
);

export const getUserDefaultsYearData = createSelector(
  getUserDefaultsData,
  data => find(data, o => o.name === "calendar_year_id")
);

export const getUserDefaultsYearId = createSelector(
  getUserDefaultsYearData,
  ({ default_value }) => default_value
);
