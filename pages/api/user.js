import dbConnect from '../../lib/dbConnect'
import User from '../../models/User'

export default async function handler (req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        let body={
          name:"Anonymous",
          email:"abc@xyz.com",
          id:"1",
          contact:"8956788956"
        }
        const user = await User.create(body)
        res.status(201).json({ success: true, data: user })
      } catch (error) {

        res.status(400).json({ success: false, error:error })
      }
      break
    case 'POST':
      try {
        const users = await User.find({email:req.body.email})
        res.status(200).json({ success: true, data: users })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}