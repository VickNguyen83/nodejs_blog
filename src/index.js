const path = require('path')
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');


// init express
const app =  express();
const port =  3000;

const route = require('./routes')

// initiate public folder and create a new path
app.use(express.static(path.join(__dirname, 'public')));
// middleware initial
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// http logger
// app.use(morgan('combined'));

// template engine
app.engine('hbs', handlebars({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// route init
route(app);


app.listen(port, ()=> {
    console.log('this is the sample of the port 3000 that we are listening')
});
