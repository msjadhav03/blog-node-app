const express = require('express')
const router = express.Router()

const BlogController = require('../controller/BlogController')

router.get('/getAllBlog',(req,res)=>
{
    BlogController.getAllBlog(req,res)
})

module.exports = router