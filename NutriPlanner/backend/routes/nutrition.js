import express  from 'express';
import axios from 'axios';
const router=express.Router();

router
    .route('/')
    .post(async(req,res)=>{
        try{
        const details=[];
        let {age,height,weight,gender,no_days,no_meals,weightLoss}=req.body;
        details.push(age);
        details.push(height);
        details.push(weight);
        details.push(gender);
        if(no_days==0){
            details.push("No exercise");
        }
        else if(no_days<=2){
            details.push("Light exercise");
        }
        else if(no_days<=5){
            details.push("Exercise");
        }
        else if(no_days<=6){
            details.push("Very active");
        }
        else{
            details.push("Extra active");
        }
        if(no_meals<=5){
            details.push(no_meals);
        }
        else {
            details.push(String(5));
            no_meals = "5";
        }
        if(weightLoss=="Maintain Weight"){
            details.push(String(1));
        }
        else if(weightLoss=="Mild Weight Loss"){
            details.push(String(2));
        }
        else if(weightLoss=="Moderate Weight Loss"){
            details.push(String(3));
        }
        else{
            details.push(String(4));
        }
        const Plan= await axios.post('http://127.0.0.1:5000/nutrition',{details});
        res.status(200).send({weight : weight,height : height,num_meals : no_meals,plan : Plan.data});
        }catch(error){
            return res.status(401).send('Error');
        }
    })

    export default router;