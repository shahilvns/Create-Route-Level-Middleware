const express = require('express');
const app = express();
const port = 3000;
const reqFilter =(req, res, next)=>{
    if(!req.query.age){
        res.send('Please Provide Your Age');
    }else if(req.query.age<18){
        res.send('You are under aged');
    }else{
        next();
    }
}
// app.use(reqFilter); //Application Level Route Middleware
app.get('/',(req, res)=>{
    res.send('Hello World!');
    res.end();
});
app.get('/service',reqFilter,(req, res)=>{
    res.send('Welcome to Service Page');
    res.end();
});
app.get('/about',(req, res)=>{
    res.send('Welcome to About Page');
    res.end();
});
app.get('/contact',reqFilter,(req, res)=>{
    res.send('Welcome to Contact Page');
    res.end();
});
app.get('/course',reqFilter,(req, res)=>{
    res.send('Welcome to course Page');
    res.end();
});
app.listen(port,(req, res)=>{
    console.log('Server will be start');
})