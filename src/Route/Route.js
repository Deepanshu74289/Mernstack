const express = require("express")
const route = express.Router();
const {createUser} = require("../Usercontroller/usercontroller")

route.post("/createUser",createUser);



module.exports = route;
