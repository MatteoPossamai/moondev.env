const express = require('express');
const fileController = require('../controller/fileController');

//inizialized the Express router
const router = express.Router();

//add all the router, and connected to their functions
router.get('/getallfiles', fileController.getFiles);
router.get('/getfile', fileController.getFilesById);
router.get('/getfilecontent', fileController.getFilesContent);
router.get('/getfilecreator', fileController.getFilesCreator);
router.get('/getfilegroup', fileController.getFilesGroup);
router.post('/createnewfile', fileController.createNewFile);
router.post('/modifyfilecontent', fileController.modifyFileContent);

module.exports = router;