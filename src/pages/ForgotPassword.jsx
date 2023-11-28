import React, { useState } from 'react'
import './ForgotPassword.css'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Click forgget")
    try {
      const res = await axios.post(`${import.meta.env.VITE_SERVER}/api/v1/auth/forgot-password`, {
        email,
        newPassword,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <div className="forget-main">
        <div class="form-container">
          <div class="logo-container">
            Forgot Password
          </div>
          <form class="form" onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email" name="email" placeholder="Enter your email" required="" />
              <label for="email">New Password</label>
              <input
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                type="password" id="email" name="password" placeholder="Enter New Password" required="" />
            </div>
            <button class="form-submit-btn" type="submit">Send Email</button>
          </form>

          <p class="signup-link">
            Don't have an account?
            <Link to={'/register'} class="signup-link link"> Sign up now</Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword
