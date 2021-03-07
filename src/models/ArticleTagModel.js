import { Schema } from 'mongoose';
import { dbblog } from '../lib/mongoose'

var produtSchema = new Schema({
  create_at: Number,
  update_at: Number,
  delete_at: Number,
  name: {
    type: String,
    required: true,
  },
}, { versionKey: false })

module.exports = dbblog.model('article_tag', produtSchema, 'article_tag'); 