const express = require('express');
const userController = require('../controller/userController');

//inizialized the Express router
const router = express.Router();

//router
router.get('/get-users', userController.getUsers);
router.get('/verify-user', userController.verifyUser);
router.post('/create-user', userController.createUser);

module.exports = router;