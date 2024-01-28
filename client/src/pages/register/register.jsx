import { useState } from "react";
import "./register.css";

const Register = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = () =>{

  }

  return (
    <>
     
      <div className="auth-page-container">
        <div className="auth-form-container">
          <h2>Register</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">Name:</label>
              <input type="text" id="username" onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type="submit" onClick={submitHandler}>Register</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
