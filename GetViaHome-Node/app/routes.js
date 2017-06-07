var Admin=require('./Admin/Admin.controller')
module.exports=function(app)
{
 
     app.get('/',Admin.register)
    
}