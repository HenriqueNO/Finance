import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import Providers from "next-auth/providers";

const options : NextAuthOptions = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  ],
  session: {
    jwt: false
  }
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options)