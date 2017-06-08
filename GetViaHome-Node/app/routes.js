var Register=require('./Register/Register.controller')
module.exports=function(app)
{
 
     app.post('/',Register.register)
    
}