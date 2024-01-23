import Navbar from "../../components/navbar/navbar";
import "./register.css"; // Common styling for authentication pages

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="auth-page-container">
        <div className="auth-form-container">
          <h2>Register</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
