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

const router = express.Router();

/**
 * @description To get all workouts
 * @api /api/workout
 * @access public
 * @type GET
 * @return response
 */
router.get("/", getWorkouts);

/**
 * @description To get a workout by ID
 * @api /api/workout/:id
 * @access public
 * @type GET
 * @return response
 */
router.get("/:id", getWorkout);

/**
 * @description To create a new workout
 * @api /api/workout
 * @access private (admin)
 * @type POST
 * @return response
 */
router.post(
  "/create",
  authMiddleware,
  authorizeRole("admin"), // Only users can admin workouts
  createWorkout
);

/**
 * @description To update a workout by ID
 * @api /api/workout/:id
 * @access private (admin)
 * @type PUT
 * @return response
 */
router.put(
  "/:id",
  authMiddleware,
  authorizeRole("admin"), // Only admins can update workouts
  updateWorkout
);

/**
 * @description To delete a workout by ID
 * @api /api/workout/:id
 * @access private (admin)
 * @type DELETE
 * @return response
 */
router.delete(
  "/:id",
  authMiddleware,
  authorizeRole("admin"), // Only admins can delete workouts
  deleteWorkout
);

module.exports = router;
