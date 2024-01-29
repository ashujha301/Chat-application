import { useState } from "react";
import "./register.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';  // Correct import
import {useNavigate} from  'react-router-dom';

const Register = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/register", { name, email, password });
      console.log(response.data);  // Log the response for debugging

      // Handle success (you might want to redirect the user or show a success message)
      toast.success("Registration successful", {
        position: "top-center",
        theme: "colored",
      });

      navigate("/chat");
    } catch (error) {
      console.error(error.response.data);  // Log the error response for debugging

      // Handle error (you might want to show an error message to the user)
      toast.error("Registration failed", {
        position: "top-center",
        theme: "colored",
      });
    }
  };

  return (
    <>
     
      <div className="auth-page-container">
        <div className="auth-form-container">
          <h2>Register</h2>
          <form onSubmit={submitHandler}>
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
            <button type="submit">Register</button>
          </form>
        </div>
        <ToastContainer/>
      </div>
    </>
  );
};

export default Register;
