// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var crypto = require('crypto');
export default function handler(req, res) {
  //blockchain is not integrated yet otherwise nodejs will create the hash code for the product.
  var hash = crypto.createHash('md5').update(JSON.stringify(req.body)).digest('hex');
  res.status(302).json({"text":hash})
}

