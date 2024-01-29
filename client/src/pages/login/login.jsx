import { NavLink ,useNavigate} from "react-router-dom";
import { useState } from "react";
import "./login.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';  // Correct import

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();


  const submitHandler = async () => {
    if (!email || !password) {
      toast.warn("Please Fill all the fields", {
        position: "top-center",
        theme: "colored"
      });
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:5000/api/login", { email, password });
  
      // Check if response is defined before accessing response.data
      if (response && response.data) {
        const { token, user } = response.data;
  
        localStorage.setItem("userInfo", JSON.stringify({ token, user }));
  
        //redirect to chat page after succesfull login
        navigate("/chat");
  
        toast.success("Login Successful", {
          position: "top-center",
          theme: "colored",
        });
      } else {
        // Handle the case when response or response.data is undefined
        console.error("Login failed. Response or response.data is undefined.");
      }
    } catch (error) {
      console.error(error.response.data);
  
      toast.error("Login failed. Invalid Email or Password.", {
        position: "top-center",
        theme: "colored",
      });
    }
  };

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