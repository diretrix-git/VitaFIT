const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;

const connectDB = require("./src/config/db");
connectDB();

app.use(express.json());

app.use("/uploads", express.static(__dirname + "/uploads"));

app.use("/api/profile", require("./src/routes/profileRoutes"));

const userRoutes = require("./src/routes/userRoutes")
app.use("/api", userRoutes)

const workoutRoutes = require("./src/routes/workoutRoutes");
app.use("/api", workoutRoutes);

const nutritionRoutes = require("./src/routes/nutritionRoutes")
app.use("/api", nutritionRoutes )


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
