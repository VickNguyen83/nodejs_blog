const express = require('express');
const newsRouter = express.Router();

const newsController = require('../app/controllers/NewsController');
// news controller slug
newsRouter.get('/:slug', newsController.show);
//news controller index
newsRouter.get('/', newsController.index);

module.exports = newsRouter;
