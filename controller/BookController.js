const Book=require('../model/BookModel')


const getAllBooks=async(req,res)=>{
    const {minPrice,maxPrice}=req.query
    let books;
    try {
        if(minPrice && maxPrice){
            books=await Book.find({price:{$gte:minPrice,$lte:maxPrice}}
                ).populate('author'
                ,
                ["_id","firstName","lastName"])
            books&&res.status(200).send(books)
        }else{
            books=await Book.find().populate('author',
            ["_id","firstName","lastName"])
        books&&res.status(200).send(books) 
        }
        
     } catch (error) {
         res.status(500).json({message:"someThing went wrong"})
     }  
}

const getBook=async(req,res)=>{
    try {
        const book=await Book.findById(req.params.id).populate('author')
        book&&res.status(200).send(book)
    } catch (error) {
        res.status(500).json({message:"someThing went Wrong"})
    }
}

const createBook=async(req,res)=>{
    try {
       const NewBook=new Book(req.body).save()
       NewBook&&res.status(200).json(NewBook)
    } catch (error) {
        res.status(500).json({message:"someThing went wrong"})
    }  
}
const updateBook=async(req,res)=>{
    try {
       const updateBook=await Book.findByIdAndUpdate(req.params.id,{
        $set:{
            title:req.body.title,
            author:req.body.author,
            description:req.body.description,
            price:req.body.price,
            cover:req.body.cover
        }
       },{new:true})
       res.status(200).json(updateBook)
    } catch (error) {
        res.status(500).json({message:"someThing went wrong"})
    }  
}
const deletBook=async(req,res)=>{
    try {
       const findBook=await Book.findById(req.params.id)
if(findBook){
    await Book.findByIdAndDelete(req.params.id)
    res.status(200).json({message:"Book are deleted"})

}
    } catch (error) {
        res.status(500).json({message:"someThing went wrong"})
    }  
}
module.exports={getAllBooks,getBook,createBook,updateBook,deletBook}