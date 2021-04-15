import { NextApiRequest, NextApiResponse } from 'next'
import { connectDatabase } from '../_connectDatabase'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, image } = await req.body

  const db = await connectDatabase(process.env.MONGODB_URI)
  const collection = db.collection('data')
  const document = await collection.findOne({name: name})

  if(!document) {
    await collection.insertOne({
      name: name,
      email: email,
      image: image
    })
    res.status(201)
  } else {
    res.status(204)
  }
  return res.end()
}