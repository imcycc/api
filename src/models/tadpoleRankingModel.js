var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var produtSchema = new Schema({
  name: String,
  use_time: { type: Number, min: 1, max: 999999 },
}, { versionKey: false })

module.exports = mongoose.model('tadpole_ranking', produtSchema, 'tadpole_ranking'); 