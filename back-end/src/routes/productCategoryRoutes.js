const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware/authMiddleware");
const { authorizeRole } = require("../middleware/authorizationMiddleware");
const {
  createProductCategory,
  deleteProductCategory,
  updateProductCategory,
  getProductCategories,
  getProductCategoryById,
} = require("../controllers/productCategoryControllers");

// Route to create a new category
router.post(
  "/categories",
  authMiddleware,
  authorizeRole("admin"),
  createProductCategory
);

// Route to get all categories
router.get("/categories", getProductCategories);

// Route to get a single category by ID
router.get("/categories/:id", getProductCategoryById);

// Route to update a category by ID
router.put(
  "/categories/:id",
  authMiddleware,
  authorizeRole("admin"),
  updateProductCategory
);

// Route to delete a category by ID
router.delete(
  "/categories/:id",
  authMiddleware,
  authorizeRole("admin"),
  deleteProductCategory
);

module.exports = router;
