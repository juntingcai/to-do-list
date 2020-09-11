const {Lists} = require('../models/dbcHandler.js');

function createList(req, res) {
    
    let param = {
        title: req.body.data.title
    }
    Lists.create(param)
    .then(function(data){
        res.send(data)
    })
    .catch(function(error){
        res.status(500).send(error);
    })
}

function deleteList(req, res){
    
    Lists.destroy({
        where: {
            listid: req.body.data.listid
        }
    })
    .then(function(data){
        res.send(data)
    })
    .catch(function(error){
        res.status(500).send(error)
    })
}

function showList(req, res){
    
    Lists.findAll()
    .then(function(data){
        res.send(data);
    })
    .catch(function(error){
        res.status(500).send(error);
    })
}


module.exports = {createList, deleteList, showList}