const { MealPlan, Recipe, Supplement } = require("../models/nutritionModel");

//meal plan controller

//get meal plan by id
const getMealPlan = async (req, res) => {
  try {
    const mealPlan = await MealPlan.findById(req.params.id);
    if (!mealPlan) {
      return res
        .status(400)
        .json({ status: "fail", msg: "Meal plan couldn't be found" });
    }
    return res.status(200).json({ status: "success", data: { mealPlan } });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

//get all meal plan
const getMealPlans = async (req, res) => {
  try {
    const mealPlans = await MealPlan.find();
    return res.status(200).json({
      status: "success",
      data: {
        mealPlans,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

//create meal plan
const createMealPlan = async (req, res) => {
  try {
    const newMealPlan = await MealPlan.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        mealPlan: newMealPlan,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

//update mean plan
const updateMealPlan = async (req, res) => {
  try {
    const mealPlan = await MealPlan.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!mealPlan) {
      return res.status(404).json({
        status: "fail",
        message: "Meal plan not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        mealPlan,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

//delete a meal plan
const deleteMealPlan = async (req, res) => {
  try {
    const mealPlan = await MealPlan.findByIdAndDelete(req.params.id);
    if (!mealPlan) {
      return res.status(404).json({
        status: "fail",
        message: "Meal plan not found",
      });
    }
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

//Recipe plan controller

//get recipe by id
const getRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res
        .status(400)
        .json({ status: "fail", msg: "Recipe couldn't be found" });
    }
    return res.status(200).json({ status: "success", data: { recipe } });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

//get all recipe
const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    return res.status(200).json({
      status: "success",
      data: {
        recipes,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

//create recipe
const createRecipe = async (req, res) => {
  try {
    const newRecipe = await Recipe.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        mealPlan: newRecipe,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

//update recipe
const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!recipe) {
      return res.status(404).json({
        status: "fail",
        message: "Recipe not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        recipe,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

//delete a recipe
const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) {
      return res.status(404).json({
        status: "fail",
        message: "Recipe not found",
      });
    }
    res.status(204).json({
      status: "success",
      messgae: "Recipe deleted successfully",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

module.exports = {
  getMealPlan,
  getMealPlans,
  createMealPlan,
  updateMealPlan,
  deleteMealPlan,

  getRecipe,
  getRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
