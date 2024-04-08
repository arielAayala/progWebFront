"use client";

import React, { useState, useEffect } from "react";
import ButtonAddUsers from "./buttonAddUser";
import RowUsers from "./rowUsers";
import getAllUsers from "@/lib/getAllUser";

function TableUsers() {
	const [users, setUsers] = useState<any>(null);

	const fetchAllUsers = async () => {
		const data = await getAllUsers();
		setUsers(data);
	};

	useEffect(() => {
		fetchAllUsers();
	}, []);

	if (!users) {
		return <h1>cargando...</h1>;
	}

	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			<ButtonAddUsers fetchAllUsers={fetchAllUsers} />
			<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
				<caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
					Users
					<p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
						Listado donde se visualiza las Organizaciones adheridas al sistema.
					</p>
				</caption>
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th
							scope="col"
							className="px-6 py-3">
							userId
						</th>
						<th
							scope="col"
							className="px-6 py-3">
							userName
						</th>
						<th
							scope="col"
							className="px-6 py-3">
							userEmail
						</th>
						<th
							scope="col"
							className="px-6 py-3">
							<span className="sr-only">Actualizar</span>
						</th>
					</tr>
				</thead>
				<tbody>
					{users.map((i: any) => (
						<RowUsers
							key={i.userId}
							userId={i.userId}
							userName={i.userName}
							userEmail={i.userEmail}
							fetchAllUsers={fetchAllUsers}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default TableUsers;
