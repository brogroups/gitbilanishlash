import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const LoginForm = () => {
    const [username, setUserName]=useState('')
    const [password, setPassword]=useState('')
    const navigate = useNavigate()

    const data = {
        username:username,
        password:password
    }
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://194.87.161.66:5000/user/userLogin',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    })
    .then((req)=>req.json())
    .then((res)=>{
        if(res?.token){
            localStorage.setItem('token',JSON.stringify(res.token))
            navigate('/')
        }
    })
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={username}
            onChange={(e)=>{setUserName(e?.target?.value)}}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e)=>{setPassword(e?.target?.value)}}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        <div className="register-redirect">
          Don't have an account?{" "}
          <span onClick={() => navigate("/register")} className="register-link">
            Register here
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
