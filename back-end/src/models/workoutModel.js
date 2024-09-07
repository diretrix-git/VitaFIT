const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    enum: ["Beginner", "Advanced"],
    // required: true,
  },
  plan: {
    type: String,
    required: true,
  },
  exercises: [
    {
      name: String,
      sets: Number,
      reps: Number,
      rest: Number, // rest time in seconds
    },
  ],
  workoutPlanDetails: {
    description: String,
    duration: Number, // duration in minutes
    frequency: String, // e.g., '3 times a week'
  },
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
