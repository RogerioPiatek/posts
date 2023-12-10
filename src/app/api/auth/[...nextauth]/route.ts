import { PrismaAdapter } from "@auth/prisma-adapter";
import PrismaClient from "@/lib/prisma";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const handler = NextAuth({
  adapter: PrismaAdapter(PrismaClient),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});

export { handler as GET, handler as POST };
