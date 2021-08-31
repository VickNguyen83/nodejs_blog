
 const Course = require('../models/Course');
 const {multipleMongooseToObject} = require('../../util/mongoose');

class SiteController {
  // Get /
  index(req, res, next) {

    // Course.find({}, function(err, cousrses) {
    //     if(!err) {
    //         res.json(cousrses);
    //     }
    //     else{
    //         res.status(400).json({ error:'ERROR message'});
    //     }
    // })
    //---------------
    // write another way with promise way
    // Course.find({})
    //   .then(courses => res.json(courses))
    //   .catch(next);
// ____________________________________
// truyền biến sang view
Course.find({})
.then(courses => {
  //courses = courses.map( course => course.toObject());
  
  res.render('home', {
  courses : multipleMongooseToObject(courses), //cách viết tương đương với cách này -> courses: courses
})
})
.catch(next);

  }
  // [GET] /search
  search(req, res) {
    res.render('search');
  }
  user(req, res) {
    res.render('user');
  }
}
module.exports = new SiteController();