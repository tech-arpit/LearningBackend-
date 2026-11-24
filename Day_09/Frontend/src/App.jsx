import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [notes, setNotes] = useState([]);

  console.log("Hello Integration");
  function fetchNotes() {
    axios.get("http://localhost:3000/api/notes").then((res) => {
      setNotes(res.data.note);
    });
  }
  function handleSubmit(e) {
    e.preventDefault(); // page ko reload hone se rokta h 
    const { title, description } = e.target.elements; // humne form me se title aur description ko target kiya 

    console.log(title.value, description.value);  // unki values ko console karwa diya 
    
    // backend se notes ka data frontend par show krna 
    axios.post("http://localhost:3000/api/notes" , {
      title:title.value,
      description:description.value
    })
    .then(res=>{
        console.log(res.data)
        fetchNotes(); // so when u click on create notes they will be visible on screen without reloading the page
    })        
 }
 function handleDeleteNote(noteId){
   //console.log(noteId)
   axios.delete("http://localhost:3000/api/notes/"+noteId)
   .then(res=>{
    console.log(res.data)
    fetchNotes()
   })
 }
    
  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <form className="note-create-form" onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder="Enter title" />
        <input name="description" type="text" placeholder="Enter description" />
        <button>Create Note</button>
        
      </form>
      <div className="notes">
        {notes.map((note) => {
          return (
            <div className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
               <button onClick={()=>{handleDeleteNote(note._id)}}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
