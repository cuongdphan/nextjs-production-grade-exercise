import NextAuth from "next-auth";
import { NextApiRequest, NextApiResponse } from "next-auth/internals/utils";
import Providers from "next-auth/providers";

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, {
    session: {
      jwt: true,
    },
    jwt: {
      secret: process.env.JWT_SECRET,
    },
    providers: [
      Providers.GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
    ],
    database: process.env.DATABASE_URL,
    pages: {
      signIn: "/signin",
    },
  });
