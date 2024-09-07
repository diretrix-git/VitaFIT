const Workout = require("../models/workoutModel");

// get a single workout by ID
const getWorkout = async (req, res) => {
  try {
    const workout = await Workout.findById(req.pasams.id);
    if (!workout) {
      return res.status(404).json({
        msg: "Workout not found",
        err: err.message,
      });
    }

    return res.status(200).json({
      data: {
        workout,
      },
    });
  } catch (err) {
    return res.status(400).json({
      msg: "workout couldn't be found",
    });
  }
};

//get all workouts

const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.status(200).json(workouts);
  } catch (err) {
    return res.status(500).json({ err: err.msg });
  }
};

// create a new workout (admin access)

const createWorkout = async (req, res) => {
  try {
    const newWorkout = await Workout.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        workout: newWorkout,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      err: err.msg,
    });
  }
};

//update a workout by ID (admin access)

const updateWorkout = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!workout) {
      return res.status(404).json({
        status: "fail",
        msg: "workout not found",
      });
    }
    return res.status(200).json({
      status: "success",
      data: {
        workout,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      err: err.message,
    });
  }
};

// delete a workout by ID (admin access)

const deleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndDelete(req.params.id);
    if (!workout) {
      return res.status(404).json({
        status: "fail",
        msg: "workout not found",
      });
    }
    return res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      err: err.msg,
    });
  }
};

module.exports = {
  getWorkout,
  getWorkouts,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
