
// const { param } = require('../../routes/news');
const {mongooseToObject} = require('../../util/mongoose');
// const { multipleMongooseToObject } = require('../../util/mongoose');

const Course = require("../models/Course");

class CourseController {
  
  // [Get]/courses/:slug
   show(req, res, next) {
   Course.findOne({ slug: req.params.slug })
      .then(course => {
        //res.json(course)
        res.render('courses/show', { course: mongooseToObject(course) });
        
      })
      .catch(next) 
    // res.send("test loi" + req.params.slug)
    // Course.params.slug
    // res.json(req.params.slug)
    //  Course.find({slug: req.params.slug})
    //   .then(course => 
    //     res.render('courses/show'),
    //     {course: mongooseToObject(course) }
    //   )
    //   .catch(next)

  }
  create(req, res, next) {
    res.render("courses/create");
  }
  // [GET] /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then(course => res.render("courses/edit", {course: mongooseToObject(course)}))
      .catch(next)
  }
    // [PUT] /courses/:id/edit

  update(req, res, next) {
    Course.updateOne({_id: req.params.id}, req.body )
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next)
  }

  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
    formData.slug = ``;
    const course =  new Course(formData);
    course.save()
    .then(() => res.redirect('/'));
  }
}   

module.exports = new CourseController();