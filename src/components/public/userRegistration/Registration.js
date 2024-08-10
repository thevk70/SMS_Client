import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../common/loading/Loading";
import InputBox from "../../common/input/Input";
import getBaseUrl from "../../../config/utility";
import { createUser } from "../../../actions/UserAction";

const Registration = () => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const [isLoading, setIsloading] = useState(false);
  const [isSubmit, setIsubmit] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");

  const singnUpHandler = () => {
    let obj = {
      fullName: fullName,
      phoneNumber: phoneNo,
      email: userEmail,
      password: userPassword,
      confirmPassword: userConfirmPassword,
    };
    if (
      userEmail.length > 0 &&
      fullName.length > 0 &&
      phoneNo.length > 0 &&
      userPassword.length > 0 &&
      userConfirmPassword.length > 0
    ) {
      setIsloading(true);
      dispatch(createUser(getBaseUrl() + "user/createUser", obj))
        .then(() => {
          setIsloading(false);
          nevigate("/");
        })
        .catch(setIsloading(false));
    } else {
      setIsubmit(true);
    }
  };

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      singnUpHandler();
    }
  };

  return (
    <>
      {isLoading === true && <Loading />}
      <div className="login-conainer">
        <div className="login-form-conatiner">
          <h1 className="login-header">Sign up</h1>

          <InputBox
            isSubmit={isSubmit}
            label="Enter Full-Name"
            type="text"
            placeholder="Enter full name"
            required={true}
            value={fullName}
            onChange={setFullName}
          />

          <InputBox
            isSubmit={isSubmit}
            label="Enter Phone Number"
            type="number"
            placeholder="Enter phone number"
            required={true}
            value={phoneNo}
            onChange={setPhoneNo}
          />

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
          />

          <InputBox
            isSubmit={isSubmit}
            label="Enter Confirm Password"
            type="password"
            placeholder="Enter Confirm password"
            required={true}
            value={userConfirmPassword}
            onChange={setUserConfirmPassword}
          />

          <div className="btn-container-login">
            <Link
              to="#"
              className="login-btn-cta width-100p"
              onClick={singnUpHandler}
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
