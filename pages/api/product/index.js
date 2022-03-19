import { people } from '../../../data'

export default function handler(req, res) {
    if(req.method=="GET")
        res.status(200).json(people)
    else{
        res.status(200).send("people")
    }
}
