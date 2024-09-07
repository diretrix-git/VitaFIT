const express = require('express');
const { getWorkout, getWorkouts, updateWorkout, deleteWorkout, createWorkout } = require('../controllers/workoutController');

const router = express.Router();

/**
 * @description To get all workouts
 * @api /api/workouts
 * @access public
 * @type GET
 * @return response
 */
router.get('/workouts', getWorkouts);

/**
 * @description To get a workout by ID
 * @api /api/workouts/:id
 * @access public
 * @type GET
 * @return response
 */
router.get('/workouts/:id', getWorkout);

/**
 * @description To create a new workout
 * @api /api/workouts
 * @access public
 * @type POST
 * @return response
 */
router.post('/workouts', createWorkout);

/**
 * @description To update a workout by ID
 * @api /api/workouts/:id
 * @access private
 * @type PUT
 * @return response
 */
router.put('/workouts/:id', updateWorkout);

/**
 * @description To delete a workout by ID
 * @api /api/workouts/:id
 * @access private
 * @type DELETE
 * @return response
 */
router.delete('/workouts/:id', deleteWorkout);

module.exports = router;
