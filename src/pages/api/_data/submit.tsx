import { NextApiRequest, NextApiResponse } from "next";
import { connectDatabase } from "../_connectDatabase";
import jwt from "next-auth/jwt";
import { getSession } from "next-auth/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { date, price, description, category, typeSubmit } = await req.body
  //const token = await jwt.getToken({req, secret: process.env.JWT_SECRET, cookieName: 'next-auth.session-token'})
  const session = await getSession({req})


  const db = await connectDatabase(process.env.MONGODB_URI)
  const collection = db.collection("data")
  
  if (session) {
    if (!typeSubmit) {
      await collection.insertOne({
        income : {
          date: date,
          price: price,
          description: description,
          category: category,
        }
      })
    } else if (typeSubmit) {
      await collection.insertOne({
        expense : {
          date: date,
          price: price,
          description: description,
          category: category,
        }
      })
    }
  } else {
    res.status(401)
  }

  return res.end()
}