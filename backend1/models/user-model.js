const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Group = require('./group-model');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    }, email: {
        type:String,
        required:true,
    }, password: {
        type:String,
        required:true,
    }, files:{
        type: Array,
        required:true,
    }, group:{
        type:Group, 
        required:true,
    }, image:{
        type:String,
        required: false,
    }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;