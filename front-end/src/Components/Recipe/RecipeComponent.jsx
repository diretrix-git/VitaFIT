import React, { useEffect, useState } from "react";
import axiosInstance from "../../config/axiosConfig";
import RecipeCard from "./RecipeCard";

const RecipeComponent = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRecipes = async () => {
    try {
      const response = await axiosInstance.get("/recipes");
      setRecipes(response.data.data.recipes);
    } catch (error) {
      console.error("Error fetching recipes", error);
      setError("Failed to load recipes.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return <RecipeCard recipeData={recipes} />;
};

export default RecipeComponent;
