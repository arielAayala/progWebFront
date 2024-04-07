"use client";

import { useAuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";

interface Props {
	children: React.ReactNode;
}

function ProtectedRouteLayout({ children }: Props) {
	const { user } = useAuthContext();
	const router = useRouter();

	if (
		!user ||
		user.userRoles?.some((i: any) => i.nameRole === "administrador")
	) {
		router.push("/auth");
	}

	return <>{children}</>;
}

export default ProtectedRouteLayout;
