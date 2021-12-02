const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatGSchema = new Schema({
    group:{
        type:String,
        required:true,
        unique:true,
    }, messages:{
        type:Array,
        required:true,
        default: [],
    }
})

const ChatG = mongoose.model('ChatG', ChatGSchema);

module.exports = ChatG;