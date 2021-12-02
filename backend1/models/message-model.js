const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    sender:{
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