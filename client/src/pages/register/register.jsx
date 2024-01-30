// register.jsx
import { useContext, useState } from "react";
import "./register.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";


const Register = () => {
  const { registerInfo, updateRegisterInfo } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/register",
        {name,email,password}
      );

      // if(response && response.data){
      //   const {token ,user} = response.data;
      //   localStorage.setItem("userInfo",JSON.stringify({token,user}));
      // }

      //console.log(response);

      // Handle success (you might want to redirect the user or show a success message)
      toast.success("Registration successful", {
        position: "top-center",
        theme: "colored",
      });

      navigate("/");
    } catch (error) {
      console.error(error.response.data);

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
              <input
                type="text"
                id="username"
                onChange={(e) => { setName(e.target.value);
                  updateRegisterInfo((prevInfo) => ({
                  ...prevInfo,
                  name: e.target.value,
                }))}
                  
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                onChange={(e) => { setEmail(e.target.value);
                  updateRegisterInfo((prevInfo) => ({
                  ...prevInfo,
                  email: e.target.value,
                }))}
                  
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                onChange={(e) => { setPassword(e.target.value);
                  updateRegisterInfo((prevInfo) => ({
                  ...prevInfo,
                  password: e.target.value,
                }))}
                  
                }
              />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Register;
