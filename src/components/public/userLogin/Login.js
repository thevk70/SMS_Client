import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import getBaseUrl from "../../../config/utility";
import Loading from "../../common/loading/Loading";
import InputBox from "../../common/input/Input";
import LoginAction from "../../../actions/LoginAction";

const Login = () => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const [isSubmit, setIsubmit] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoading, setIsloading] = useState(false);

  // const data = useSelector((store) => store.user);

  const loginHandler = () => {
    if (userEmail.length > 0 && userPassword.length > 0) {
      setIsloading(true);
      var loginObj = {
        email: userEmail,
        password: userPassword,
      };
      dispatch(LoginAction(getBaseUrl() + "user/loginUser", loginObj))
        .then((responseResult) => {
          if (responseResult.message.toLowerCase() === "success") {
            sessionStorage.setItem("token", responseResult.token);
          }
          // var user = jwtDecode(responseResult.token);
          // var UserId = user.UserId;
          setIsloading(false);
          nevigate("/welcomePage");
        })
        .catch(() => {
          setIsloading("false");
          alert("Please check your Username or Password and try again.");
        });
    } else {
      setIsubmit(true);
    }
  };

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      loginHandler();
    }
  };

  return (
    <>
      {isLoading === true && <Loading />}
      <div className="login-conainer">
        <div className="login-form-conatiner">
          <h1 className="login-header">Log in</h1>

          <InputBox
            isSubmit={isSubmit}
            label="Enter Email"
            type="email"
            placeholder="Enter email"
            required={true}
            value={userEmail}
            onChange={setUserEmail}
          />

          <InputBox
            isSubmit={isSubmit}
            label="Enter Password"
            type="password"
            placeholder="Enter password"
            required={true}
            value={userPassword}
            onChange={setUserPassword}
            onKeyUp={handleKeypress}
          />

          <div className="btn-container-login">
            <Link
              to="#"
              className="login-btn-cta width-100p"
              onClick={loginHandler}
            >
              Log in
            </Link>
          </div>
          <div className="btn-container-login">
            <Link to={"/resetPassword"} className="forgotPass-text">
              Forgot Password?
            </Link>
            <hr />
            <Link to={"/createuser"} className="forgotPass-text">
              Create New Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
