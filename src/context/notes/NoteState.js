import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props)=> {

    const notesInitial = [
        {
          "_id": "621b98d4e3cc62a0b11a49b4",
          "user": "621b308f050738838f26cdb4",
          "title": "hello world",
          "description": "please wake up early",
          "tag": "first project of crud",
          "date": "2022-02-27T15:29:24.802Z",
          "__v": 0
        },
        {
          "_id": "621c562f0b381aa6dce158b5c",
          "user": "621b308f050738838f26cdb4",
          "title": "hello rahul",
          "description": "i am js develpor stack web develpoment",
          "tag": "Its a mern project",
          "date": "2022-02-28T04:57:19.508Z",
          "__v": 0
        },
        {
          "_id": "621c563c0b381axa6de158b5e",
          "user": "621b308f050738838f26cdb4",
          "title": "hello rohit",
          "description": "i am js develpor stack web develpoment",
          "tag": "Its a mern project",
          "date": "2022-02-28T04:57:32.606Z",
          "__v": 0
        },
        {
            "_id": "621c563c0b381aa6dess158b5e",
            "user": "621b308f050738838f26cdb4",
            "title": "hello rohit",
            "description": "i am js develpor stack web develpoment",
            "tag": "Its a mern project",
            "date": "2022-02-28T04:57:32.606Z",
            "__v": 0
          },
          {
            "_id": "621c563c0b381adsa6de158b5e",
            "user": "621b308f050738838f26cdb4",
            "title": "hello rohit",
            "description": "i am js develpor stack web develpoment",
            "tag": "Its a mern project",
            "date": "2022-02-28T04:57:32.606Z",
            "__v": 0
          },
          {
            "_id": "621c563c0b381aasse6de158b5e",
            "user": "621b308f050738838f26cdb4",
            "title": "hello rohit",
            "description": "i am js develpor stack web develpoment",
            "tag": "Its a mern project",
            "date": "2022-02-28T04:57:32.606Z",
            "__v": 0
          },
          {
            "_id": "621c563c0b381aa6dssde158b5e",
            "user": "621b308f050738838f26cdb4",
            "title": "hello rohit",
            "description": "i am js develpor stack web develpoment",
            "tag": "Its a mern project",
            "date": "2022-02-28T04:57:32.606Z",
            "__v": 0
          },
          {
            "_id": "621c563c0b381aa6de158b5e",
            "user": "621b308f050738838f26cdb4",
            "title": "hello rohit",
            "description": "i am js develpor stack web develpoment",
            "tag": "Its a mern project",
            "date": "2022-02-28T04:57:32.606Z",
            "__v": 0
          }
      ]
      const [notes,setNotes] = useState(notesInitial)

      // Add a Note
        const addNote = (title,description,tag)=> {
            // TODO : API Call
            console.log('Adding a new Note');
            let note = {
                "_id": "621c562f0b381aa6dce158b5cg",
                "user": "621b308f050738838f26cdb4",
                "title": title,
                "description": description,
                "tag": tag,
                "date": "2022-02-28T04:57:19.508Z",
                "__v": 0
              }
            setNotes(notes.concat(note))
        }
        // Delete a Note
        const deleteNote = ()=> {

        }

        // Edit a Note
        const editNote = ()=> {

        }

    return (
        <noteContext.Provider value={{notes,setNotes,addNote,deleteNote,editNote}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;