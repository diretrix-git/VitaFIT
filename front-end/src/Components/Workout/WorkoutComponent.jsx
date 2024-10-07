import React, { useEffect, useState } from "react";
import CardComponent from "../card/CardComponent";
// import ProductList from "../ProductCard/ProductList";
import axios from "axios";

const domain = "http://localhost:5000";

const WorkoutComponent = () => {
  const [workout, setworkout] = useState([]);
  const fetchworkout = async () => {
    try {
      const response = await axios.get(`${domain}/api/workout`);
      console.log("response", response);
      setworkout(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };
  useEffect(() => {
    fetchworkout();
  }, []);

  return (
    <>
      {workout.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <CardComponent datas={workout} />
      )}
    </>
  );
};

export default WorkoutComponent;
