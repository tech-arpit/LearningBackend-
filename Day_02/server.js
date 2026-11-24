const express = require("express")
const app = express()

app.use(express.json()) // middleware 

const notes = []

app.post("/notes", (req,res) =>{
  
console.log(req.body)

res.send("note created") 

})

app.listen( 3000 , () =>{
    console.log("Server is running port 3000")
})
 