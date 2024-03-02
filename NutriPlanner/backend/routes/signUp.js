import express  from 'express';
import { db } from '../database/db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router=express.Router();

router
    .route('/register')
    .post(async(req,res)=>{
        try{
            const {firstName,lastName,email,password}=req.body;
            //Checking if all the  data exist
            if(!(firstName && lastName && email && password)){
                const data="All fields are necessary";
                res.status(400).send({data:data});
            }
            //Checking if the user already exists
            const id=await db.query("Select id from users where email=$1",[email]);
            // console.log(id);
            if(id.rowCount){
                const data="User already exists with this email";
                res.status(401).send({data:data});
            }
            //hashing a password
            const myEncPassword=await bcrypt.hash(password,10);
            const user=await db.query("INSERT INTO users (firstName,lastName,email,password) values ($1,$2,$3,$4)",[firstName,lastName,email,myEncPassword]);
            const findUser = await db.query("SELECT * from users where email=$1",[email]);
            // console.log(findUser);
            const token =jwt.sign(
                {id:findUser.rows[0].id},
                'shhhh',
                {
                    expiresIn:"2h"
                }
            )
            findUser.rows[0].password=undefined;
            
            res.status(201).send({user:findUser.rows[0],token:token});
        }
        catch(error){
            console.log(error);
        }
    })
router
    .route('/login')
    .post(async(req,res)=>{
        try{
            const {email,password}=req.body;
            if(!(email && password)){
                const data="Both fields are needed";
                res.status(400).send({data:data});
            }
            const user=await db.query("select id,email,password from users where email=$1",[email]);
            if(user.rowCount==0){
                const data="This user does not exist. Please signup first";
                res.status(401).send({data:data});
            }
            const hashString = user.rows[0].password.toString();
            if(user.rowCount && (await bcrypt.compare(password,hashString))){
                const token=jwt.sign(
                    {id:user.rows[0].id},
                    'shhhh',
                    {
                        expiresIn:'2h'
                    }
                )
                user.rows[0].password=undefined;
                const option={
                    expires:new Date(Date.now()+24*60*60*1000),
                    httpOnly:true
                }
                res.status(200).cookie("token",token,option).send({
                    success:true,
                    token,
                    user:user.rows[0]
                })
            }
            else{
                const data="Password is incorrect";
                res.status(402).send({data:data})
            }

        }
        catch(error){
            console.log(error);
        }
    })

router
    .route('/logout')
    .post((req,res)=>{
        try {
            res.cookie("token","",1);
            const data="User Logout Successfully";
            res.status(200).send({data:data});
        } catch (error) {
            console.log(error);
        }
    })

export default router;
