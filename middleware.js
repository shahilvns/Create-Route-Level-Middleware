
module.exports= reqFilter =(req, res, next)=>{
    if(!req.query.age){
        res.send('Please Provide Your Age');
    }else if(req.query.age<18){
        res.send('You are under aged');
    }else{
        next();
    }
}