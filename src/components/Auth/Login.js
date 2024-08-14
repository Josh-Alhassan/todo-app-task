import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the login API
      const response = await axios.post("/api/login", {
        email,
        password,
      });

      // Save the token or perform necessary actions
      localStorage.setItem("token", response.data.token);

      // Redirect to the dashboard after successful login
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <div className="forgot-password">
        <a href="/forgot-password">Forgot Password?</a>
      </div>
    </div>
  );
};

export default Login;
