const express = require("express");
const {
  getWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout,
  createWorkout,
} = require("../controllers/workoutController");

const { authMiddleware } = require("../middleware/authMiddleware");
const { authorizeRole } = require("../middleware/authorizationMiddleware");
const { profileImage } = require("../middleware/uploadMiddleware"); // If you're uploading images with workouts

const router = express.Router();

/**
 * @description To get all workouts
 * @api /api/workouts
 * @access public
 * @type GET
 * @return response
 */
router.get("/workouts", getWorkouts);

/**
 * @description To get a workout by ID
 * @api /api/workouts/:id
 * @access public
 * @type GET
 * @return response
 */
router.get("/workouts/:id", getWorkout);

/**
 * @description To create a new workout
 * @api /api/workouts
 * @access private (admin)
 * @type POST
 * @return response
 */
router.post(
  "/workouts",
  authMiddleware,
  authorizeRole("admin"), // Only users can admin workouts
  profileImage.single("image"), // If you're uploading an image with the workout
  createWorkout
);

/**
 * @description To update a workout by ID
 * @api /api/workouts/:id
 * @access private (admin)
 * @type PUT
 * @return response
 */
router.put(
  "/workouts/:id",
  authMiddleware,
  authorizeRole("admin"), // Only admins can update workouts
  profileImage.single("image"), // If you're updating an image with the workout
  updateWorkout
);

/**
 * @description To delete a workout by ID
 * @api /api/workouts/:id
 * @access private (admin)
 * @type DELETE
 * @return response
 */
router.delete(
  "/workouts/:id",
  authMiddleware,
  authorizeRole("admin"), // Only admins can delete workouts
  deleteWorkout
);

module.exports = router;
