var express = require('express');
var itemRouter = express.Router();

const { createItem, deleteItem, showItems, updateItem } = require('../controllers/itemController.js');

itemRouter.get('/item', showItems);
itemRouter.post('/item', createItem);
itemRouter.delete('/item', deleteItem);
itemRouter.put('/item', updateItem);

module.exports = itemRouter
