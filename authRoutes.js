const router = require("express").Router();
const Member = require("../models/Member");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async(req,res)=>{
  const { name,email,password,role } = req.body;
  const exist = await Member.findOne({email});
  if(exist) return res.status(400).json({msg:"Email exists"});
  const hash = await bcrypt.hash(password,10);
  const member = await Member.create({name,email,password:hash,role});
  res.json({id:member._id,name:member.name,email:member.email});
});

router.post("/login", async(req,res)=>{
  const {email,password} = req.body;
  const user = await Member.findOne({email});
  if(!user) return res.status(400).json({msg:"Invalid credentials"});
  const ok = await bcrypt.compare(password,user.password);
  if(!ok) return res.status(400).json({msg:"Invalid credentials"});
  const token = jwt.sign({id:user._id,role:user.role,name:user.name},"your_jwt_secret",{expiresIn:"7d"});
  res.json({token,user:{id:user._id,name:user.name,role:user.role}});
});

module.exports = router;
