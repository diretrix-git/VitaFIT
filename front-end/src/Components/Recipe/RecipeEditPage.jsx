import React, { useState, useEffect } from "react";
import axiosInstance from "../../config/axiosConfig";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipeEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState("");
  const [mealPlans, setMealPlans] = useState([]);
  const [selectedMealPlan, setSelectedMealPlan] = useState("");
  const [servingSize, setServingSize] = useState("");

  useEffect(() => {
    const fetchMealPlans = async () => {
      try {
        const response = await axiosInstance.get("/mealplan");
        setMealPlans(response.data.data.mealPlans);
      } catch (error) {
        console.error("Error fetching meal plans:", error);
      }
    };
    fetchMealPlans();
  }, []);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axiosInstance.get(`/recipes/${id}`);
        const recipe = response.data.data.recipe;
        setTitle(recipe.title || "");
        setIngredients(recipe.ingredients || []);
        setInstructions(recipe.instructions || "");
        setSelectedMealPlan(recipe.mealplan?._id || recipe.mealplan || "");
        setServingSize(recipe.servingSize || "");
      } catch (error) {
        toast.error("Failed to fetch recipe details");
      }
    };
    fetchRecipeDetails();
  }, [id]);

  const handleIngredientChange = (index, field, value) => {
    setIngredients((prev) =>
      prev.map((ing, idx) => (idx === index ? { ...ing, [field]: value } : ing))
    );
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put(`/recipes/update/${id}`, {
        title,
        ingredients,
        instructions,
        mealplan: selectedMealPlan,
        servingSize,
      });
      toast.success("Recipe updated successfully");
      navigate(`/recipe/${id}`);
    } catch (error) {
      toast.error("Failed to update recipe");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <ToastContainer />
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Edit Recipe</h1>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="title" className="font-semibold mb-2">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-2 rounded w-full"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-2">Ingredients</label>
            {ingredients.length > 0 ? (
              ingredients.map((ingredient, index) => (
                <div key={index} className="space-y-2 mb-4">
                  <input
                    type="text"
                    value={ingredient.name}
                    onChange={(e) => handleIngredientChange(index, "name", e.target.value)}
                    placeholder="Ingredient Name"
                    className="border p-2 rounded w-full"
                    required
                  />
                  <input
                    type="text"
                    value={ingredient.quantity}
                    onChange={(e) => handleIngredientChange(index, "quantity", e.target.value)}
                    placeholder="Quantity"
                    className="border p-2 rounded w-full"
                    required
                  />
                  <input
                    type="text"
                    value={ingredient.unit}
                    onChange={(e) => handleIngredientChange(index, "unit", e.target.value)}
                    placeholder="Unit"
                    className="border p-2 rounded w-full"
                    required
                  />
                </div>
              ))
            ) : (
              <p>No ingredients listed</p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="instructions" className="font-semibold mb-2">Instructions</label>
            <textarea
              id="instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              className="border p-2 rounded w-full"
              rows="5"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="mealPlan" className="font-semibold mb-2">Meal Plan</label>
            <select
              id="mealPlan"
              value={selectedMealPlan}
              onChange={(e) => setSelectedMealPlan(e.target.value)}
              className="border p-2 rounded w-full"
            >
              <option value="">Select a meal plan</option>
              {mealPlans.map((plan) => (
                <option value={plan._id} key={plan._id}>{plan.name}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="servingSize" className="font-semibold mb-2">Serving Size</label>
            <input
              type="number"
              id="servingSize"
              value={servingSize}
              onChange={(e) => setServingSize(e.target.value)}
              className="border p-2 rounded w-full"
              min="1"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded transition-colors duration-200"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecipeEditPage;
