import dbConnect from '../../lib/dbConnect'
import Product from '../../models/Product'
var crypto = require('crypto');
export default async function handler (req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const user = await Product.find()
        res.status(201).json({ success: true, data: user })
      } catch (error) {

        res.status(400).json({ success: false, error:error })
      }
      break
    case 'POST':
      try {
        const user = await Product.create(req.body)
        var hash = crypto.createHash('md5').update(JSON.stringify(req.body)).digest('users');
        res.status(201).json({ success: true, data: user, hash:hash})
      } catch (error) {
        res.status(400).json({ success: false, error:error, hash:"eror" })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}