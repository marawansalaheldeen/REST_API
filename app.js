require('dotenv').config();

const express = require("express");
const app = express();

var mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true});
process.on('unhandledRejection', up => { throw up })

var db = mongoose.connection;
db.on('error',(error)=>console.error('error'));
db.once('open',()=>console.log("we are connected to the database"));
port = 3000;
var server = app.listen(port,()=> console.log(`Example app listening on port ${port}!`));
