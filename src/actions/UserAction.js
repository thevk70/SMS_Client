import {
  GET_ALL_USERS,
  CREATE_USER,
  userAuth,
} from "../actiontypes/ActionTypes";

const getAllUsers = (url) => {
  return {
    type: GET_ALL_USERS,
    meta: {
      api: {
        method: "Get",
        url: url,
      },
    },
  };
};

const createUser = (url, obj) => {
  console.log(obj);

  return {
    type: CREATE_USER,
    resolve: true,
    meta: {
      api: {
        method: "post",
        url: url,
        data: obj,
      },
    },
  };
};

const setAuthorization = (isAuth) => {
  return {
    type: userAuth,
    isAuth: isAuth,
  };
};

export { getAllUsers, createUser, setAuthorization };
