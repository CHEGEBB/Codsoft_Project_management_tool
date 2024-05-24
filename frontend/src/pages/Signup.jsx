import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Signup.scss";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [passwordStrength, setPasswordStrength] = useState("");
  const [passwordMatch, setPasswordMatch] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    if (e.target.name === "password") {
      setPasswordStrength(checkPasswordStrength(e.target.value));
    }

    if (e.target.name === "confirmPassword" || e.target.name === "password") {
      setPasswordMatch(e.target.value === formData.password ? "Passwords match" : "Passwords do not match");
    }
  };

  const checkPasswordStrength = (password) => {
    if (password.length < 6) return "Weak";
    if (password.length >= 6 && password.length < 10) return "Moderate";
    if (password.length >= 10) return "Strong";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    if (checkPasswordStrength(formData.password) === "Weak") {
      setErrorMessage("Password is too weak");
      return;
    }

    try {
      const response = await fetch("https://codsoft-project-management-tool-1.onrender.com/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: formData.email, password: formData.password })
      });

      if (response.ok) {
        setRegistrationSuccess(true);
        setTimeout(() => {
          setRegistrationSuccess(false);
          navigate("/login");
        }, 3000);
      } else if (response.status === 409) {
        setErrorMessage("Email is already registered");
      } else {
        setErrorMessage("Sign-up failed. Please try again.");
      }
    } catch (error) {
      console.error("Sign-up error:", error);
      setErrorMessage("Sign-up failed. Please try again later.");
    }
  };

  return (
    <div className="signup-container">
      <div className="overlay"></div>
      <div className="card">
        <div className="left">
          <div className="left-container">
            <nav className="horizontal-nav">
              <ul>
                <li>
                  <NavLink exact to="/" activeClassName="active">
                    Sign Up
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/login" activeClassName="active">
                    Login
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="signup-form">
              <h2>Create an Account</h2>
              {registrationSuccess && (
                <div className="alert alert-success">
                  <h2>Registration Successful</h2>
                  <p>Thank you for signing up. You can now log in to your account.</p>
                  <button><Link to="/login" style={{ color: 'white' }}>Login</Link></button>
                </div>
              )}
              {errorMessage && <div className="alert alert-error">{errorMessage}</div>}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <p style={{ color: passwordStrength === "Strong" ? "green" : "red" }}>
                    Password strength: {passwordStrength}
                  </p>
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password:</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                  <p style={{ color: passwordMatch === "Passwords match" ? "green" : "red" }}>
                    {passwordMatch}
                  </p>
                </div>
                <button type="submit">Sign Up</button>
              </form>
              <div className="login-link">
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
