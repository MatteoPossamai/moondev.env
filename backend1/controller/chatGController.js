const ChatG = require('../models/chatG-model');
const Message = require('../models/message-model');

const getGroupMessages = (req, res) => {
    const name = req.params.id;
    
    ChatG.findOne({group:name})
        .then(cg => res.json(cg.messages))
        .catch(err => res.status(400).json('ERROR:'+err))
}

const sendMSG = (req, res) => {
    const name = req.body.name;
    const sender = req.body.sender;
    const text = req. body.text;

    const MSG = new Message({sender, text});

    ChatG.findOne({group:name})
        .then(cg => {
            cg.messages.push(MSG);
            cg.save();
        })
        .then(() => res.json('Message sent'))
        .catch(err => res.status(400).json('Error: ' + err))
}

const deleteMsg = (req, res) => {
    const name = req.body.name;
    const num = req.body.num;

    ChatG.findOne({group:name})
        .then(cg => {
            cg.messages = cg.messages.filter(message=>message != cg.messages[num]);
            cg.save();
        })
        .then(() => res.json('Message deleted'))
        .catch(err => res.status(400).json('Error: ' + err))
}

module.exports = {
    getGroupMessages,
    sendMSG,
    deleteMsg,
}/*?????????*/