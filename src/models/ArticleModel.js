import { Schema } from 'mongoose';
import { dbblog } from '../lib/mongoose'

var produtSchema = new Schema({
  create_at: Date,
  update_at: Date,
  delete_at: Date,
  title: {
    type: String,
    required: true,
  },
  markdown: {
    type: String,
    required: true,
  },
  tags: [String],
}, { versionKey: false })

module.exports = dbblog.model('article', produtSchema, 'article'); 