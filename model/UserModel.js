const {model,Schema}=require('mongoose')

const userSchema=new Schema({
    name:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30,
        trim:true
    },
    email:{
        type:String,
        required:true,
        minLength:3,
        maxLength:100,
        trim:true,
        unique:true
    },
    passwrod:{
        type:String,
        required:true,
        minLength:6,
        maxLength:100,
        trim:true
    },
    isAdmin:{
        default:false,
        type:Boolean
    }
},{
    timestamps:true
})
const User=model('User',userSchema)

module.exports=User