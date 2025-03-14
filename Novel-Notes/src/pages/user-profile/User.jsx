import React,  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./User.css";

const User = () => {

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No authentication token found.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${process.env.REACT_API_URL}/user/user-profile`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",  
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data);
          setLoading(false);
        } else {
          setError("Failed to fetch user data.");
          setLoading(false);
        }
      } catch (err) {
        setError("Error connecting to the server.");
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleLogOut = async () => {
    localStorage.removeItem("token");

    setUserData(null);  
    setLoading(false);  
    setError(null);  
    window.location.href = "/";
  };

  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your account?");
    if (confirmDelete) {
      try {
        const response = await fetch("http://localhost:5000/user/delete", {
          method: "DELETE",
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
          }
        });

        if (response.ok) {
          alert("Your account has been deleted.");
          localStorage.removeItem("token");
          window.location.href = "/";
        } else {
          alert("Failed to delete your account.");
        }
      } catch (err) {
        alert("Error deleting the account.");
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className="user-profile-container">
      <h2>Your Profile</h2>
        <div className="user-info">
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Username:</strong> {userData.username}</p>
        </div>

      <div className="buttons">
        <button onClick={handleLogOut} className="logout-btn">Log Out</button>
        <button onClick={handleDeleteAccount} className="delete-btn">Delete Account</button>
      </div>  
    </div>
  );
};

export default User;
