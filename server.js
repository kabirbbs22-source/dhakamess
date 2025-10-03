const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const mealRoutes = require("./routes/mealRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const depositRoutes = require("./routes/depositRoutes");

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/meals", mealRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/deposits", depositRoutes);

app.get("/", (req,res)=>res.send("Mess API Running..."));

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));
