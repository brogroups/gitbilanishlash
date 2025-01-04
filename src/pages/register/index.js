import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const [username,setUserName]= useState('')
    const [password, setPassword]= useState('')
    const [email, setEmail]= useState('')

    const navigate = useNavigate()
    
    const data = {
        username:username,
        password:password,
        email:email
    }
  const handleSubmit = (e) => {
    e.preventDefault();
    
  fetch("http://194.87.161.66:5000/user/createUser",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(data)
  })
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data);
    
    if(data?.success){
        navigate('/login')
    }
  })
  .catch((error)=>{console.log(error)})
};

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e)=>{setUserName(e?.target?.value)}}
            placeholder="Enter your username"
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e)=>{setEmail(e?.target?.value)}}
            placeholder="Enter your email"
            
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
            
          />
        </div>
        <button type="submit" onClick={handleSubmit}  className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
