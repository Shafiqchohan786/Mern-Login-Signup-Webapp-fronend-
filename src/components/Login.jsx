import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
    showPassword: false,
  });

  const [error, setError] = useState(""); // error message state

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error

    try {
      const res = await axios.post("https://web-app-backend-red.vercel.app/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      const userName = res.data.name || "User";
      localStorage.setItem("userName", userName);

      toast.success(`Welcome back, ${userName}!`);
      navigate("/dashboard");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError("Invalid email or password.");
        toast.error("Invalid email or password.");
      } else if (error.response && error.response.data?.message) {
        setError(error.response.data.message);
        toast.error(error.response.data.message);
      } else {
        setError("Network error! Please try again.");
        toast.error("Network error!");
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Welcome Back 👋</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <div className="password-group">
            <input
              id="password"
              name="password"
              type={formData.showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span
              className="toggle-password"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  showPassword: !prev.showPassword,
                }))
              }
            >
              {formData.showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <div className="remember-me">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>

          <button type="submit">Login</button>
        </form>

        {error && (
          <div style={{ color: "red", marginTop: "10px", textAlign: "center" }}>
            {error}
          </div>
        )}

        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="link">
            Signup here
          </Link>
        </p>
      </div>
    </div>
  );
}
