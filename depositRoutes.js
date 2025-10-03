const router = require("express").Router();
const Deposit = require("../models/Deposit");
router.post("/", async(req,res)=>{
  const {memberId,date,amount} = req.body;
  const d = await Deposit.create({memberId,date,amount});
  res.json(d);
});
router.get("/", async(req,res)=>{
  const deposits = await Deposit.find().populate("memberId","name");
  res.json(deposits);
});
module.exports = router;
