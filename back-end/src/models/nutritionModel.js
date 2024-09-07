const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema for Meal Plans
const mealPlanSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  meals: [
    {
      type: String,
      required: true,
    },
  ],
  duration: {
    type: Number,
    required: true,
  },
});

// Schema for Recipes
const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  mealplan: {
    type: String,
  },
  ingredients: [
    {
      type: String,
      required: true,
    },
  ],
  instructions: {
    type: String,
    required: true,
  },
  servingSize: {
    type: Number,
    required: true,
  },
});

// Schema for Supplements
const supplementSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  benefits: [
    {
      type: String,
      required: true,
    },
  ],
  dosage: {
    type: String,
    required: true,
  },
});

// Creating models
const MealPlan = mongoose.model("MealPlan", mealPlanSchema);
const Recipe = mongoose.model("Recipe", recipeSchema);
const Supplement = mongoose.model("Supplement", supplementSchema);

module.exports = {
  MealPlan,
  Recipe,
  Supplement,
};
