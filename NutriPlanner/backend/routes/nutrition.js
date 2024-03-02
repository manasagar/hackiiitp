import express  from 'express';
import axios from 'axios';
const router=express.Router();

const getData = async(listOfDictionaries)=>{
    let out=[]
        let ans = [{}, {}, {}, {}, {}, {}, {}];
    
        for (let i = 0; i < listOfDictionaries.length; i++) {
        let dictionary = listOfDictionaries[i];
        let ket=Object.keys(dictionary)
        let c=0
        
        for(let j=0;j<ket.length;j++){
            let m={}
        m[ket[j]]=dictionary[ket[j]]
        ans[j][i]=m;
    }
        }
    return ans;
}

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
        const listOfDictionaries= await axios.post('http://127.0.0.1:5000/nutrition',{details});
        console.log(listOfDictionaries)
        const temp=listOfDictionaries.data;
        const ans = await getData(temp);
        res.status(200).send({height:height,weight:weight,plan:ans});

        }catch(error){
            return res.status(401).send('Error');
        }
    })

    export default router;