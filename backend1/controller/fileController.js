const File = require('../models/file-model');
const User = require('../models/user-model');

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
    const creator = req.body.creator;
    const group = req.body.group;

    const newFile = new File({name, extension, content:'Write your code here',creator, group:group});

    newFile.save()
        .then(() => res.json('200'))
        .catch(err => res.status(400).json('ERROR:'+err))
}

const getFilesByGroup = (req, res) => {
    const group = req.body.group;

    File.find({group:group})
        .then(files => res.json(files))
        .catch(err => res.status(400).json('ERROR:'+err))
}

const getFilesByCreator = (req, res) => {
    const creator = req.body.creator;

    File.find({creator:creator})
        .then(files => {res.json(files)})
        .catch(err => res.status(400).json('ERROR:'+err))
}

const modifyFileContent = (req,res) => {
    const newCode = req.body.code;
    const id = req.body.id;

    File.findOne({id:id})
        .then(file => {
            file.content = newCode;
            file.save()
        })
        .then(() => res.json("Modified"))
        .catch(err => res.status(400).json('ERROR:'+err))
}

const deleteFile = (req,res) => {
    const name = req.body.name;

    File.findOneAndDelete({name:name})
        .then(() => res.json("Deleted"))
        .catch(err => res.status(400).json('ERROR:'+err))
}

module.exports = {
    getFiles,
    getFilesById,
    getFilesContent,
    getFilesCreator,
    getFilesGroup,
    createNewFile, 
    getFilesByGroup,
    getFilesByCreator,
    modifyFileContent,
    deleteFile,
}