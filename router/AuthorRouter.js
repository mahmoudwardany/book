const router=require('express').Router()
const {verifyTokenAndAdmin}=require('../middlewares/verifyToken')
const { addAuthor, getAllAuthors, updateAuthor } = require('../controller/AuthorController')
router.get('/',getAllAuthors)
router.get('/:id',addAuthor)
router.post('/',verifyTokenAndAdmin,addAuthor)
router.put('/:id',verifyTokenAndAdmin,)

router.delete('/:id',verifyTokenAndAdmin,updateAuthor)

module.exports=router
