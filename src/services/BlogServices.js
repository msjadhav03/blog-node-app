const connection = require("../database/mongo");
const ObjectId = require('mongodb').ObjectId
const common = require('../utils/common')

async function createNewBlog(data) {
  const db = await connection();
  return new Promise((resolve, reject) => {
    let _id = common.asyncGenerateRandomId(8)
    console.log("IDDDDDDDDDDDD",_id)
    data._id = _id
    db.collection("blogDoc").insertOne(data, (err, result) => {
      console.log(result);
      if (err) {
        let obj = {};
        obj.code = 503;
        obj.name = "database_server_error";
        obj.err = err;
        console.log(err);
        reject(err);
      } else if (result.acknowledged == true) {
        resolve(true);
      } else {
        let obj = {};
        obj.code = 400;
        obj.name = "insertion_failed";
        obj.err = "Data cannot be inserted - failed !";
        reject(obj);
      }
    });
  });
}

async function getBlog() {
  const db = await connection();
  return new Promise((resolve,reject) => {
    db.collection('blogDoc').find({}).toArray((err,doc)=>
    {
        if (err) {
            console.log(err)
            let obj = {};
            obj.code = 503;
            obj.name = "database_server_error";
            obj.err = err;
            reject(obj);
          } else {
              console.log(doc)
            resolve(doc);
          }
    });
  });
}

async function deleteBlogById(id)
{
  const db = await connection()
  return new Promise((resolve,reject)=>
  {
    
    db.collection('blogDoc').deleteOne({_id:id},(err,res)=>
    {
      if(err)
      {
        let obj = {}
        obj.code = 503
        obj.name = "database_server_error"
        obj.err = 'Database server error - status'
        reject(obj)
      }else
      {
       resolve(true)
      }
    })
  })
}

async function updateBlogById(data)
{
  console.log(data)
  const db = await connection()
  return new Promise((resolve,reject)=>
  {
    db.collection('blogDoc').updateOne({_id:data._id},{$set :data },(err,doc)=>
    {
      console.log(doc)
      if(err)
      {
        let obj = {}
        obj.code = 503
        obj.name = "database_server_error"
        obj.err = 'Database server error - status'
        reject(obj)
      }else if(doc.modifiedCount > 0)
      {
        resolve(true)
      }else
      {
        resolve(false)
      }
    })
  })
}


module.exports = {
  createNewBlog,
  getBlog,
  deleteBlogById,
  updateBlogById
};
