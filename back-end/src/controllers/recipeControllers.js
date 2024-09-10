const { Recipe } = require("../models/recipeModel");

// Get recipe by ID with population
const getRecipe = async (req, res) => {
  try {
    // Find the recipe and populate the mealplan field
    const recipe = await Recipe.findById(req.params.id).populate("mealplan");

    // Check if the recipe exists
    if (!recipe) {
      return res.status(404).json({ status: "fail", msg: "Recipe not found" });
    }

    // Check user role to determine if video should be included
    const isSubscribed = req.user && req.user.role === "subscribed";

    // Prepare the recipe data to be sent in response
    const recipeData = {
      title: recipe.title,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      servingSize: recipe.servingSize,
      image: recipe.image,
      // Only include video if the user is subscribed
      video: isSubscribed ? recipe.video : undefined,
      mealplan: recipe.mealplan,
    };

    return res
      .status(200)
      .json({ status: "success", data: { recipe: recipeData } });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err.message });
  }
};

// Get all recipes
const getRecipes = async (req, res) => {
  try {
    // Fetch the user's role from the request object (assuming it's added by your authentication middleware)
    const userRole = req.user.role; // Example: 'normal' or 'subscribed'

    // Fetch recipes and populate mealplan
    const recipes = await Recipe.find().populate("mealplan").exec();

    // Check user role and conditionally filter recipe data
    const modifiedRecipes = recipes.map((recipe) => {
      const recipeData = {
        _id: recipe._id,
        title: recipe.title,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
        servingSize: recipe.servingSize,
        mealplan: recipe.mealplan, // Include mealplan details if needed
        image: recipe.image, // Always include image
        video: userRole === "subscribed" || "admin" ? recipe.video : undefined, // Include video only for subscribed users
      };
      return recipeData;
    });

    return res
      .status(200)
      .json({ status: "success", data: { recipes: modifiedRecipes } });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err.message });
  }
};

// Create recipe
const createRecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions, servingSize, mealplan } =
      req.body;
    const newRecipe = new Recipe({
      title,
      ingredients,
      instructions,
      servingSize,
      mealplan,
      image: req.files && req.files.image ? req.files.image[0].path : undefined,
      video: req.files && req.files.video ? req.files.video[0].path : undefined,
    });

    await newRecipe.save();
    res.status(201).json({
      status: "success",
      data: {
        recipe: newRecipe,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// Update recipe
const updateRecipe = async (req, res) => {
  try {
    // Create an object to hold the fields to update
    const updateData = { ...req.body };

    // Check if there's an image file in the request and add it to updateData
    if (req.file) {
      updateData.image = `uploads/recipeImg/${req.file.filename}`;
    }

    // Update the recipe in the database
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    }).populate("mealplan");

    if (!recipe) {
      return res
        .status(404)
        .json({ status: "fail", message: "Recipe not found" });
    }

    // Send the updated recipe back in the response
    res.status(200).json({ status: "success", data: { recipe } });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err.message });
  }
};

// Delete recipe
const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) {
      return res
        .status(404)
        .json({ status: "fail", message: "Recipe not found" });
    }
    res.status(204).json({ status: "success", data: null });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err.message });
  }
};

module.exports = {
  getRecipe,
  getRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
