const jwt=require('jsonwebtoken')
const User=require('../DB_models/EMPregister')

const authenticate=async(req,res,next)=>{
    try{
        const token=req.cookies.jwtoken
        const verifytoken=jwt.verify(token,process.env.SECRET_KEY)

        const rootUser=await User.findOne({_id:verifytoken._id,"tokens.token":token})

        if(!rootUser){
            throw new Error('User not Found')
        }

        req.token=token
        req.rootUser=rootUser
        req.UserID=rootUser._id

        next()

    }catch(err){
        res.status(401).send("Unauthorized")
        console.log(err)
    }
}

module.exports=authenticate