"use client";

import { useAuthContext } from "@/context/authContext";
import Link from "next/link";

function ButtonAuth() {
	const { user } = useAuthContext();

	console.log(user);

	if (!user) {
		return <Link href="/auth">Iniciar Sesión</Link>;
	}

	return (
		<div>
			<h3>{user.userName}</h3>
		</div>
	);
}

export default ButtonAuth;
