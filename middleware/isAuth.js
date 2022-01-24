const { dirname, join } = require('path');
const path=require('path');
const { start } = require('repl');

const isAuth=(req,res,next)=>{

    const d=new Date();

if (d.getDay() == 0 || d.getDay() == 6 || d.getHours() >17 || d.getHours()<9)   
    {
     return res.sendFile(path.join(__dirname, "../pages/closed.html"));
    }
else{
    next()
    }

}
module.exports=isAuth;