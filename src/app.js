const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// add new blog entry
const AddNewBlogRoute = require('./routes/AddNewBlogRoute')
const GetAllBlog = require('./routes/GetAllBlogsRoute')

app.use('',AddNewBlogRoute)
app.use('', GetAllBlog )
app.get('*',(re,res)=>
{
    res.status(404).json(
        {
            code : 404,
            name: 'not_found',
            message :'Page not found'
        }
    )
})

module.exports = app