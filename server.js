const express=require('express')
const cors=require('cors')
const logger=require('./middlewares/logger')
const Notfound = require('./middlewares/Notfound')
const runDb = require('./config/db')
const path=require('path')
const helmet=require('helmet')
require('dotenv').config()

const app=express()

//Database
runDb()
//static folder
app.use(express.static(path.join(__dirname,"images")))
//Helmet
app.use(helmet())
//cors policy
app.use(cors())

//Apply Middlerware
app.use(logger)
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//set view engine
app.set('view engine','ejs')

//router
app.use('/api/authors',require('./router/AuthorRouter'))
app.use('/api/books',require('./router/BookRouter'))
app.use('/api/auth',require('./router/AuthRouter'))
app.use('/api/user',require('./router/userRouter'))
app.use('/api/upload',require('./router/upload'))



//handle error middleware
app.use(Notfound.Notfound)
app.use (Notfound.errHandler)

const port =process.env.PORT||8000
app.listen(port,()=>{
    console.log('server is running...')
})