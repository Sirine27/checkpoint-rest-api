const express = require("express");
const Router =  express.Router()
const User = require ("../models/User")
const UserControllers = require("../controllers/UserControllers");



//ADD A NEW USER TO THE DATABASE 
Router.post('/post',UserControllers.postUser)

// RETURN ALL USERS 
Router.get("/", async(req,res)=>{

    try {
        const result = await User.find();
        res.status(200).send({response: result, msg:"Geting Users succes"})
    } catch(error) {
        res.status(500).send({msg:"can not get Users"})
    
    }
    
    })

    // EDIT A USER BY ID 
Router.put("/:id", async(req,res)=>{
    try {
        const result = await User.updateOne({_id:req.params.id}, {$set:{...req.body}})
        result?
        res.status(200).send({msg:"User updated"})
        :
        res.status(400).send({msg : "there is no User with this ID"})
    } catch (error) {
        res.status(500).send({msg :"can not update User"})
    }
})

// REMOVE A USER BY ID 
Router.delete("/:id", async(req,res)=>{
    try {
        const result = await User.deleteOne({_id:req.params.id})
        result ?
        res.status(200).send({msg:"User Deleted"})
        :res.status(400).send({msg :"there is no User with this ID"})
    } catch (error) {
        res.status(500).send({msg :"can not delete User"})
    }
})

module.exports = Router