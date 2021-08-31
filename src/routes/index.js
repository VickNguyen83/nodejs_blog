const newsRouter = require('./news');
const coursesRouter = require('./courses');
const siteRouter = require('./sites');
const meRouter = require('./me');

function route(app) {

  // app.get('/news', (request, response)=>{
  //     response.render('news');
  // });
  // thay thế phía trên bằng
  app.use('/news', newsRouter);
  app.use('/me', meRouter);
  app.use('/courses', coursesRouter);
  // --------
  app.use('/', siteRouter);
  

  // app.get('/user', (request, response)=>{
  //     response.render('user');
  // });

  // app.get('/', (request, response)=>{
  //     // return response.send('<h1>Hello work this is my first nodeJS app </h1>')
  //     response.render('home');
  // })

  // app.get('/search', (request, response)=>{
  //     // console.log(req.query);
  //     response.render('search');
  // });

  // app.post('/search', (request, response)=>{
  //     console.log(request.body)
  //     response.send('search');
  // });
}

module.exports = route;
