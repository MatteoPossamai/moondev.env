const File = require('../models/file-model');

//Get all files
const getFiles = (req,res) => {
    const id = req.body.id;
    File.find()
        .then(file => res.json(file))
        .catch(err => res.status(400).json('ERROR:'+err))
}

//Get all the information about a file
const getFilesById = (req,res) => {
    const id = req.body.id;
    File.findById(id)
        .then(file => res.json(file))
        .catch(err => res.status(400).json('ERROR:'+err))
}

//Get the content of a file
//Purpose: refresh faster
const getFilesContent = (req,res) => {
    const id = req.body.id;
    File.findById(id)
        .then(file => res.json(file.content))
        .catch(err => res.status(400).json('ERROR:'+err))
}

//Get the creaor of a file
const getFilesCreator = (req,res) => {
    const id = req.body.id;
    File.findById(id)
        .then(file => res.json(file.creator))
        .catch(err => res.status(400).json('ERROR:'+err))
}

//Get the group of the file
const getFilesGroup = (req,res) => {
    const id = req.body.id;
    File.findById(id)
        .then(file => res.json(file.group))
        .catch(err => res.status(400).json('ERROR:'+err))
}

//Create from scratch a new empty file
const createNewFile = (req, res) => {
    const name = req.body.name;
    const extension = req.body.extension;
    const sharedStatus = req.body.sharedStatus;
    const creator = req.body.creator;

    const newFile = new File({name, extension, content:'Write your code here', sharedStatus,creator, group:creator.group});

    newFile.save()
        .then(() => res.json('200'))
        .catch(err => res.status(400).json('ERROR:'+err))
}

//Modify the current content of the file
const modifyFileContent = (req,res) => {
    //passed active code, memorized in status
    const actualState = req.body.code;
    return 'Function still in development';
}

module.exports = {
    getFiles,
    getFilesById,
    getFilesContent,
    getFilesCreator,
    getFilesGroup,
    createNewFile, 
    modifyFileContent,
}