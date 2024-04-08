export default function getAllUsers() {
	const allUsers = fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/index.php`,
		{
			method: "GET",
			credentials: "include",
		}
	)
		.then(async (res) => {
			if (!res.ok) {
				throw new Error("ocurrio un error", {
					cause: await res.json(),
				});
			}
			return res.json();
		})
		.then((res) => {
			return res.data;
		})
		.catch((error) => {
			const errorMessage = error.cause?.error || "Error en el servidor";
			console.error(errorMessage);
		});

	return allUsers;
}
