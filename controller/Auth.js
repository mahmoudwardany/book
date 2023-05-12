const User=require('../model/UserModel')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const register=async(req,res)=>{
    let user= await User.findOne({email:req.body.email})
    user&&res.status(400).json({message:"this email already registerd"})

    const salt=bcrypt.hashSync(req.body.password,10)
   const newUser = new User({name:req.body.name,
    email:req.body.email,
    passwrod:salt,
    })
await newUser.save()
const token = await jwt.sign({id:newUser._id,isAdmin:newUser.isAdmin},process.env.SECRETKEY)
const {passwrod,...other}=newUser._doc
res.status(201).json({...other,token})
}
const login=async(req,res)=>{
    const {email,password}=req.body
    const user =await User.findOne({email})
    !user&& res.json({message:"user doesn't exists !"})
    const validPassword=await bcrypt.compare(password,user.passwrod)
    !validPassword&&res.json({message:"email or password is not correct"})
    const token = await jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.SECRETKEY)
    res.status(201).json({token})
}

module.exports={register,login}