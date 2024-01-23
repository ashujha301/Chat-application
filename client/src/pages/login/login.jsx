import Navbar from "../../components/navbar/navbar";
import "./login.css"; // Common styling for authentication pages

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="auth-page-container">
        <div className="auth-form-container">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
