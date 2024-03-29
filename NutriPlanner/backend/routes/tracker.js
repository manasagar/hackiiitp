import express from 'express';
import axios from 'axios';
const router=express.Router();

router
    .route('/')
    .post(async(req,res)=>{
        try{
        const {morning,afternoon,evening,night}=req.body;
        let food=[];
        if(morning) food.push(morning);
        if(afternoon) food.push(afternoon);
        if(evening) food.push(evening);
        if(night) food.push(night);

        if(food.length==0){
            return res.status(400).send("Atleast one field is necessary");
        }
        const resBody=await axios.post('http://localhost:5000/food_info',{food : food});
        const foods = resBody.data;
        const foodsArray = Object.keys(foods).map(food => ({ name: food, nutrients: foods[food] }));
        res.status(200).send(foodsArray);
        }catch(error){
            res.status(401).send('Try Again');
        }
    })

export default router;