import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact:String,
  id:String
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)