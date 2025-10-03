const mongoose = require('mongoose');
const ExpenseSchema = new mongoose.Schema({
  date: { type: Date, required:true },
  buyer: { type: String },
  amount: { type: Number, required:true }
});
module.exports = mongoose.model('Expense', ExpenseSchema);
