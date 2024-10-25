import React from "react";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import { NavbarComponent } from "./Components/NavBar/NavBarComponent";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
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
import RecipeTest from "./Components/Recipe/ReciptTest";
import AddWorkoutTypeComponent from "./Components/Workout/AddWorkoutTypeComponent";
import AddWorkout from "./Components/Workout/AddWorkoutComponent";
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./Components/footer/Footer";
import PricingSection from "./Components/Pricing/Pricing";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
        {/* <Header /> */}

        {/* Use `useLocation` inside Router */}
        {/** Pass `location` to `Routes` so that `AnimatePresence` detects changes */}
        <Content />
      </Router>
    </>
  );
}

function Content() {
  const location = useLocation(); // useLocation inside Router context

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<LoginComponent />} />
        <Route index element={<Home />} />
        {/* <Route path="/" element={<JourneyComponent />} /> */}
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
        <Route path="*" element={<NotFound />} />
        <Route path="/recipeTest" element={<RecipeTest />} />
        {/* <Route path="/pricing" element={<PricingSection />} /> */}
      </Routes>
    </AnimatePresence>
  );
}

export default App;
