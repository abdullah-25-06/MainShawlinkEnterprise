import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StoreIcon from "@mui/icons-material/Store";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AccessTimeFilled from "@mui/icons-material/AccessTimeFilled";
import AlarmOffIcon from '@mui/icons-material/AlarmOff';
import AlarmOff from "@mui/icons-material/AlarmOff";
import logo from "./logo-white.png"
import Button from 'react-bootstrap/Button';


  
    


const Sidebar = () => {
  
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">
            {/* <img style={{}} src={logo} alt="" /> */}
          </span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
        <Link to="/" style={{ textDecoration: "none", fontSize:"100px" }}>        
          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
          </Link>

          <Link to="/clockin" style={{ textDecoration: "none" }}>
            <li>
              <AccessTimeFilled className="icon" />
              <span>Clock-In</span>
            </li>
          </Link>
          <Link to="/clockout" style={{ textDecoration: "none" }}>
            <li>
              <AlarmOff className="icon" />
              <span>Clock Out</span>
            </li>
          </Link>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Register</span>
            </li>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Login</span>
            </li>
          </Link>
          <br></br>
          <Button variant="secondary">Logout</Button>
        </ul>
      </div>
      <div className="bottom">
      </div>
    </div>
  );
};

export default Sidebar;
