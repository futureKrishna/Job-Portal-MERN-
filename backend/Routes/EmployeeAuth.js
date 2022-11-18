const express=require('express');
const router=express.Router()
const db=require('../database/connecting2DB')
const User=require('../DB_models/employeeregister')
const body_parser=require('body-parser')
const bcrypt=require('bcryptjs')

router.use(body_parser.json())
router.use(body_parser.urlencoded({extended:true}))

router.post('/CreateEmployee',async (req,res)=>{
    const name = req.body.name
    const pemail = req.body.pemail
    const phone = req.body.phone
    const password = req.body.password
    const cpassword= req.body.cpassword

    console.log(name , pemail , phone , password , cpassword)

    try{
        const userExist=await User.findOne({pemail:pemail})
        if(userExist){
            res.status(422).json({success:false})
        }
        else if(password!=cpassword){
            res.status(422).json({success:false})
        }
        else{
            const user=new User({name,pemail,phone,password,cpassword})
            
            const registered=await user.save();
            if(registered){
                res.status(201).json({success:true})
            }
        }

    }catch(err){
        console.log(err)
    }

})

module.exports=router