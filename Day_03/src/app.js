// server create krna 
// server ko config krna 

const express = require("express")

const app = express()//server create ho jata hai 
 
app.use(express.json()) // middleware 

const notes = [
    // {
    //      title: "test title 1",
    //      description: "test description 1"
    //  }
]
app.get("/", (req,res)=>{
    res.send("hello world")
})

// POST /notes 

app.post("/notes",(req,res)=>{
    console.log(req.body)
    notes.push(req.body)
   
    console.log(notes)
    res.send("note created")
})

//Get /notes
app.get("/notes",(req,res)=>{
    res.send(notes)
})

// Delete /notes
//params 
// delete/notes/:index (index no. u want to delete )
app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index]

    res.send("note deleted successfully")
})

//patch
//patch/:index
// req.body = { description:- "sample modified description."}
app.patch("/notes/:index",(req, res)=>{
    notes[req.params.index].description = req.body.description
    // notes[req.params.index].title = req.body.title  // if want to chnage title also 
    res.send("description modified successfully")
})
module.exports = app 