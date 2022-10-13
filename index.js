const express = require('express');

const connection = require("./config/db.js");
const UserController = require('./Routes/user.Routes.js');


const app = express();

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("connection")
})
app.use("/user",UserController)

app.listen(8080,async()=>{
    try {
        await connection;
        console.log("Db connected");
    } catch (error) {
        console.log(error)
    }
})