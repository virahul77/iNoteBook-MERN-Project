import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props)=> {
    const host = 'http://localhost:5000'

    const notesInitial = []
      const [notes,setNotes] = useState(notesInitial)

      // GET ALL NOTES
        const getNotes = async ()=> {
            // API Call
            const response = await fetch(`${host}/api/notes/fetchallnotes`, {
              method : 'GET',
              headers : {
                'Content-Type' : 'application/json',
                'auth-token'  : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIxYjMwOGYwNTA3Mzg4MzhmMjZjZGI0In0sImlhdCI6MTY0NTk2NDk0Nn0.-unLT6coACA3189QERN1gwMA5XZnUN4dRjZxKzBsBz4'
              }
            });
            const json = await response.json()
            console.log(json);
            setNotes(json)
        }

      // Add a Note
        const addNote = async (title,description,tag)=> {
            // TODO : API Call
            const response = await fetch(`${host}/api/notes/addnote`, {
              method : 'POST',
              headers : {
                'Content-Type' : 'application/json',
                'auth-token'  : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIxYjMwOGYwNTA3Mzg4MzhmMjZjZGI0In0sImlhdCI6MTY0NTk2NDk0Nn0.-unLT6coACA3189QERN1gwMA5XZnUN4dRjZxKzBsBz4'
              },
              body : JSON.stringify({title,description,tag})
            });
            const note = await response.json()
            setNotes(notes.concat(note))
        }
        // Delete a Note
        const deleteNote = async (id)=> {
          //TODO : API CALLS
          const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method : 'DELETE',
            headers : {
              'Content-Type' : 'application/json',
              'auth-token'  : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIxYjMwOGYwNTA3Mzg4MzhmMjZjZGI0In0sImlhdCI6MTY0NTk2NDk0Nn0.-unLT6coACA3189QERN1gwMA5XZnUN4dRjZxKzBsBz4'
            }
          });
          const json = await response.json()
          console.log(json);

          //Delete in client Side
          console.log('deleting the note with id '+id);
          let newNote = notes.filter((note)=>{return note._id!==id}) 
          setNotes(newNote)
        }

        // Edit a Note
        const editNote = async (id,title,description,tag)=> {
          //API CALLS
          const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method : 'PUT',
            headers : {
              'Content-Type' : 'application/json',
              'auth-token'  : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIxYjMwOGYwNTA3Mzg4MzhmMjZjZGI0In0sImlhdCI6MTY0NTk2NDk0Nn0.-unLT6coACA3189QERN1gwMA5XZnUN4dRjZxKzBsBz4'
            },
            body : JSON.stringify({title,description,tag})
          });
          const json = await response.json()
          
          let newNote = JSON.parse(JSON.stringify(notes))
          //Logic to edit in client side
          for (let index = 0; index < newNote.length; index++) {
            const element = newNote[index];
            if(element._id === id){
              newNote[index].title = title ;
              newNote[index].description = description ;
              newNote[index].tag = tag ;
              break;
            }
          }
          setNotes(newNote)
        }

    return (
        <noteContext.Provider value={{notes,setNotes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;