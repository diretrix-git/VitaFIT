import React, { useEffect, useState } from "react";
// import CardComponent from "../card/CardComponent";
import axiosInstance from "../../config/axiosConfig";

import RecipeCard from "./RecipeCard";
// import RecipeCardComponent from "./RecipeCardComponent";
// import { h1 } from "framer-motion/client";

// const domain = "http://localhost:5000";

const RecipeComponent = () => {
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);
  const fetchRecipes = async () => {
    try {
      const response = await axiosInstance.get(`/recipes`);
      console.log("response", response);

      setRecipes(response.data.data.recipes);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };
  useEffect(() => {
    fetchRecipes();
  }, []);
  // console.log("Recipes", recipes)
  // const userRole = "admin";
  return (
    <>
      {recipes.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <RecipeCard recipeData={recipes} />
      )}
    </>
  );
};

export default RecipeComponent;
