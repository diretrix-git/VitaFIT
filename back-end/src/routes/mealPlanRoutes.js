const express = require("express");
const {
  getMealPlans,
  getMealPlan,
  createMealPlan,
  updateMealPlan,
  deleteMealPlan,
} = require("../controllers/mealPlanControllers");
const router = express.Router();

// FOR MEAL PLANS

/**
 * @description To get all meal plans
 * @api /api/mealPlans
 * @access public
 * @type GET
 * @return response
 */
router.get("/mealPlans", getMealPlans);

/**
 * @description To get a meal plans
 * @api /api/mealPlans/:id
 * @access public
 * @type GET
 * @return response
 */
router.get("/mealPlans/:id", getMealPlan);

/**
 * @description To create a meal plans
 * @api /api/mealPlans
 * @access public
 * @type POST
 * @return response
 */
router.post("/mealPlans", createMealPlan);

/**
 * @description To update a meal plans
 * @api /api/mealPlans/:id
 * @access private
 * @type PUT
 * @return response
 */
router.put("/mealPlans/:id", updateMealPlan);

/**
 * @description To delete a meal plans
 * @api /api/mealPlans/:id
 * @access private
 * @type DELETE
 * @return response
 */
router.delete("/mealPlans/:id", deleteMealPlan);
module.exports = router;
