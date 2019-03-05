import { configureStorage } from "../config";

const syncSubscription = async store => {
  await configureStorage.setItem(store.getState());
};

export default syncSubscription;
