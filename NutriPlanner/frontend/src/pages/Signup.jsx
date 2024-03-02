import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/signup.css';
import { BackButton } from '../components/BackButton';
import { Loading } from '../components/Loading';

export const Signup = ({setToken}) => {
  const navigate = useNavigate();
  const [formData,setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:""
  });
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    const submitData = async()=>{
        try {
          setLoading(true);
          const response = await axios.post('api/user/register',formData);
          console.log(response.data);
          localStorage.setItem('token', response.data.token);
          setToken(response.data.token);
          navigate('/');
        } catch (error) {
          console.log(error);
          setError(error.response.data.data);
        }
        finally{
          setLoading(false);
        }
    }
    submitData();
  }

  const onChangeHandler =(e)=>{
    const {name,value} = e.target;
    setFormData((prevData)=>{
      return {
        ...prevData,
        [name] : value
      }
    })
  }

  return (
    <div className='signup_outer'>
    {loading && <Loading />}
    <BackButton />
    <div className='signup-main-container'>
      <div className="signup-container">
        <h1 className='signup-h1'>Sign Up</h1>
        <form className='signup-form' onSubmit={handleSubmit}>
          <input
            className='signup-input'
            type="text"
            placeholder='First Name'
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={onChangeHandler}
            autoComplete="off"
          />
          <br />
          <input
            className='signup-input'
            type="text"
            placeholder='Last Name'
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={onChangeHandler}
            autoComplete="off"
          />
          <br />
          <input
            className='signup-input'
            placeholder='Email'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={onChangeHandler}
            autoComplete="off"
          />
          <br />
          <input
            className='signup-input'
            placeholder='Password'
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={onChangeHandler}
            autoComplete="off"
          />
          <br />
          {error && <p className="error">{error}</p>}
          <div className="signup-wrapper">
          <button className='signup-btn' disabled={loading}>Sign up</button>
          </div>
        </form>
     </div>
    </div>
    </div>
  );
}

