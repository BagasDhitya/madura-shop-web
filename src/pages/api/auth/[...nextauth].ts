import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "example@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {

                // data user statis
                const users = [
                    { id: "1", email: "admin@example.com", password: "admin123" },
                    { id: "2", email: "user@example.com", password: "user123" }
                ]

                // pengecekan apakah email dan password coccok
                const user = users.find((user) => user.email === credentials?.email && user.password && credentials.password)
                if (user) {
                    return {
                        id: user.id,
                        email: user.email
                    }
                }
                throw new Error("Invalid email or password")
            },
        })],
    pages: {
        signIn: "/login"
    },
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions)
