// server create karna

const express = require("express");
const noteModel = require("./models/note.model");
const cors = require("cors")
const path = require("path")

const app = express();
app.use(cors())
app.use(express.json()); // middleware
app.use(express.static("./public"))


// POST/ api / notes
// Create new notes and save data in mongodb
// req.body = { title , description}

app.post("/api/notes", async (req, res) => {
  const { title, description } = req.body;

  const note = await noteModel.create({
    title,
    description,
  });
  res.status(201).json({
    message: "note created successfully",
    note,
  });
});

// GET / api/notes
// Fetch all the notes data from mongodb and send them in response

app.get("/api/notes", async (req, res) => {
  const note = await noteModel.find();

  res.status(201).json({
    message: "Notes fetched successfully",
    note
  });
});

// DELETE /api/notes/:id
// Delete note the id from req.params
app.delete("/api/notes/:id", async(req,res) =>{
    const id = req.params.id

   const note = await noteModel.findByIdAndDelete(id)

 res.status(201).json({
    message:"Note deleted successfully",
   
})
})

// PATCH /api/notes/:id 
// update the description of the note by id 
// req.body = {description}
app.patch("/api/notes/:id", async(req , res)=>{
  const id = req.params.id
  const{description}  = req.body
await noteModel.findByIdAndUpdate(id , {description})

res.status(200).json({
  message:"Note updated successfully"
})
})

app.use('*name',(req,res)=>{
  res.sendFile(path.join(__dirname,"..","/public/index.html"))
})

module.exports = app;
