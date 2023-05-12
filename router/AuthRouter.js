const router=require('express').Router()
const { login, register } = require('../controller/Auth')

router.post('/register',register)

router.post('/login',login)

module.exports=router