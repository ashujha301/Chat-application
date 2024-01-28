import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = () =>{
    
  }

  return (
    <>
      <div className="auth-page-container">
        <div className="auth-form-container">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="text" id="email" placeholder="enter email" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" placeholder="enter password" onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <button type="submit" className="login-button" onClick={submitHandler}>Login</button>
            <NavLink to={"/register"}>
              <button type="button" className="register-button">Register</button>
            </NavLink>
            </form>
        </div>
      </div>
    </>
  );
};

export default Login;
