import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.scss';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [passwordMatch, setPasswordMatch] = useState('');

  const checkPasswordStrength = (password) => {
    if (password.length < 6) return 'Weak';
    if (password.length >= 6 && password.length < 10) return 'Moderate';
    if (password.length >= 10) return 'Strong';
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    if (checkPasswordStrength(password) === 'Weak') {
      setErrorMessage('Password is too weak');
      return;
    }

    try {
      const response = await fetch('https://codsoft-project-management-tool-1.onrender.com/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setSuccessMessage('Sign-up successful!');
        setTimeout(() => {
          setSuccessMessage('');
          navigate('/login');
        }, 3000);
      } else if (response.status === 409) {
        setErrorMessage('Email is already registered');
      } else {
        setErrorMessage('Sign-up failed. Please try again.');
      }
    } catch (error) {
      console.error('Sign-up error:', error);
      setErrorMessage('Sign-up failed. Please try again later.');
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordStrength(checkPasswordStrength(newPassword));
    if (newPassword !== confirmPassword) {
      setPasswordMatch('Passwords do not match');
    } else {
      setPasswordMatch('Passwords match');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPwd = e.target.value;
    setConfirmPassword(confirmPwd);
    if (password !== confirmPwd) {
      setPasswordMatch('Passwords do not match');
    } else {
      setPasswordMatch('Passwords match');
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
                  <Link to="/" className="active">Sign Up</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </nav>
            <div className="signup-form">
              <h2>Sign Up</h2>
              {successMessage && <div className="alert alert-success">{successMessage}</div>}
              {errorMessage && <div className="alert alert-error">{errorMessage}</div>}
              <form onSubmit={handleSignup}>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                  <p style={{ color: passwordStrength === 'Strong' ? 'green' : 'red' }}>
                    Password strength: {passwordStrength}
                  </p>
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password:</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                  />
                  <p style={{ color: passwordMatch === 'Passwords match' ? 'green' : 'red' }}>
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

export default Signup;
