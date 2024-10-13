import React from "react";
import "./App.css";
import NavBarComponent from "./Components/NavBar/NavBarComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JourneyComponent from "./Components/Journey/JourneyComponent";

import SignupComponent from "./Components/SignUp/SignUpComponent";
import TestComponenet from "./Components/test/testComponenet";
import Test from "./Components/test3/test";
import ZzzComponent from "./Components/zzz/ZzzComponent";
import LoginComponent from "./Components/loginComponent/loginComponent";
import ProductComponent from "./Components/Product/ProductComponent";
import RecipeComponent from "./Components/Recipe/RecipeComponent";
import MealPlanComponent from "./Components/MealPlan/MealplanComponent";
import WorkoutComponent from "./Components/Workout/WorkoutComponent";
import AddProductComponent from "./Components/AddProduct/addProduct";
import CategoryComponent from "./Components/AddCategory/AddCategoryComponent";
import ContactForm from "./Components/ContactUs/ContactusComponent";
import RecipeCardComponent from "./Components/Recipe/RecipeCardComponent";
import AddWorkoutTypeComponent from "./Components/Workout/AddWorkoutTypeComponent"
import AddWorkout from "./Components/Workout/AddWorkoutComponent";
function App() {
  return (
    <>
      <Router>
        <NavBarComponent />

        <Routes>
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/" element={<JourneyComponent />} />
          <Route path="/signup" element={<SignupComponent />} />
          <Route path="/product" element={<ProductComponent />} />
          <Route path="/recipe" element={<RecipeComponent />} />
          <Route path="/mealplan" element={<MealPlanComponent />} />
          <Route path="/workout" element={<WorkoutComponent />} />
          <Route path="/addproduct" element={<AddProductComponent />} />
          <Route path="/addcategory" element={<CategoryComponent />} />
          <Route path="/contactus" element={<ContactForm />} />
          <Route path="/test" element={<TestComponenet />} />
          <Route path="/test2" element={<ZzzComponent />} />
          <Route path="/test3" element={<Test />} />
          <Route path="/addrecipe" element={<RecipeCardComponent />} />
          <Route path="/addworkout-type" element={<AddWorkoutTypeComponent />} />
          <Route path="/addworkout" element={<AddWorkout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
