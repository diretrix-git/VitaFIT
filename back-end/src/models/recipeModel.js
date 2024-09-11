const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema for Recipes
const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  mealplan: {
    type: Schema.Types.ObjectId,
    ref: "MealPlan", // Reference to the MealPlan model
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
  recipeImage: {
    type: String,
    required: false,
  },
  video: {
    type: String,
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = { Recipe };
