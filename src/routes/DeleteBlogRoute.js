const express = require('express')
const router = express.Router()
const BlogController = require('../controller/BlogController')
router.delete('/deleteBlog',(req,res)=>{
    BlogController.deleteBlog(req,res)
})

module.exports = router