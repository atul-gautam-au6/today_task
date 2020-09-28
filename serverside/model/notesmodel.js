import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
  notes: {
    type: String,
  },
  date: {
    type:String,
  },
});
const notesmodel = mongoose.model('notesdata',notesSchema)
module.exports = notesmodel