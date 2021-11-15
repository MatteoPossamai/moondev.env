const express = require('express');
const extensionController = require('../controller/extensionController');

//inizialized the Express router
const router = express.Router();

//routes
router.get('/get-keywords', extensionController.getExtKeywords);
router.get('/get-image', extensionController.getExtMImage);
router.post('/add-extension', extensionController.addExtension);
router.delete('/delete-ext', extensionController.deleteExt)

module.exports = router;