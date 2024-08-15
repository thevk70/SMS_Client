import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/public/userLogin/Login";
import Registration from "./components/public/userRegistration/Registration";
import ResetPassword from "./components/public/userLogin/ResetPassword";
import PasswordResetSuccess from "./components/public/userLogin/PasswordResetSuccess";
import WelcomePage from "./components/public/userLogin/WelcomePage";
import ErrorMsg from "./components/common/error/Error";
function App() {
  return (
    <div className="App">
      <Router>
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
