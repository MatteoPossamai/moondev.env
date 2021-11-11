const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    name: {
        type: String,
        required: true,
    }, partecipants:{
        type: Array,
        required:true,
    }, files: {
        type:Array,
        required: false,
    }
})

const Group = mongoose.model('Group', GroupSchema);

module.exports = Group;