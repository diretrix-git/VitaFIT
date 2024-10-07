import React, { useEffect, useState } from "react";
// import CardComponent from "../card/CardComponent";
import axios from "axios";
import RecipeCardComponent from "./RecipeCardComponent";

const domain = "http://localhost:5000";

const RecipeComponent = () => {
  const [recipes, setrecipes] = useState([]);
  console.log(recipes);
  const fetchRecipes = async () => {
    try {
      const response = await axios.get(`${domain}/api/recipes`);
      // console.log("response", response);

      setrecipes(response.data.data.recipes);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };
  useEffect(() => {
    fetchRecipes();
  }, []);
  // console.log("Recipes", recipes)
  return (
    <>
      {recipes.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <RecipeCardComponent recipedatas={recipes} />
      )}
    </>
  );
};

export default RecipeComponent;
