const express = require('express');
const http = require("https");
const fetch = require('node-fetch');
const arr = [];



const UserModel = require("../Modal/User.Modal");

const UserController = express.Router();

UserController.get("/",async(req,res)=>{
    const result = await UserModel.find()
    res.send(result)
})

UserController.post("/:login",async(req,res)=>{
    let recent = [];
    const {login} = req.params;
    recent.push(login)
    arr.push(login);
    // for(let i=0;i<arr.length;i++){
    //     for(let j=i+1;j<arr.length;j++){
    //         if(arr[i]===arr[j]){
    //             return res.send("error")
    //         }
    //         else{
                const data = await fetch(`https://api.github.com/users/${login}`)
    const data1 = await data.json();
    
    const saveinfo = new UserModel({
        login:data1.login  ,
    node_id : data1.node_id ,
    avatar_url: data1.avatar_url,
    gravatar_id: data1.gravatar_id,
    url : data1.url,
    html_url: data1.html_url,
    followers_url:data1.followers_url,
     following_url : data1.following_url   ,
     gists_url : data1.gists_url   ,
     starred_url : data1.starred_url   ,
     subscriptions_url : data1.subscriptions_url   ,
     organizations_url : data1.organizations_url   ,
     repos_url  : data1.repos_url  ,
     events_url : data1.events_url   ,
     received_events_url :data1.received_events_url   ,
     type   : data1.type ,
     site_admin : data1.site_admin   ,
     name  : data1.name  ,
     company : data1.company   ,
     blog : data1.blog  ,
     location : data1.location   ,
     email : data1.email   ,
     hireable : data1.hireable   ,
     bio  : data1.bio  ,
     twitter_username : data1.twitter_username    ,
     public_repos : data1.public_repos   ,
     public_gists : data1.public_gists   ,
     followers : data1.followers   ,
     following  : data1.following  ,
     created_at  : data1.created_at  ,
     updated_at : data1.updated_at   
    })
    await saveinfo.save();
    // var common = [];
    // let follower =[];
    // let following = [];
    // const {id} = req.params;
   
    // const data11 = await fetch(`https://api.github.com/users/${login}/followers`)
    // const data114 = await data11.json();
    // for(let i=0;i<data114.length;i++){
    //     follower.push(data114[i].login)
    // }
    // const data12 = await fetch(`https://api.github.com/users/${login}/following`)
    // const data123 = await data12.json();
    // for(let i=0;i<data123.length;i++){
    //     following.push(data123[i].login)
    // }
    
    // for(let i=0;i<follower.length;i++){
    //     for(let j=0;j<following.length;j++){
    //         if(follower[i]===following[j]){
    //             common.push(follower[i])
    //         }
    //     }
    // }
    // // console.log(common)
    // const filter = {login: login};
    // const options = { upsert: true };
    // const updateDoc = {
    //     $set: {
    //       friend : common
    //     },
    //   };
       

    //   const result = await UserModel.findOneAndUpdate(filter,updateDoc,{new:true})
    // //   await result.close();
    //   res.send({message:"Updated",result : result})
    // console.log(follower,following);
    res.send({"message" : "User added to data base"})
    //         }
    //     }
    // }
    
})

UserController.patch("/specific/:login/:id",async(req,res)=> {
    var common = [];
    let follower =[];
    let following = [];
    const {id} = req.params;
    const {login} = req.params;
    const data = await fetch(`https://api.github.com/users/${login}/followers`)
    const data1 = await data.json();
    for(let i=0;i<data1.length;i++){
        follower.push(data1[i].login)
    }
    const data12 = await fetch(`https://api.github.com/users/${login}/following`)
    const data123 = await data12.json();
    for(let i=0;i<data123.length;i++){
        following.push(data123[i].login)
    }
    
    for(let i=0;i<follower.length;i++){
        for(let j=0;j<following.length;j++){
            if(follower[i]===following[j]){
                common.push(follower[i])
            }
        }
    }
     console.log(common)
    const filter = {_id : id};
    const options = { upsert: true };
    const updateDoc = {
        $set: {
          friend : common
        },
      };
       

      const result = await UserModel.findOneAndUpdate(filter,updateDoc,{new:true})
    //   await result.close();
      res.send({message:"Updated",result : result})
    // console.log(follower,following);
    // console.log(common)
   
   
})

UserController.patch("/update/:id", async(req,res)=>{
    const {login} = req.params;
    const {id} = req.params;
    // console.log(req.body)
   
    const updated_project = await UserModel.findOneAndUpdate(
        {_id:id},
        req.body,
        { new: true }
    );
    return res
        .status(200)
        .send({ message: " updated successfully", updated: updated_project });
})


UserController.delete("/delete/:username",async(req,res)=>{
    const username = req.params.username;
    await UserModel.findOneAndDelete({login:username});
    return res.send({"message" : "successfully deleted"})
})
 UserController.get("/:getdata",async(req,res)=>{
    const {getdata} = req.params;
    const str = await UserModel.find({
        $or :[
            {login: {$regex:getdata}},
            {location: {$regex:getdata}},
            
        ]
    })
    return res.send(str)
 })
  UserController.get("/sort",async(req,res)=>{
    const {login} = req.query
    const str = await UserModel.find().sort({"login" : 1})
    return res.send(str)
 })


module.exports= UserController;