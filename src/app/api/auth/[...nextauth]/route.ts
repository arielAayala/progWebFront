import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "email", type: "email", placeholder: "email" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				const res = await fetch(
					`${process.env.NEXT_PUBLIC_BACKEND_URL}/Auth/SignIn.php`,
					{
						method: "POST",
						body: JSON.stringify({
							emailUser: credentials?.email,
							passwordUser: credentials?.password,
						}),
						headers: { "Content-Type": "application/json" },
					}
				);
				const user = await res.json();

				console.log(user);

				if (user.error) {
					return null;
				}

				return user.data;
			},
		}),
	],
});

export { handler as GET, handler as POST };
