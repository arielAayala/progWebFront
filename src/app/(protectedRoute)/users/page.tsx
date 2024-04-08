"use client";
import TableUsers from "@/components/table/tableUsers";
import getAllUsers from "@/lib/getAllUser";
import { useEffect, useState } from "react";

const columns = ["userId", "userName", "userEmail"];

function UsersPage() {
	const [users, setUsers] = useState(null);

	useEffect(() => {
		const getUsers = async () => {
			setUsers(await getAllUsers());
		};
		getUsers();
	}, []);

	if (!users) {
		return <h1>Cargando...</h1>;
	}

	return (
		<main>
			<h1>Users Pages</h1>

			<TableUsers />
		</main>
	);
}

export default UsersPage;
