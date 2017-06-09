var Register=require('./Register/Register.controller')
module.exports=function(app)
{
 
     app.post('/register',Register.register)
    
}