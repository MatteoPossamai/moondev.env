const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FileSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength:1,
        unique:false,
    }, extension: {
        type:String,
        required:true,
        unique:false,
    }, content: {
        type:String,
        required:true,
        unique:false,
    },group:{
        type:String,
        required:false,
        unique:false,
    }, creator:{
        type: String,
        required: true,
        unique:false,
    }
})

const File = mongoose.model('File', FileSchema);

module.exports = File;