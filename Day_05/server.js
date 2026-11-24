// server start krna 
// database se connect krna 


const app = require("./src/app")

const mongoose = require("mongoose")

function connectToDb(){
    mongoose.connect("mongodb+srv://arpit:J0F1rTVnZYd2mObA@cluster0.b7nogqo.mongodb.net/day-5")
    .then(()=>{
        console.log("Connected to Database")
    })
}

connectToDb()

app.listen(3000,()=>{
    console.log("Server is running in port 3000")
})
