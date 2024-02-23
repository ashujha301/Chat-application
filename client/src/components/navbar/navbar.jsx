import "./navbar.css";
import { useContext } from "react";
import { useNavigate} from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const MyNavbar = () => {
  const {logout} =useContext(AuthContext);
  
  const navigate = useNavigate();

  const submitHandler = async () => {
    await logout();
    navigate("/login",{replace: true});
  }

  

  return (
    <div className="navbar-container">
      <div className="navbar-main">
        <div className="brand ">ChatApp</div>
        <div className="user">Hello</div>
        <div className="logout" role="button" onClick={submitHandler}>Logout</div>
      </div>
    </div>
  );
};

export default MyNavbar;
