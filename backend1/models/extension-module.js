const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExtensionSchema = new Schema({
    name: {
        type: String,
        required: true,
    }, language:{
        type: String,
        required:true,
    }, image: {
        type:String, //store the directory
        required:true,
    }
})

const Extension = mongoose.model('Extension', ExtensionSchema);

module.exports = Extension;