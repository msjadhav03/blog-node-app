const connection = require("../database/mongo");

async function createNewBlog(data) {
  const db = await connection();
  return new Promise((resolve, reject) => {
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
module.exports = {
  createNewBlog,
  getBlog,
};
