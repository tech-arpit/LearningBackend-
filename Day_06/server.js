//server start krna 
//database se connnect krna 

require("dotenv").config()

const app = require("./src/app")
const mongoose = require("mongoose")

const connectToDb = require("./src/config/database")

connectToDb()

app.listen(3000,() =>{
    console.log("server is runnning on port 3000")
})