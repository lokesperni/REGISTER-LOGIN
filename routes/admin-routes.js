var express = require("express")
var authMiddleware = require("../middleware/auth-middleware")
var adminMiddleware = require("../middleware/admin-middleware")

var router = express.Router()

router.get("/admin",authMiddleware,adminMiddleware,(req,res)=>{
   return res.json({message : "welcome to admin page"})
})
module.exports = router 
