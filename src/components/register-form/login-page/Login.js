import React, { useEffect, useState } from 'react';
import '../Form.css';
import { Link } from 'react-router-dom';
import Register from '../register-page/Register'
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import SuccessForm from '../../../assets/Goal (1).gif';
import LoginForm from '../../../assets/Computer login-rafiki.png'

function Login() {
  const [account, setAccount] = useState({
    firstName: '',
    password: '',
  });
  const form = useForm();
  const { register, control, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful } = formState;
  const onSubmit = (data) => {
    setAccount(() => {
      return {
        firstName: data.username,
        password: data.password,
      };
    });
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
  return (
    <div className="form-container">
      {account.firstName && account.password === 'admin' ? (
        <div className="flex-column align-center">
          <h2 className="successLoginHeader">You have succesfully loged in.</h2>
          <Link to="/products">
            <button className="successLoginBtn">Go back to Shoping</button>
          </Link>

          <img alt="Succes" src={SuccessForm} />
        </div>
      ) : (
        <div className='container'>
          <div className='input-container'>
        <form className="form-card" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="form-header">Login</h2>
          <input
            className="email-input"
            placeholder="Username"
            type="text"
            id="username"
            {...register('username', {
              required: 'Username is required',
            })}
          ></input>
          <p className="errorMsg">{errors.username?.message}</p>
          <input
            className="password-input"
            placeholder="Password"
            type="password"
            id="password"
            {...register('password', {
              required: {
                value: true,
                message: 'Password is required',
              },
            })}
          ></input>
          <p className="errorMsg">{errors.password?.message}</p>
          <button className="form-submitBtn" type="submit">
            Submit
          </button>
          <div>
            <p className="form-passwordReset">Forgot your password? </p>
            <Link to="/singUp">
              <p className="form-passwordReset">Dont have an account?</p>
            </Link>
          </div>
        </form>
        </div>
        <div className='image-container'>
          <img src={LoginForm}/>
        </div>
        </div>
      )}
    </div>
  );
}

export default Login;
