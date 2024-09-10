import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import db from "./db";
import { compare } from "bcrypt"; 

const authOptions = {
    adapter: PrismaAdapter(db);
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    }
}