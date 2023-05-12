const { getForgetPassword, sendForgotPasswordLink } = require('../controller/forget-password')
const express=require('express')
const router=express.Router()


router.route('/forget-password').get(getForgetPassword).post(sendForgotPasswordLink)

module.exports=router
