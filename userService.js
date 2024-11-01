const express = require("express");
app = express();

app.use(express.json());

const user_list = [
    {id:1, username: "ayoub"},
    {id:2, username: "almont"},
    {id:3, username: "ahmed"},
    {id:4, username: "mohammed"},
    {id:5, username: "waleed"},
    {id:6, username: "tawfeeq"},
    {id:7, username: "naeem"},
    {id:8, username: "munder"}
];

app.get("/users/get", (req, res)=>{ //returns all users
    console.log(req.query)
    res.status(200).send(user_list);
})
app.get("/users/get/id", (req, res)=>{ //returns a single user by id
    const user = user_list.find(u => u.id=== parseInt(req.query.id));
    if(!user) return res.status(404).json({message:"user does not exist."});
    res.status(200).send(user);
})
app.get("/users/get/username", (req, res)=>{ //returns a single user by username
    const user = user_list.find(u => u.username === req.query.username);
    if(!user) return res.status(404).json({message:"user does not exist."});
    console.log(user);
    res.status(200).send(user);
})
app.listen("3321", (err)=>{
    console.log("user service is running.")
})