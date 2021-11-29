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
router.get('/getfilesbygroup', fileController.getFilesByGroup);
router.post('/getfilesbycreator', fileController.getFilesByCreator);
router.post('/createnewfile', fileController.createNewFile); //(V)
router.put('/modifyfilecontent', fileController.modifyFileContent);
router.delete('/delete-file', fileController.deleteFile);

module.exports = router;