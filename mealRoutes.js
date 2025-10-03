const router = require("express").Router();
const Meal = require("../models/Meal");
router.post("/", async(req,res)=>{
  const {memberId,date,meals} = req.body;
  const m = await Meal.create({memberId,date,meals});
  res.json(m);
});
router.get("/", async(req,res)=>{
  const meals = await Meal.find().populate("memberId","name");
  res.json(meals);
});
module.exports = router;
