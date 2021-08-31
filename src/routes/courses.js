const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');
// course create controller 
router.get('/create', courseController.create);
router.post('/store', courseController.store);

// course controller slug
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);
router.get('/:slug', courseController.show);



module.exports = router;

