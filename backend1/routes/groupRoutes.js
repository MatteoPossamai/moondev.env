const express = require('express');
const groupController = require('../controller/groupController');

//inizialized the Express router
const router = express.Router();

//routes
router.get('/get-all-groups', groupController.allGroup);//(V)
router.get('/:id', groupController.getGroup);
router.post('/getgroupfromuser', groupController.getGroupByUser);//(V)
router.post('/create-group', groupController.createGroup);//(V)
router.post('/add-user-to-group', groupController.addUserToGroup);
router.post('/add-file-to-group', groupController.addFileToGroup);
router.delete('/remove-file-from-group', groupController.removeFileFromGroup);
router.post('/remove-from-group', groupController.removeFromGroup);//(V)

module.exports = router;