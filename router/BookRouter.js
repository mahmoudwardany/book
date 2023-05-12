const router=require('express').Router()
const { getAllBooks, getBook, createBook, updateBook, deletBook } = require('../controller/BookController')
const {verifyTokenAndAdmin}=require('../middlewares/verifyToken')

router.get('/',getAllBooks)
router.get('/:id',getBook)

router.post('/',verifyTokenAndAdmin,createBook)
router.put('/:id',verifyTokenAndAdmin,updateBook)

router.delete('/:id',verifyTokenAndAdmin,deletBook)

module.exports=router
