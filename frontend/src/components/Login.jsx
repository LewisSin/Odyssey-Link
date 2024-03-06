import React, { useState } from 'react';
import { useMutation } from '@apollo/client';


function Login() {
  // State to store input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // State to store errors
  const [errors, setErrors] = useState({});

  // Validates the form fields
  const validateForm = () => {
    let tempErrors = {};
    tempErrors.email = email ? "" : "Email is required.";
    tempErrors.password = password ? "" : "Password is required.";
    // Add more validation rules as needed
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from submitting
    if (validateForm()) {
      console.log("Form is valid! Submitting...", { email, password });
      // Proceed with your login logic here (e.g., API call)
    } else {
      console.log("Form has errors.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
