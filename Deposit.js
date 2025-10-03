const mongoose = require('mongoose');
const DepositSchema = new mongoose.Schema({
  memberId: { type: mongoose.Schema.Types.ObjectId, ref:'Member', required:true },
  date: { type: Date, required:true },
  amount: { type: Number, required:true }
});
module.exports = mongoose.model('Deposit', DepositSchema);
