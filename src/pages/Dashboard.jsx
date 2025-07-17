import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import profilePic from "../assets/profile.jpg"; // Ensure this exists or change path

export default function Dashboard() {
  const navigate = useNavigate();

  // Read userName from localStorage
  const userName = localStorage.getItem("userName") || "User";

  const handleLogout = () => {
    localStorage.clear();
    toast.info("Logged out successfully.");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="nav-left">
          <h1>4Stack</h1>
          <a href="/">Home</a>
          <a href="#about">About</a>
        </div>
        <div className="nav-right">
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      <main className="dashboard-main">
        <h2>Welcome, {userName}!</h2>
        <p className="welcome-text">
          You are now logged in to 4Stack Blockchain Platform
        </p>

        <div className="dashboard-content">
          <div className="user-image-box">
            <img src={profilePic} alt="User" className="user-image" />
          </div>

          <div className="about-box" id="about">
            <h3>About 4Stack Blockchain</h3>
            <p>
              4Stack is a cutting-edge blockchain platform offering secure and decentralized
              solutions for modern applications. From smart contract deployment to transparent
              transactions, 4Stack ensures trust and innovation in every step. Empower your
              digital journey with the next generation of blockchain technology.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
