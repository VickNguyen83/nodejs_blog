const express = require('express');
const siteRouter = express.Router();

const siteController = require('../app/controllers/SiteController');
// news controller slug
siteRouter.get('/search', siteController.search);
siteRouter.get('/user', siteController.user);
//news controller index
siteRouter.get('/', siteController.index);

module.exports = siteRouter;
