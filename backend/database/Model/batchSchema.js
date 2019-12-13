//import mongoose

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const batchSchema = new Schema({
  batchId: { type: String, required: true },
  batchName: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true }
});

module.exports = mongoose.model("batch", batchSchema);
