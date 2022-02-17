const express = require("express");
const {check,validationResult,body} = require('express-validator');
const connect = require("./configs/db")

const postcontroller = require("./controllers/post.controller")
const userController = require("./controllers/user.controller");

const {register,valid,login,valid_2}=require("./controllers/auth.controller")
const app = express()
app.use(express.json());

app.use("/register",valid(),register);
app.use("/login", valid_2(),login);
app.use("/posts", postcontroller)

app.listen(2222,async() =>{
    try{
        await connect ();

    }catch (err){
        console.log(err.message)
    }
    console.log("listening on port 2222")
});