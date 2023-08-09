import React, { useState } from "react";
import "./Login.css";
function Login(props) {
  // const [formData, setFormData] = useState({
  //   userName: "",
  //   password: "",
  // });
  // function handleChange(e) {
  //   const { name } = e.target;
  // }
  function handleSubmit(e) {
    e.preventDefault();
    // submitToApi(formData)
    // console.log(formData);
  }
  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2 className="login-header">{props.header}</h2>
        <input
          className="email-input"
          placeholder="Username"
          type="text"
          name="userName"
        ></input>
        <input
          className="password-input"
          placeholder="Password"
          type="password"
          name="password"
        ></input>
        <button className="login-submitBtn" type="submit">
          Submit
        </button>
        <p className="login-passwordReset">Forgot your password? </p>
      </form>
    </div>
  );
}

export default Login;
