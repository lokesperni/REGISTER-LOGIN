var bcrypt = require("bcrypt")

var jwt = require("jsonwebtoken")

var User = require("../models/user")


var register = async (req,res)=>{
  try {
    var { userName, email, password, role } = req.body

    var userExists = await User.findOne({ $or: [{ userName },{ email }] })
    if (userExists) {
      return res.status(400).json({ message: "User already exists" })
    }

    var salt = await bcrypt.genSalt(10)
    var hashPassword = await bcrypt.hash(password,salt)
    var myUser = await User.create({
        userName,
        email,
        password: hashPassword,
        role,
    })
    if (myUser) {
      return res.status(201).json({ message: "Created a new user" })
    } else {
      return res.status(400).json({ message: "Cannot create user" })
    }
  } catch (error) {
    console.log("error",error)
  }
}

var login = async (req,res)=>{
  try {
    var { userName, password } = req.body

    var userThere = await User.findOne({ userName })
    if(!userThere){
      return res.status(400).json({ message: "Invalid username or password" })
    }
    var isPassword = await bcrypt.compare(password, userThere.password)
    console.log(isPassword)
    if(!isPassword){
      return res.status(400).json({ message: "Invalid username or password" })
    }
    var generateToken = jwt.sign(
      {
        userId: userThere._id,
        email: userThere.email,
        role: userThere.role,
      },process.env.JSON_WEB_TOKEN,{ expiresIn: "10m" })
      res.status(200).json({ message: "Login success", token: generateToken, success: true })
  }catch(error){
    console.log("error", error)
  }
}

module.exports = { register, login } 
