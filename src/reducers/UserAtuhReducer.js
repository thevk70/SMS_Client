const userAuthReducer = (state = "true", action) => {
  switch (action.type) {
    case "userAuth":
      var rnd = Math.random();
      localStorage.setItem("userAuth", action.isAuth);
      return { isAuth: action.isAuth, num: rnd };
    default:
      return state;
  }
};

export default userAuthReducer;
