const router = require("express").Router();
const Expense = require("../models/Expense");
router.post("/", async(req,res)=>{
  const {date,buyer,amount} = req.body;
  const e = await Expense.create({date,buyer,amount});
  res.json(e);
});
router.get("/", async(req,res)=>{
  const rows = await Expense.find();
  res.json(rows);
});
module.exports = router;
