const Extension = require('../models/extension-model');

const getExtKeywords = (req, res) => {
    const name = req.body.name;
    
    Extension.findOne({name:name})
        .then(ext => res.json(ext.keywords))
        .catch(err => res.status(400).json("Error:"+err))
}

const getExtMImage = (req, res) => {
    const img = req.body.image;
    
    Extension.findOne({image:img})
        .then(ext => res.json(ext.image))
        .catch(err => res.status(400).json("Error:"+err))
}

const addExtension = (req,res) => {
    const name = req.body.name;
    const language = req.body.language;
    const image = req.body.image;
    const keywords = req.body.keywords;

    const newExtension = new Extension({name, language, image, keywords});
    newExtension.save() 
        .then(() => res.json("Created"))
        .catch(err => res.status(400).json("Error:"+err))
}

const deleteExt = (req, res) => {
    const name = req.body.name;
    
    Extension.findOneAndDelete({name:name})
        .then(() => res.json("Deleted"))
        .catch(err => res.status(400).json("Error:"+err))
}

module.exports = {
    getExtKeywords,
    getExtMImage,
    addExtension,
    deleteExt,
}