import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import { BackButton } from '../../components/BackButton';
import { Loading } from '../../components/Loading';
import '../../styles/chatbot.css';
import axios from 'axios';

export const Chatbot = () => {
  const [output,setOutput] = useState("");
  const [isoutput,setIsOutput] = useState(true);
  const [inputData,setInputData] = useState({
    chat:""
  });
  const [loading,setLoading] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();
      const submitData = async()=>{
        try {
          setLoading(true);
          setIsOutput(false);
          const response = await axios.post('/api/chatbot/',inputData);
          console.log(response.data);
          setOutput(response.data);
          setIsOutput(true);
        } catch (error) {
          console.log(error);
        }
        finally{
          setLoading(false);
          setInputData({
            chat:""
          })
        }
    }
    submitData();
  }

  const onChangeHandler = (e)=>{
      const {name,value} = e.target;
      setInputData((prevData)=>{
        return {
          ...prevData,
          [name] : value
        }
      })
  }


  return (
    <div className='chatbot-outer'>
      <BackButton />
    <div className='main-chatbot-container'>
      {loading && <Loading />}
      <div className="chatbot-output">
          {isoutput && 
              <div className="output-section">
                  <p className="output-heading">{output}</p>
              </div>
          }
          </div>
          <div className="chatbot-input">
          <form className='chatbot-form' onSubmit={handleSubmit}>
              <input
                  type="text"
                  className="chat-input"
                  placeholder='Ask Anything...'
                  id="chat"
                  name="chat"
                  value={inputData.chat}
                  onChange={onChangeHandler}
                  
              />
              <IoSend className='chatbot-arrow' size={30} onClick={handleSubmit} />
          </form>
          </div>
      </div>
    </div>
  );
}
