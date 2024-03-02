import express from "express";
import { db } from "../database/db.js";

const router=express.Router();

router
    .route('/all')
    .get(async(req,res)=>{
        try{
        const resBody=await db.query('Select * from blogs order by id asc');
        res.status(200).send(resBody.rows);
        }
        catch(error){
            res.status(400).send('No data found');
        }
    })


router
    .route('/create')
    .post(async(req,res)=>{
        try{
            const {title,description,content,author}=req.body;
            await db.query('Insert into blogs(title,description,content,author) values($1,$2,$3,$4)',[title,description,content,author]);

            res.status(200).send("Successfully created blog post");
        }
        catch(error){
            res.status(400).send('No data found');
        }
    })

export default router;

