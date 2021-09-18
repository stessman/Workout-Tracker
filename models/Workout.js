const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    required: "Enter date for workout",
    default: Date.now
  },
  exercises: {
    type: Array,
    required: "Enter exercise details"
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;