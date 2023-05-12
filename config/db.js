const mongoose=require('mongoose')

const connectDB=async()=>{
    try {
        await mongoose.connect( process.env.MONGO_URL,{ useUnifiedTopology: true,useNewUrlParser:true })
 console.log('connect.........')
     } catch (error) {
         console.log('failed to connect DB..')
     }
}

module.exports=connectDB