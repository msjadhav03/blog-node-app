const { MongoClient } = require("mongodb");
const path = require('path')
const pathToEnv = path.join(__dirname,'../config/.env')
require('dotenv').config({path :pathToEnv })
const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri);

module.exports = async function connection() {
  try {
    await client.connect()
    const db =  client.db("blog-db");
    
    return await db;
  } catch (e) {
    return e;
  } finally {
    console.log("mongo connection file executed...");
  }
};
