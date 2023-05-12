const Author=require('../model/Author')
const getAllAuthors=async(req,res)=>{
    const{pageNum}=req.query
    const authorPerPage=2
    try {
        if(pageNum){
           const authors=await Author.find().
                                //1-1 0* 2 =0 w limit 2 =awl 2 0 l 2
                                //2-1 1* 2 =2 w limit 2 = tany 2 2 l 4
                                //3-1 2* 2 =4 w limit 2 = talt 2 4 l 6
                                skip((pageNum-1)*2)
                                .limit(authorPerPage)
        authors&&res.status(200).send(authors)  
        }else{
            const authors=await Author.find()
        authors&&res.status(200).send(authors) 
        }
       
     } catch (error) {
         res.status(500).json({message:"someThing went wrong"})
     }  
}
const getAuthor=async(req,res)=>{
    try {
       const author=await Author.findById(req.params.id)
       author&&res.status(200).json(author)
    } catch (error) {
        res.status(500).json({message:"someThing went wrong"})
    }  
}
const addAuthor=async(req,res)=>{
    try {
       const Newauthor=new Author(req.body).save()
       Newauthor&&res.status(200).json(Newauthor)
    } catch (error) {
        res.status(500).json({message:"someThing went wrong"})
    }  
}
const updateAuthor=async(req,res)=>{
    try {
       const updateAutor=await Author.findByIdAndUpdate(req.params.id,{
        $set:{
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            nationality:req.body.nationality,
            image:req.body.image
        }
       },{new:true})
       res.status(200).json(updateAutor)
    } catch (error) {
        res.status(500).json({message:"someThing went wrong"})
    }  
}
module.exports={getAllAuthors,getAuthor,addAuthor,updateAuthor}