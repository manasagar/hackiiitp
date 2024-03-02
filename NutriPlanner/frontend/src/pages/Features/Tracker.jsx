import React from 'react'
import { useState } from 'react';
import { BackButton } from '../../components/BackButton';
import '../../styles/nutrition.css';
import '../../styles/tracker.css';
import { Loading } from '../../components/Loading';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Tracker = () => {
  const navigate = useNavigate();
  const [formData,setFormData] = useState({
    morning:"",
    afternoon:"",
    evening:"",
    night:"",
  });

  const [error,setError] = useState("");
  const [loading,setLoading] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();
    const submitData = async()=>{
        try {
          setLoading(true);
          console.log(formData);
          const response = await axios.post('/api/tracker/',formData);
          navigate('/features/tracker/output', {
            state:{
              output : response.data
            }
          })
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
    <div className='tracker-outer'>
      {loading && <Loading />}
      <BackButton />
          <div className="nutrition-container">
            <form className='nutrition-form' onSubmit={handleSubmit}>
            <h1>Tracker Form</h1>
              <label className="nutrition-form-label">
                What did you eat for breakfast this morning?
                  <br />
                <input
                    type="text"
                    placeholder='Enter meal'
                    name="morning"
                    value={formData.morning}
                    onChange={onChangeHandler}
                    className="tracker-form-input"
                  />
                </label>
                <br />
                <label className="nutrition-form-label">
                What did you eat for lunch this afternoon?
                  <br />
                  <input
                    type="text"
                    placeholder='Enter meal'
                    name="afternoon"
                    value={formData.afternoon}
                    onChange={onChangeHandler}
                    className="tracker-form-input"
                  />
                  </label>
                <br />
                <label className="nutrition-form-label">
                What did you eat for snacks this evening?
                  <br />
                  <input
                    type="text"
                    placeholder='Enter meal'
                    name="evening"
                    value={formData.evening}
                    onChange={onChangeHandler}
                    className="tracker-form-input"
                  />
                  </label>
                <br />
                <label className="nutrition-form-label">
                What did you eat for dinner this night?
                  <br />
                  <input
                    type="text"
                    placeholder='Enter meal'
                    name="night"
                    value={formData.night}
                    onChange={onChangeHandler}
                    className="tracker-form-input"
                  />
                  </label>
                <br />
                {error && <p className="error">{error}</p>}
                <button className='nutrition-submit-button' type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
              </form>
       </div>
    </div>
  )
}
