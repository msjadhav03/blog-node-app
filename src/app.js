const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const AddNewBlogRoute = require("./routes/AddNewBlogRoute");
const GetAllBlog = require("./routes/GetAllBlogsRoute");
const deleteBlog = require("./routes/DeleteBlogRoute");
const updateBlog = require("./routes/UpdateBlogRoute");


app.use("", AddNewBlogRoute);
app.use("", GetAllBlog);
app.use("", deleteBlog);
app.use("", updateBlog);

app.get("*", (re, res) => {
  res.status(404).json({
    code: 404,
    name: "not_found",
    message: "Page not found",
  });
});

module.exports = app;
