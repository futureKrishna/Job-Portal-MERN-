const express=require('express');
const env=require('dotenv')
const jwt=require('jsonwebtoken')
const router=express.Router()
const db=require('../database/connecting2DB')
const User=require('../DB_models/JSregister')
const body_parser=require('body-parser')
const bcrypt=require('bcryptjs')
const authenticate=require("../middleware/authenticate")

router.use(body_parser.json())
router.use(body_parser.urlencoded({extended:true}))

router.post('/JSlogin',async (req,res)=>{

    const email = req.body.email
    const password=req.body.password

    try{
        let token;
        const userLoginDetails=await User.findOne({email:email})
        if(!email || !password){
            res.status(400).json({success:false})
        }
        else if(userLoginDetails){
            const decrypt= await bcrypt.compare(password,userLoginDetails.password)

            token= await userLoginDetails.generateAuthToken();

            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            })

            if(!decrypt){
                res.status(400).json({success:false})
            }
            else{
                res.status(201).json({success:true})
            }
        }
        else{
            res.status(400).json({success:false})
        }
    }
    catch(err){
        console.log(err)
    }
})


module.exports=router