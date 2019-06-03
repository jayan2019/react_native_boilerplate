import { createSelector } from "reselect";

const getUserInterface = state => state.userInterface;

const getHomeMenu = createSelector(
  getUserInterface,
  ({ guestMenu }) => guestMenu
);

export const getHomeMenuItems = createSelector(
  [getHomeMenu],
  ({ items }) => items
);
