import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/public/userLogin/Login";
import Registration from "./components/public/userRegistration/Registration";
import ResetPassword from "./components/public/userLogin/ResetPassword";
import PasswordResetSuccess from "./components/public/userLogin/PasswordResetSuccess";
import WelcomePage from "./components/public/userLogin/WelcomePage";
import ErrorMsg from "./components/common/error/Error";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "./components/common/header/Header";
import CustomMenu from "./components/common/customMenu/CustomMenu";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState("false");
  const userAuth = useSelector((store) => store.userAuth);
  console.log("userAuth", userAuth);

  useEffect(() => {
    const isAuth = localStorage.getItem("userAuth");
    console.log("isAuth = ", isAuth);

    if (isAuth?.length > 0 && isAuth === "true") {
      setIsLoggedIn(isAuth);
    } else {
      setIsLoggedIn("false");
    }
  }, [userAuth.isAuth, userAuth.num]);

  console.log("isLoggedIn : ", isLoggedIn);

  return (
    <div className="App">
      <Router><Header />
        {/* {isLoggedIn === "true" ? (
          <Header />
        ) : (
          <>
            <Header /> <CustomMenu />
          </>
        )} */}
        <Routes>
          <Route path="/SMS_Client" element={<Login />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route
            path="/passwordResetSuccess"
            element={<PasswordResetSuccess />}
          />
          <Route path="/welcomePage" element={<WelcomePage />} />
          <Route path="/createuser" element={<Registration />} />
        </Routes>
        <ErrorMsg />
      </Router>
    </div>
  );
}

export default App;
