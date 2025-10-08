require("dotenv").config()

var express = require("express")

var connectToDatabase = require("./database/db")

var userRoute = require("./routes/user-routes")

var cors = require("cors")

var app = express()

connectToDatabase()

app.use(express.json())

app.use("/api/auth",userRoute)

app.use(cors())

var PORT = process.env.PORT || 7777
app.listen(PORT,()=>{
    console.log("server is running")
}) 
