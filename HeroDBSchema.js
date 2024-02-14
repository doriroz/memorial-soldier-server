import mongoose from "mongoose";
const Schema = mongoose.Schema;

const notesSchema = new Schema({
  contact: { type: String },
  context: { type: String },
  //   entryDate: { type: Date, default: Date.now },
});

const Notes = mongoose.model("Notes", notesSchema, "Notes");
const heroSchema = { notes: Notes };

export default heroSchema;
