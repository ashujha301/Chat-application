
import './register.css';

const Register = () => {
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

