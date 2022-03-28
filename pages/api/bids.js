import dbConnect from '../../lib/dbConnect'
import Bids from '../../models/Bids'
import Product from '../../models/Product'
var crypto = require('crypto');
var randomstring= require('randomstring');
export default async function handler (req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const user = await Bids.find({id:"1"})
        res.status(201).json({ success: true, data: user })
      } catch (error) {
        res.status(400).json({ success: false, error:error })
      }
      break
    case 'POST':
     
        req.body.b_id=randomstring.generate(7);
      
        console.log(req.body)
        const user = await Bids.create(req.body);
        res.status(201).json({ success: true, data: user, })
      
      break
  
  }
}