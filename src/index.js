const mongoose = require("mongoose");
const express = require ("express");
const dotenv =require("dotenv")
const route = require("./Route/Route.js")
dotenv.config()

const app = express()

app.use(express.json());

const port = 5001;

mongoose.connect(process.env.mongourl)
.then(()=>{console.log(`mongo db connected Sucessfully`);})
.catch((e) =>{console.log(`mongo db error ${e}`);})

app.use("/",route)

app.listen(port,()=>{console.log(`this derver is running on this port ${port}`);})






