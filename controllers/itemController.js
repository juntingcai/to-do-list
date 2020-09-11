const {Items} = require('../models/dbcHandler.js');

function createItem(req, res) {
    
    let param = {
        title: req.body.data.title,
        listid: req.body.data.listid,
        complete: false,
    }
    Items.create(param)
    .then(function(data){
        res.send(data)
    })
    .catch(function(error){
        res.status(500).send(error);
    })
}

function deleteItem(req, res){
    
    Items.destroy({
        where: {
            itemid: req.body.data.itemid
        }
    })
    .then(function(data){
        res.send(data)
    })
    .catch(function(error){
        res.status(500).send(error)
    })
}

function showItems(req, res){
    
    Items.findAll()
    .then(function(data){
        res.send(data);
    })
    .catch(function(error){
        res.status(500).send(error);
    })
}

function updateItem(req, res){
    Items.update({complete: true}, {
        where :{
            itemid: req.body.data.itemid
        }
    })
    .then(function(data){
        res.send(data);
    })
    .catch(function(error){
        res.status(500).send(error);
    })
}


module.exports = {createItem, deleteItem, showItems, updateItem}
