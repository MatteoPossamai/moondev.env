const Group = require('../models/group-model');

const createGroup = (req, res) => {
    const name = req.body.name;
    const founder = req.body.founder;

    const newGroup = new Group({name, founder, partecipants:[founder]});
    newGroup.save()
        .then(() => res.json('200'))
        .catch(err => {
            if(err.keyPattern.name){
                res.json("Group name already used");
            }else{
                res.status(400).json("ERROR:"+err);
            }
        })
}

const addUserToGroup = (req, res) => {
    const user = req.body.user;
    const group_name = req.body.group_name;

    Group.findOne({ name:group_name})
        .then(group => {
            if(!group.partecipants.includes(user)){
                group.partecipants.push(user);
                group.save()
                    .then(() => res.json('User added to group'))
                    .catch(err => res.status(400).json('Error: ' + err))
            }else{
                res.json('User already in group')
            }
        })
        .catch(err => res.status(400).json('Error: ' + err))
}

const addFileToGroup = (req, res) => {
    const file = req.body.file;
    const group_name = req.body.group_name;

    Group.findOne({ name:group_name})
        .then(group => {
            if(!group.files.includes(file)){
                group.files.push(file);
                group.save()
                    .then(() => res.json('File added to group'))
                    .catch(err => res.status(400).json('Error: ' + err))
            }else{
                res.json('File already in group')
            }
        })
        .catch(err => res.status(400).json('Error: ' + err))
}

const allGroup = (req, res) => {
    Group.find()
        .then(group => res.json(group))
        .catch(err => res.status(400).json('Error: ' + err))
}

const removeFileFromGroup = (req, res) => {
    const file = req.body.file;
    const group_name = req.body.group_name;

    Group.findOne({name:group_name})
        .then(group => {
            if(group.files.includes(file)){
                group.files.remove(file);
                group.save()
                    .then(() => res.json('File removed to group'))
                    .catch(err => res.status(400).json('Error: ' + err))
            }else{
                res.json('File not in gruop')
            }
        })
}

const removeFromGroup = (req, res) => {
    const user = req.body.user;
    const group_name = req.body.group_name;

    Group.findOne({name:group_name})
        .then(group => {
            if(group.partecipants.includes(user)){
                group.partecipants.remove(user);
                group.save()
                    .then(() => res.json('User removed to group'))
                    .catch(err => res.status(400).json('Error: ' + err))
            }else{
                res.json('User not in gruop')
            }
        })
}

module.exports = {
    createGroup,
    addUserToGroup,
    addFileToGroup,
    allGroup,
    removeFileFromGroup,
    removeFromGroup,
}