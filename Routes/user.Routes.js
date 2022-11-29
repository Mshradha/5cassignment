const express = require('express');
const http = require("https");
const fetch = require('node-fetch');
const arr = [];



const UserModel = require("../Modal/User.Modal");

const UserController = express.Router();

UserController.get("/",async(req,res)=>{
const response = await fetch('https://api.spacexdata.com/v3/capsules');
const body = await response.json();
    res.send(body)
})

UserController.get("/:types",async(req,res)=>{
    const {types} = req.params;
    const response = await fetch(`https://api.spacexdata.com/v3/capsules/?type=${types}`);
    const body = await response.json();
    res.send(body)
})
UserController.get("/:status",async(req,res)=>{
    const {status} = req.params;
    const response = await fetch(`https://api.spacexdata.com/v3/capsules/?status=${status}`);
    const body = await response.json();
    res.send(body)
})
UserController.get("/:original_launch",async(req,res)=>{
    const {original_launch} = req.params;
    const response = await fetch(`https://api.spacexdata.com/v3/capsules/?status=${original_launch}`);
    const body = await response.json();
    res.send(body)
})


//original_launch


module.exports = UserController;