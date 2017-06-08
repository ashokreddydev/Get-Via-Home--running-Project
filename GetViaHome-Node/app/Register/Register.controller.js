var Register={};
var profileSchema = require("mongoose").model("profile");
Register.register=function(req,res)
    {      
//console.log("TEST:"+req.body.firstName);
//    console.log("HI")
     let profile = new profileSchema(req.body);
     profile.save()
         .then(function(response) {
             res.send("Thank you;");
         })
         .catch(function(err) {
             console.log(err);
             res.json("Error in Updating");
         })
	  	  	    
	  
    }
module.exports=Register;