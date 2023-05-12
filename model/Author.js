const {model,Schema}=require('mongoose')

const AuthorSchema=new Schema({
    firstName:{
        type:String,
        required:true,
        minLingth:3,
        maxLingth:30,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        minLingth:3,
        maxLingth:30,
        trim:true
    },
    nationality:{
        type:String,
        required:true,
        minLingth:2,
        maxLingth:100,
        trim:true
    },
    image:{
        type:String,
        default:"default-avatar.png"
    }
},{
    timestamps:true
})
const AuthorModel=model('Author',AuthorSchema)
module.exports=AuthorModel