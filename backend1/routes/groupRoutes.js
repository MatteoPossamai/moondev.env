const express = require('express');
const groupController = require('../controller/groupController');

//inizialized the Express router
const router = express.Router();

//routes
router.get('/get-all-groups', groupController.allGroup);
router.get('/getgroupfromuser', groupController.getGroupByUser);
router.post('/create-group', groupController.createGroup);
router.post('/add-user-to-group', groupController.addUserToGroup);
router.post('/add-file-to-group', groupController.addFileToGroup);
router.delete('/remove-file-from-group', groupController.removeFileFromGroup);
router.delete('/remove-from-group', groupController.removeFromGroup);

module.exports = router;