
const router=require('express').Router()
const { updatedUser, getAllUser, getUser, deleteUser } = require('../controller/users')
const {verifyTokenAndAdmin,verifyTokenAndAuthorzation}=require('../middlewares/verifyToken')

router.put('/:id',verifyTokenAndAuthorzation,updatedUser)
//get all users
router.get('/',verifyTokenAndAdmin,getAllUser)

//get one user
router.get('/:id',verifyTokenAndAuthorzation,getUser)

//delet one user 
router.delete('/:id',verifyTokenAndAuthorzation,deleteUser)
module.exports=router