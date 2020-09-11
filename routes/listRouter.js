var express = require('express');
var listRouter = express.Router();

const { createList, deleteList, showList } = require('../controllers/listController.js');

listRouter.get('/list', showList);
listRouter.post('/list', createList);
listRouter.delete('/list', deleteList);

module.exports = listRouter;
