const mongoose = require("mongoose");

// If you need to use obj inside schema create a new schema and use it

const newObj = new mongoose.Schema({
  // if there no extra properties you need to give just give a type no need to follow object notation
  field1: String,
});

const TodoSchema = new mongoose.Schema(
  {
    record: { type: String, required: true },
    date: { type: Number, default: Date.now },
    lastUpdatedAt: { type: Number },
    obj: newObj,
  },
  { collection: "my-todo" }
);

// mongoose by default makes collection name if not specified

// 'TodoModel' => 'todomodel' + 's'

// You can specify explicitly by passing as a second prop to mongoose.Schema

const model = mongoose.model("TodoModel", TodoSchema);

module.exports = model;
