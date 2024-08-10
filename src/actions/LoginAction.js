const LoginAction = (url, loginObj) => {
    console.log("loginObj : ",loginObj);
    
  return {
    type: "LOGIN",
    resolve: true,
    meta: {
      api: {
        method: "post",
        url: url,
        data: loginObj,
      },
    },
  };
};

export default LoginAction;