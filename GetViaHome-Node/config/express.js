var express=require("express");
module.exports=function(){
    
    var app=express();
  /*  app.get('/',function(req,res){
        
       res.end("<h1>Anil Kumar Yadav</h1>") 
        
    });*/
    
    var routes=require("../app/routes")
    routes(app)
    return app;
    
    
    
    
    
    
}