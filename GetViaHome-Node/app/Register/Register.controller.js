var Register={};
var profileSchema = require("mongoose").model("Userprofile");
var AdminSchema = require("mongoose").model("Adminprofile");
Register.register=function(req,res)
    {      
//console.log("TEST:"+req.body.firstName);



    //Admin username and emal check
 AdminSchema.findOne({$or:[{username:req.body.username},{email:req.body.email}]},function(err,obj)
            {
            
            if(!err)
            {  
                if(obj==null)
                        {   

                              //User Register

            profileSchema.findOne({$or:[{username:req.body.username},{email:req.body.email}]},function(err,obj)
            {
            
            if(!err)
            {  
                if(obj==null)
                        {   
                                    let profile = new profileSchema(req.body);
                                    profile.save()
                                    .then(function(response) {
                                        console.log("save")
                                        var out={msg:"sucesss",
                                        url:"dashboard"
                                            
                                        }
                                        res.json(out);
                                    })
                                    .catch(function(err) {
                                        console.log(err);
                                        res.json("Error in Updating");
                                    })

                        }
                        else 
                            {
                                        if(obj.email==req.body.email && obj.username==req.body.username)
                                            {
                                            res.send("username and email already existed");
                                            }
                                    else if(obj.email==req.body.email)
                                            {
                                            console.log(user);
                                            res.send("email already existed");
                                            }
                                    else if(obj.username==req.body.username)
                                            {
                                            res.send("username already existed");
                                            }
                                
                            }
                    
                    
                    }
                    else
                        {
                        console.log("error"+err);
                        
                        }
            
            
            });

                             
                        }
                        else 
                            {
                                        if(obj.email==req.body.email && obj.username==req.body.username)
                                            {
                                           res.json("Admin username and email already existed");
                                            }
                                    else if(obj.email==req.body.email)
                                            {
                                            //console.log(user);
                                           res.json("Admin email already existed");
                                            }
                                    else if(obj.username==req.body.username)
                                            {
                                           res.json("Admin username already existed");
                                            }
                                
                            }
                    
                    
                    }
                    else
                        {
                        console.log("error"+err);
                        
                        }
            
            
            });


	  
    }
module.exports=Register;