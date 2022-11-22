import '../styles/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import logoimage from '../assets/image/logoMypark.png'
import { useState } from 'react';

async function loginUser(credentials) {
  return fetch('http://localhost:3001/authentication/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

function LoginPage({ setToken }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    console.log(email);
    const token = await loginUser({
      email,
      password
    }

    );
    setToken(token);
    console.log("token is", token);
  }
  return (

    <div className="Auth-form-container">
      <title>Login</title>
      <form className="Auth-form" >
        <div className="Auth-form-content" style={{ borderradius: "8px" }}>
          <div className='space'>
            <img src={logoimage} width="40px" height="41px" className='image' />
            <div className='head'>
              <p className=" fonthead" >Direct Admin</p>
              <p className=" underhead" >Web Control Panel</p>
            </div>
          </div>

          <div className="form-group mt-3  ">
            <label  >อีเมลของคุณ</label>
            <input
              type="email"
              className="form-control mt-1 fontlabel"
              placeholder="admin@example.com"
              style={{ background: "#F0F0F0", width: "100%", height: "56px" }}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label >รหัสผ่านของคุณ</label>
            <input
              type="password"
              className="form-control mt-1 fontlabel"
              placeholder="Enter password"
              style={{ background: "#F0F0F0", width: "100%", height: "56px" }}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3 fontlabel">
            <button type="submit" className="btn btn-primary " onClick={handleSubmit}
              style={{ background: "#1A324A", width: "100%", height: "56px" }}>
              เข้าสู่ระบบ
            </button>
          </div>

        </div>
      </form>
    </div>
  )

}
export default LoginPage;