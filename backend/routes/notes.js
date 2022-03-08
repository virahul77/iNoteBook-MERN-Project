const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");

const { body, validationResult } = require("express-validator");

//ROUTE 1 : get all the notes usin GET "/api/auth/fetchallnotes" login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

//ROUTE 2 : Add a new note usin POST "/api/notes/addnote" login required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Title must be min 3 char").isLength({ min: 3 }),
    body("description", "Description must be atleast 5 char").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      //if there are error send bad request and errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Notes({ title, description, tag, user: req.user.id });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

//ROUTE 3 : Update an existing note using POST "/api/notes/updatenote" login required
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  try {
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    //find the note to be updated and update it
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("not found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("not allowed");
    }

    note = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json(note);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});
//ROUTE 4 : Delete an existing note using DELETE "/api/notes/deletenote" login required
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    // Find the note of id and delete it
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("not found");
    }
    // Allow deletion only if user owns it
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("not allowed");
    }
    //Alow deletion
    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({ Succes: "Note has been deleted", note: note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});
module.exports = router;
