const express = require('express');
const chatGController = require('../controller/chatGController');

//inizialized the Express router
const router = express.Router();

//routes
router.get('/getmsg', chatGController.getGroupMessages);
router.post('/sendmsg', chatGController.sendMSG);
router.delete('/deletemsg', chatGController.deleteMsg);

module.exports = router;