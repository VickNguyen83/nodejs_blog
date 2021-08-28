const express =  require('express');
const siteRouter =  express.Router();

const siteController =  require('../app/controllers/SiteController')
// news controller slug
siteRouter.use('/search',siteController.search );
siteRouter.use('/user',siteController.user );
//news controller index
siteRouter.use('/',siteController.index );

module.exports= siteRouter;