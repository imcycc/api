import { Schema } from 'mongoose';
import { dbblog } from '../lib/mongoose'

var produtSchema = new Schema({
  create_at: Number,
  update_at: Number,
  delete_at: Number,
  title: {
    type: String,
    required: true,
  },
  markdown: {
    type: String,
    required: true,
  },
  tag_ids: [String],
}, { versionKey: false })

module.exports = dbblog.model('article', produtSchema, 'article'); 