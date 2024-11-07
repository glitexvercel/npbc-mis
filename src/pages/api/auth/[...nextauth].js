import { ENDPOINT } from "@/services/AxiosServices";
import endpoints from "@/services/endpoints";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const axios = require("axios");

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        let data;
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const res = await axios.post(
          ENDPOINT + endpoints.login,
          {
            email: credentials.email,
            password: credentials.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (typeof res.data === "string") {
          const responseString = res.data;

          const responseObject = JSON.parse(responseString.split("}")[1] + "}");
          data = responseObject;
        } else {
          data = res.data;
        }

        if (data?.token) {
          const rawUser = await fetch(ENDPOINT + endpoints.me, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${data.token}`,
            },
          });

          const user = await rawUser.json();

          // If no error and we have user data, return it
          if (data?.token && user?.id) {
            // Remove semester from user object
            if ("semester" in user) {
              delete user.semester;
            }

            return {
              ...user,
              token: data.token,
              isFirst: user.first_user,
            };
          }
        }
        // Return null if user data could not be retrieved
        return res.data;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session }) {
      // adds token, role and user id to jwt token
      if (user) {
        return {
          ...token,
          ...user,
        };
      }
      return token;
    },
    async session({ session, token, user }) {
      // adds token, role and user id to session
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          token: token.token,
          role: token.role,
          branch: token.branch,
          image: token.profile_picture,
          phone: token.phone,
          reg_no: token.reg_no,
          year: token?.year,
          isFirst: token.isFirst,
        },
      };
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
