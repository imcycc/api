import { Schema } from 'mongoose';
import { dbgame } from '../lib/mongoose';

var produtSchema = new Schema({
  name: String,
  use_time: { type: Number, min: 1, max: 999999 },
}, { versionKey: false })

module.exports = dbgame.model('tadpole_ranking', produtSchema, 'tadpole_ranking'); 