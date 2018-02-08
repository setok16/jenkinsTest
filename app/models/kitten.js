let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let KittenSchema = new Schema({
  name: { type: String, required: true},
  bornAt: { type: Date, default: Date.now }
});

KittenSchema.pre('save', next => {
  now = new Date();
  if (!this.bornAt) {
    this.bornAt = now;
  } 
  next();
});

module.exports = mongoose.model('kitten', KittenSchema);
