const Notfound=(req,res,next)=>{
    const err=new Error(`Not found ${req.originalUrl}`)
    res.status(404);
    next(err)
}
const errHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode===200?500:res.statusCode
    res.status(statusCode).json({message:err.message})
}

module.exports={Notfound,errHandler}