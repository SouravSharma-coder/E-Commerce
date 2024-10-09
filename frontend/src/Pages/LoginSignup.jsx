import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  const [state, setState] = useState("Login");

  const [formData, setFormData] = useState({

    username: "",
    password: "",
    email: ""

  })

  const changeHandler = (e) => {

    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const login = async () => {
    console.log("login Function Executed", formData);
    let responseData;
    await fetch('http://localhost:4000/Login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data)
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else {
      alert(responseData.errors)
    }
  }
  const signup = async () => {
    console.log("signup Function Executed", formData);
    let responseData;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data)
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else {
      alert(responseData.errors)
    }

  }

  return (
    <div className="loginsignup">
      <div className="loginsignup_container">
        <h1>{state}</h1>
        <div className="loginsignup_field">
          {state === "Sign Up" ? (
            <input type="text" name="username" autoCapitalize="off" value={formData.username} onChange={changeHandler} placeholder="your name" />
          ) : (
            <></>
          )}
          <input name='email' autoCapitalize="off" onChange={changeHandler} type="email" placeholder="Email Address" />
          <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
        </div>
        <button onClick={() => { state === "Login" ? login() : signup() }} type="submit">Continue</button>
        {state === "Sign Up" ? (<p className="loginsignup-login">
          Already have an account ?<span onClick={() => { setState("Login") }}>Login here</span>
        </p>) : (<p className="loginsignup-login">
          Already have an account ?<span onClick={() => { setState("Sign Up") }}>Sign Up here</span>
        </p>)
        }
        <div className="loginsignup_agree">
          <input type="checkbox" name="" id="" />
          <p>
            By continuing, I agree to the terms of use & privacy and policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
