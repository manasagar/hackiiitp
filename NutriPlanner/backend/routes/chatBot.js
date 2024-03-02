import express  from 'express';
import axios from 'axios';
const router=express.Router();

router
    .route('/')
    .post(async(req,res)=>{
        try{
            const reqBody=req.body.chat;
            const botChat = {
                'chat' : reqBody
            }
            const resBody=await axios.post('http://127.0.0.1:5000/chatbot',botChat);
            if(!resBody){
                return res.status(404).send("Error 404 not found")
            }
            return res.status(200).send(resBody.data);
        }
        catch(error){
            return res.status(404).send("Error 404 not found")
        }
    })

export default router