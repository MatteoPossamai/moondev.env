const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('./user-model');
const Extension = require('./extension-module');

const FileSchema = new Schema({
    name: {
        type: String,
        required: true,
    }, extension: {
        type:Extension,
        required:true,
    }, content: {
        type:String,
        required:true,
    }, sharedStatus:{
        type: String, 
        required: true,
        //private, group, pubblic
    }, creator:{
        type: User,
        required: true,
    }
})

const File = mongoose.model('File', FileSchema);

module.exports = File;