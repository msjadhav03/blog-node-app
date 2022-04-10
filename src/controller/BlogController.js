const dotenv = require("dotenv");

const BlogServices = require("../services/BlogServices");

function addNewBlog(req, res) {
  if (req.body.title != null && req.body.content != null) {
    BlogServices.createNewBlog(req.body)
      .then((result) => {
        if (result == true) {
          res.status(200).json({
            code: 200,
            name: "created",
            message: "New blog added - success",
          });
        } else {
          res.status(400).json({
            code: 400,
            name: "failed",
            error: "something went wrong - failed",
          });
        }
      })
      .catch((err) => {
        res.status(503).json({
          code: err.code,
          name: err.name,
          error: err.err,
        });
      });
  } else {
    res.status(422).json({
      code: 422,
      name: "fields_missing",
      message: "Required field not found - Title or Content",
    });
  }
}


function getAllBlog(req,res)
{
    BlogServices.getBlog().then((doc)=>
    {
        res.status(200).json(
            {
                code : 200,
                name : 'found',
                message : 'Data fetched - success',
                data: doc
            }
        )
    }).catch((err)=>
    {
        res.status(400).json(
            {
                code : err.code,
                name : err.name,
                error : err.err
            }
        )
    })
}
module.exports = {
  addNewBlog,
  getAllBlog
};
