const User = require("../models/User")

exports.postUser = async(req , res )=>{
    try {
        
//create a new User
const newUser = new User(req.body);
//test 1 if has is an email
if (!req.body.email){
    res.status(400).send({msg:"email is required..."})
    return;
}

//test 2 : if email already exist
const user = await User.findOne({email:req.body.email});
if (user){
    res.status(400).send({msg:"email already exist"})

    return;
}

// save User

const response= await newUser.save()

res.status(200).send({response: response, msg:"User saved"})

    } catch (error) {
        
        console.log(error)
        res.status(500).send({msg: "can not save User"})
    }

}