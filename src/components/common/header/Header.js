import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthorization } from "../../../actions/UserAction";
import { clearAuthenticationData } from "../../../config/utility";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = localStorage.getItem("userAuth");

  return (
    <>
      <div className="header-container">
        <div className="">
          <span>SCHOOL MANAGEMENT SYSTEM</span>
        </div>
        <div className="">
          <span>Call: +91 7903571542</span>
        </div>
      </div>
    </>
  );
};

export default Header;
