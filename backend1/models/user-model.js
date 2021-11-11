const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Group = require('./group-model');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true, 
        minlength:3,
    }, email: {
        type:String,
        required:true,
        unique: true,
    }, password: {
        type:String,
        required:true,
        unique: true,
        minlength:7,
    }, files:{
        type: Array,
        required:true,
    }, group:{
        type:String, 
        required:true,
    }, image:{
        type:String,
        required: false,
    }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;