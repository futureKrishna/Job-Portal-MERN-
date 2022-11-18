const express=require('express');
const jwt=require('jsonwebtoken')
const router=express.Router()
const db=require('../database/connecting2DB')
const User=require('../DB_models/EMPregister')
const body_parser=require('body-parser')
const bcrypt=require('bcryptjs')
const authenticate=require("../middleware/authenticate")

router.use(body_parser.json())
router.use(body_parser.urlencoded({extended:true}))

router.post('/EMPregister',async (req,res)=>{
    const name = req.body.name
    const cname = req.body.cname
    const email = req.body.email
    const phone = req.body.phone
    const password = req.body.password
    const cpassword= req.body.cpassword

    console.log(name , cname , email , phone , password , cpassword)

    try{
        const userExist=await User.findOne({email:email})
        if(userExist){
            res.status(422).json({"success:false"})
        }
        else if(password!=cpassword){
            res.status(422).json({success:false})
        }
        else{
            const user=new User({name,cname,email,phone,password,cpassword})
            
            const registered=await user.save();
            if(registered){
                res.status(201).json({success:true})
            }
        }

    }catch(err){
        console.log(err)
    }
})

router.get("/createEmployee",authenticate, (req, res)=> {
    res.send("this is about")
    res.send(req.rootUser)
})

module.exports=router