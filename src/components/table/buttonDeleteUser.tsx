import React from "react";

function ButtonDeleteUser(props: any) {
	const { fetchAllUsers, userId } = props;

	const submitUser = (e: any) => {
		e.preventDefault();
		fetch(
			`${process.env.NEXT_PUBLIC_BACKEND_URL}/Users/index.php?userId=${userId}`,
			{
				credentials: "include",
				method: "DELETE",
			}
		)
			.then(async (res) => {
				if (!res.ok) {
					throw new Error("Ocurrio un errror al actualizar el User", {
						cause: await res.json(),
					});
				}
				return res.json();
			})
			.then((res) => {
				console.log(res);
				fetchAllUsers();
			})
			.catch((error) => {
				const errorMessage = error.cause?.error || error.message;
				console.log(errorMessage);
			});
	};

	return (
		<button
			className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			type="button"
			onClick={submitUser}>
			<svg
				className="w-6 h-6 text-white dark:text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 20 18">
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M13 8h6m-9-3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM5 11h3a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"
				/>
			</svg>
		</button>
	);
}

export default ButtonDeleteUser;
