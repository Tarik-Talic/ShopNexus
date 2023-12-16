import React from 'react';
import '../Form.css';
import { useState, useEffect } from 'react';
import SingUp from '../../../assets/Sign up-bro.png';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
function Register() {
  const [account, setAccount] = useState({
    firstName: '',
    password: '',
  });
  console.log(account);
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
    console.log('form Submitted', data);
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
  return (
    <>
      <div className="form-container ">
        <div className="container">
          <div className="input-container">
            <form
              className="form-card singCard"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h2 className="form-header">Register</h2>
              <input
                className="name-input"
                placeholder="First Name"
                type="text"
                id="firstName"
                {...register('firstName', {
                  required: 'Name is required',
                })}
              />
              <p className="errorMsg">{errors.firstName?.message}</p>
              <input
                className="lastName-input"
                placeholder="Last Name"
                type="text"
                id="lastName"
                {...register('lastName', {
                  required: {
                    value: true,
                    message: 'Last Name is required',
                  },
                })}
              />
              <p className="errorMsg">{errors.lastName?.message}</p>
              <input
                className="password-input"
                placeholder="Username"
                type="text"
                id="username"
                {...register('username', {
                  required: {
                    value: true,
                    message: 'Username is required',
                  },
                })}
              />
              <p className="errorMsg">{errors.username?.message}</p>
              <input
                className="phoneNum-input"
                placeholder="Phone Number"
                type="number"
                id="phoneNumber"
                {...register('number', {
                  required: {
                    value: true,
                    message: 'Number is required',
                  },
                })}
              />
              <p className="errorMsg">{errors.number?.message}</p>
              <input
                className="date-input"
                placeholder="Date of Birth"
                type="date"
                id="date"
                {...register('date', {
                  required: {
                    value: true,
                    message: 'Date is required',
                  },
                })}
              />
              <p className="errorMsg">{errors.Date?.message}</p>
              <button className="form-submitBtn" type="submit">
                Submit
              </button>
            </form>
          </div>
          <div className="image-container">
            <img src={SingUp} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
