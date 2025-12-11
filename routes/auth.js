const express = require("express");
const path = require("path");

const auth = express.Router();

auth.get('/',(req,res)=>{
    const page = path.join(__dirname,"../public/views/auth.html");
    res.sendFile(page);
})

module.exports = auth;