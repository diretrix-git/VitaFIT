import React, { useEffect, useState } from "react";
import axiosInstance from "../../config/axiosConfig";
import WorkoutCardComponent from "./WorkoutCardComponent";
import transition from "../../transition";

const WorkoutComponent = () => {
  const [workouts, setWorkout] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWorkout = async () => {
    try {
      const response = await axiosInstance.get("/workout");
      setWorkout(response.data.data);
    } catch (error) {
      console.error("Error fetching workouts", error);
      setError("Failed to load workouts.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWorkout();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return <WorkoutCardComponent workoutData={workouts} />;
};

export default transition(WorkoutComponent);
