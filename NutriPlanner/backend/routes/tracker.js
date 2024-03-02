import express from 'express';
const router=express.Router();

router
    .route('/')
    .post(async(req,res)=>{
        try{
        console.log(req.body);
        const {morning,afternoon,evening,night}=req.body;
        res.status(200).send("Hi");
        }catch(error){
            console.log(error);
        }
    })

export default router;