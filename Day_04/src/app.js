// server ko create krna 
// server ko config krna 

const express = require("express")
const app = express()

const notes = []
app.use(express.json()) // middleware 


// POST/notes 
app.post("/notes", (req , res)=>{
    notes.push(req.body)
    res.status(201).json({
        message:"note created successfuly"
    })
    })

//  GET/notes

app.get("/notes",(req,res)=>{
    res.status(200).json({
      notes : notes  
    })
})

//DELETE /notes /:index
app.delete("/notes/:index",(req,res)=>{
     
    delete notes[req.params.index]
    res.status(200).json({
        message:"Note deleted successfully"
    })
})

// PATCH/   /notes/:index

app.patch("/notes/:index",(req,res)=>{
    
    notes[req.params.index].description = req.body.description
    res.status(200).json({
        message:"Note updated successfully"
    })
})







module.exports = app