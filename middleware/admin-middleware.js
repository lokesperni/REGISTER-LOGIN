var jwt = require("jsonwebtoken")

var adminMiddleware = (req,res,next)=>{    
    console.log("The Middleware is Running");
    var userType = req.user.role
    console.log(userType);
    if(userType !== "admin"){
        return res.status(401).json({message : "Admin is only allowed"})
    }
    next()
    
}
module.exports = adminMiddleware  