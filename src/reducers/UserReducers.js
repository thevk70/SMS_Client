import { GET_ALL_USERS } from "../actiontypes/ActionTypes";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.response;
    default:
      return state;
  }
};

export default userReducer;
