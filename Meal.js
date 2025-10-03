const mongoose = require('mongoose');
const MealSchema = new mongoose.Schema({
  memberId: { type: mongoose.Schema.Types.ObjectId, ref:'Member', required:true },
  date: { type: Date, required:true },
  meals: { type: Number, default:0 }
});
module.exports = mongoose.model('Meal', MealSchema);
