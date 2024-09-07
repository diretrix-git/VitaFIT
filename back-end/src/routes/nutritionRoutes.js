const express = require("express");
const {
  deleteRecipe,
  updateRecipe,
  getRecipes,
  getRecipe,
  createRecipe,
} = require("../controllers/nutritionController");
const {
  getMealPlans,
  getMealPlan,
  createMealPlan,
  updateMealPlan,
  deleteMealPlan,
} = require("../controllers/nutritionController");
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

// FOR RECIPES

/**
 * @description To get all recipes
 * @api /api/recipes
 * @access public
 * @type GET
 * @return response
 */
router.get("/recipes", getRecipes);

/**
 * @description To get a recipe
 * @api /api/recipes/:id
 * @access public
 * @type GET
 * @return response
 */
router.get("/recipes/:id", getRecipe);

/**
 * @description To create a recipe
 * @api /api/recipes
 * @access public
 * @type POST
 * @return response
 */
router.post("/recipes", createRecipe);

/**
 * @description To update a recipe
 * @api /api/recipes/:id
 * @access private
 * @type PUT
 * @return response
 */
router.put("/recipes/:id", updateRecipe);

/**
 * @description To delete a recipe
 * @api /api/recipes/:id
 * @access private
 * @type DELETE
 * @return response
 */
router.delete("/recipes/:id", deleteRecipe);

module.exports = router;
