require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workoutRoutes");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const PORT = process.env.PORT || 4000;

// middleware
app.use(cors(corsOptions));
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// connect to db

mongoose.connect(process.env.DATABASE_URI);

const conSuccess = mongoose.connection;
conSuccess.once("open", (_) => {
  console.log("Database connected:", process.env.DATABASE_URI);
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
