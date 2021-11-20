const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    group:{
        type:String,
        required:true, 
    }, sender:{
        type:String,
        required:true
    }, text:{
        type:String, 
        required:true
    }, time : {
        type : Date,
        default: Date.now
    }
})

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;