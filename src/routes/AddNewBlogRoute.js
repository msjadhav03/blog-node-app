const express = require('express')
const router = express.Router()

const BlogController = require('../controller/BlogController')

router.post('/addNewBlog',(req,res)=>
{
    BlogController.addNewBlog(req,res)
})

module.exports = router