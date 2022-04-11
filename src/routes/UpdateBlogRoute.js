const express = require('express')
const router = express.Router()
const BlogController = require('../controller/BlogController')
router.put('/updateBlog',(req,res)=>{
    BlogController.updateBlog(req,res)
})

module.exports = router