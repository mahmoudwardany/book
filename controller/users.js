const User=require('../model/UserModel')
const bcrypt=require('bcryptjs')

const updatedUser=async(req,res)=>{
  if(req.body.password){
    const salt=await bcrypt.genSalt(10)
    req.body.password=await bcrypt.hash(req.body.password,salt)
  }
  const updatedUser=await User.findByIdAndUpdate(req.params.id,{
    $set:{
      email:req.body.email,
      passwrod:req.body.password,
      name:req.body.name
    }
  },{new:true}).select('-password')
  res.status(201).json(updatedUser)
}

const getAllUser=async(req,res)=>{
  const user=await User.find().select("-password")
  res.status(200).json(user)
}

const getUser=async(req,res)=>{
  const user=await User.findById(req.params.id).select("-password")
  if(user){
    res.status(200).json(user)
  }else{
    res.status(400).json({message:"user not found"})
  }
}

const deleteUser=async(req,res)=>{
  const user=await User.findById(req.params.id).select("-password")
  if(user){
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json({message:"user deleted"})
  }else{
    res.status(400).json({message:"user not found"})
  }
}
module.exports={updatedUser,getAllUser,getUser,deleteUser}