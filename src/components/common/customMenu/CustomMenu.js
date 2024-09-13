import "./CustomMenu.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthorization } from "../../../actions/UserAction";
import { clearAuthenticationData } from "../../../config/utility";

const CustomMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar">
        <div className="nav-item">
          <ul>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Protfolio</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="">
          {" "}
          <div className="sigout_btn-container">
            <div
              className="signout-btn"
              onClick={() => {
                clearAuthenticationData();
                dispatch(setAuthorization("false")).then(() =>
                  navigate("/SMS_Client")
                );
              }}
            >
              Sign out
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomMenu;
