import mongoose from 'mongoose'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom'

const ProductSchema = new mongoose.Schema({
  id:String,
  p_id:String,
  quantity:String,
  type:String,
  price:String,
  pincode:String,
  details:String
})

module.exports = mongoose.models.Product || mongoose.model('Product', ProductSchema)