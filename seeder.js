const runDb = require('./config/db')
const { books,authors } = require('./data')
const Book=require('./model/BookModel')
const Author=require('./model/Author')

require('dotenv').config()
//connection to db
runDb()

//import All books
const importBooks=async()=>{
    try {
       await Book.insertMany(books)
       console.log('Books imported')
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}
const importAuthors=async()=>{
    try {
       await Author.insertMany(authors)
       console.log('Authors imported')
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

//remove All books
const removeBooks=async()=>{
    try {
       await BooksModel.deleteMany() 
       console.log('Books deleted')
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

if(process.argv[2]=== "-import"){
    importBooks()
}else if(process.argv[2]=== "-remove"){
    removeBooks()
}else if(process.argv[2]=== "-import-authors"){
    importAuthors()
}