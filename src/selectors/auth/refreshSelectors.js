import { createSelector } from "reselect";

const getRefreshPage = state => state.auth.refreshPage;
const getRefreshPageData = createSelector(
  [getRefreshPage],
  ({ data }) => data
);

export const getRefreshStatus = createSelector(
  [getRefreshPageData],
  ({ refresh }) => refresh
);
