const {model,Schema, default: mongoose}=require('mongoose')

const BookSchema=new Schema({
    title:{
        type:String,
        required:true,
        minLingth:3,
        maxLingth:30,
        trim:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Author"
    },
    description:{
    type:String,
    required:true,
    trim:true
    },
    price:{
     type:Number,
     required:true,
     min:0
    },
    cover:{
        type:String,
        required:true,
        enum:['soft cover','hard cover']
    }
},{
    timestamps:true
})
const BookModel=model('Book',BookSchema)
module.exports=BookModel