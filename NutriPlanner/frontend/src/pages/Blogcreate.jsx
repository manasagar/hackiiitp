import React from 'react'
import { useState,useEffect } from 'react';
import { Loading } from '../components/Loading';
import '../styles/signup.css';
import { BackButton } from '../components/BackButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/blogcreate.css';

export const Blogcreate = () => {
    const [blogForm,setBlogForm] = useState(
        {
            author:"",
            title:"",
            description:"",
            content:""
        }
    )
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (e)=>{
        e.preventDefault();
        const submitData = async()=>{
            try {
              setLoading(true);
              const response = await axios.post('/api/blogs/create',blogForm);
              console.log(response.data);
              navigate('/blogs');
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
        setBlogForm((prevData)=>{
          return {
            ...prevData,
            [name] : value
          }
        })
      }


  return (
    <>
      <BackButton />
    <div className='blogcreate-outer'>
    {loading ? <Loading /> : (
      <div className="blogcreate-container">
        <h1 className='blogcreate-h1'>Write a Blog</h1>
        <form className='blogcreate-form' onSubmit={handleSubmit}>
          <input
            className='blogcreate-input'
            type="text"
            placeholder='Enter your Name'
            name="author"
            value={blogForm.author}
            onChange={onChangeHandler}
            autoComplete="off"
            required
          />
          <br />
          <input
            className='blogcreate-input'
            type="text"
            placeholder='Enter Title'
            name="title"
            value={blogForm.title}
            onChange={onChangeHandler}
            autoComplete="off"
            required
          />
          <br />
          <input
            className='blogcreate-input'
            placeholder='Enter Description'
            type="text"
            name="description"
            value={blogForm.description}
            onChange={onChangeHandler}
            autoComplete="off"
            required
          />
          <br />
          <textarea
            rows={20}
            cols={120}
            className='blogcreate-input'
            placeholder='Enter your blog content #NutriPlanner'
            name="content"
            value={blogForm.content}
            onChange={onChangeHandler}
            autoComplete="off"
            required
          ></textarea>
          <br />
          {error && <p className="error">{error}</p>}
          <div className="blogcreate-wrapper">
            <button className='blog-create-btn' disabled={loading}>Post</button>
          </div>
        </form>
     </div>
    )}
    </div>
    </>
  )
}
