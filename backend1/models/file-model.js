const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('./user-model');
const Extension = require('./extension-module');
const Group = require('./group-model');

const FileSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength:3,
    }, extension: {
        type:String,
        required:true,
    }, content: {
        type:String,
        required:true,
    }, sharedStatus:{
        type: String, 
        required: true,
        //private, group, pubblic
    }, creator:{
        type: String,
        required: true,
    }, group:{
        type:String,
        required:false,
    }
})

const File = mongoose.model('File', FileSchema);

module.exports = File;