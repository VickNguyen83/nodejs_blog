const express = require('express');
const app =  express();
const port =  3000;
app.get('/', (request, response)=>{
    var a =1;
    var b= 2;
    var c =a+b;
    return response.send('<h1>Hello work this is my first nodeJS app <HTML></h1>')
})
app.get('/user', (request, response)=>{
    return response.send('<h1>this is user list test</h1>')
});

app.listen(port, ()=> {
    console.log('this is the sample of the port 3000 that we are listening')
});
