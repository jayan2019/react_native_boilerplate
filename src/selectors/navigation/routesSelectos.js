import { createSelector } from "reselect";
import { HOME_NAVIGATION } from "../../constants";

const getNavigation = state => state.navigation;

const getNavigationRoutes = createSelector(
  getNavigation,
  ({ routes }) => routes
);

export const getGuestNavigationRoutes = createSelector(
  getNavigationRoutes,
  routes => routes.find(r => r.key === HOME_NAVIGATION)
);

export const isGuestDrawerOpen = createSelector(
  getGuestNavigationRoutes,
  ({ isDrawerOpen }) => isDrawerOpen
);
