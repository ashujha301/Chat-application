import { NavLink ,useNavigate} from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import "./login.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';  // Correct import
import { AuthContext } from "../../context/authContext";


const Login = () => {
  const {login,user} =useContext(AuthContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  
  

  const submitHandler = async () => {
    if (!email || !password) {
      toast.warn("Please fill in all the fields", {
        position: "top-center",
        theme: "colored"
      });
      return;
    }

    const { success, error } = await login(email, password);
    if (success) {
      toast.success("Login successful", {
        position: "top-center",
        theme: "colored"
      });
      navigate("/", { replace: true });
    } else {
      toast.error(`Login failed: ${error}`, {
        position: "top-center",
        theme: "colored"
      });
    }
  };

  // Redirect if user is already logged in
  useEffect(() => {
    
    if (user) {
      navigate("/", { replace: true });
    }
  },[]);
  

  return (
    <>
      <div className="auth-page-container">
        <div className="auth-form-container">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="text" id="email" placeholder="enter email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" placeholder="enter password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="button" className="login-button" onClick={submitHandler}>Login</button>
            <NavLink to={"/register"}>
              <button type="button" className="register-button">Register</button>
            </NavLink>
          </form>
        </div>
        <ToastContainer/>
      </div>
    </>
  );
};

export default Login;