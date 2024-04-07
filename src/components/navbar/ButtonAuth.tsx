"use client";
import { useSession, signIn, signOut } from "next-auth/react";
export default function ButtonAuth() {
	const data = useSession();

	console.log(data);

	if (data) {
		return (
			<>
				Signed in as <br />
				<button onClick={() => signOut()}>Sign out</button>
			</>
		);
	}
	return (
		<>
			Not signed in <br />
			<button onClick={() => signIn()}>Sign in</button>
		</>
	);
}
