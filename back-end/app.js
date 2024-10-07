const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;

const connectDB = require("./src/config/db");
const cors = require("cors");
app.use(express.json());

app.use(cors());
connectDB();

app.use("/uploads", express.static(__dirname + "/uploads"));

app.use("/api/profile", require("./src/routes/profileRoutes"));

const userRoutes = require("./src/routes/userRoutes");
app.use("/api/user", userRoutes);

const workoutRoutes = require("./src/routes/workoutRoutes");
app.use("/api/workout", workoutRoutes);

const mealPlanRoutes = require("./src/routes/mealPlanRoutes");
app.use("/api/mealplan", mealPlanRoutes);

const recipeRoutes = require("./src/routes/recipeRoutes");
app.use("/api/recipes", recipeRoutes);

const productRoutes = require("./src/routes/productRoutes");
app.use("/api/products", productRoutes);

const orderRoutes = require("./src/routes/orderRoutes.js");
app.use("/api", orderRoutes);

const productCategoryRoutes = require("./src/routes/productCategoryRoutes.js");
app.use("/api/category", productCategoryRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
