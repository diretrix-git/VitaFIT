import React, { useEffect, useState } from "react";
import CardComponent from "../card/CardComponent";
import axiosInstance from "../../config/axiosConfig";

const MealPlanComponent = () => {
  const [mealplan, setMealplan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMealplan = async () => {
    try {
      const response = await axiosInstance.get("/mealplan");
      setMealplan(response.data.data.mealPlans);
    } catch (error) {
      console.error("Error fetching meal plans", error);
      setError("Failed to load meal plans.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMealplan();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return <CardComponent datas={mealplan} />;
};

export default MealPlanComponent;
