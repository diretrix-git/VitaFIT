const express = require("express");
const router = express.Router();
const {
  deleteRecipe,
  updateRecipe,
  getRecipes,
  getRecipe,
  createRecipe,
} = require("../controllers/recipeControllers");

const { authMiddleware } = require("../middleware/authMiddleware");
const { authorizeRole } = require("../middleware/authorizationMiddleware");
const {
  uploadRecipeImage,
  uploadRecipeVideo,
} = require("../middleware/uploadMiddleware");

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
 * @access private (user)
 * @type POST
 * @return response
 */
router.post(
  "/recipes",
  authMiddleware,
  authorizeRole("admin"),
  uploadRecipeImage.single("image"), // For image upload
  uploadRecipeVideo.single("video"), // For video upload
  createRecipe
);

/**
 * @description To update a recipe
 * @api /api/recipes/:id
 * @access private (admin)
 * @type PUT
 * @return response
 */
router.put(
  "/recipes/:id",
  authMiddleware,
  authorizeRole("admin"), // Only admins can update recipes
  uploadRecipeImage.single("image"), // For image upload
  uploadRecipeVideo.single("video"), // For video upload
  updateRecipe
);

/**
 * @description To delete a recipe
 * @api /api/recipes/:id
 * @access private (admin)
 * @type DELETE
 * @return response
 */
router.delete(
  "/recipes/:id",
  authMiddleware,
  authorizeRole("admin"), // Only admins can delete recipes
  deleteRecipe
);

module.exports = router;
