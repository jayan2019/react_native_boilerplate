import v4 from "uuid/v4";
import Config from "react-native-config";

export const userModel = {
  uuid: null,
  meta: {
    isLoading: false,
    hasErrors: false,
    oldValues: {},
    errors: {
      title: null,
      data: {}
    }
  },
  data: {
    id: null,
    name: null,
    email: null
  },
  relations: {
    roles: {
      isLoading: false,
      hasErrors: false,
      isLoaded: false,
      errors: {
        title: null,
        data: {}
      }
    }
  }
};

export const transformUsers = users => users.map(user => transformUser(user));

export const transformUser = (user, uuid) => ({
  ...userModel,
  uuid: uuid ? uuid : v4(),
  data: {
    id: user.id,
    name: user.name,
    email: user.email
  }
});

export const userDocumentById = userId => {
  return Config.REMOTE_URL + "/users/" + userId + "/documents";
};
