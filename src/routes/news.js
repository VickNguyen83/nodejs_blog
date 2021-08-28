const express = require('express');
const newsRouter = express.Router();

const newsController = require('../app/controllers/NewsController');
// news controller slug
newsRouter.use('/:slug', newsController.show);
//news controller index
newsRouter.use('/', newsController.index);

module.exports = newsRouter;
