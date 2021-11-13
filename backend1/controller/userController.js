const User = require('../models/user-model');
const File = require('../models/file-model');
const Group = require('../models/group-model');

const createUser = (req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new User({name, email, password});
    newUser.save()
        .then(() => res.json('200'))
        .catch(err => {
            if(err.keyPattern.name){
                res.json("User already exists");
            }else if(err.keyPattern.email){
                res.json("Email already exists")
            }else{
                res.status(400).json("ERROR:"+err);
            }
        })
}

const verifyUser = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email:email})
        .then(user => {
            if(!user){
                res.json('User not registred');
            }else if(user.password != password){
                res.json('Uncorrect password');
            }else{
                res.json('Verified');
            }
        })
        .catch(err => res.status(400).json("ERROR:"+err))
}

const getUsers = (req, res) => {
    User.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json("ERROR:"+err))
}

module.exports = {
    createUser,
    verifyUser,
    getUsers,
}