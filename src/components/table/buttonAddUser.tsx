"use client";

import React, { useEffect, useState } from "react";

function ButtonAddUsers(props: any) {
	const { fetchAllUsers } = props;

	const [hide, setHide] = useState(true);

	const [inputs, setInputs] = useState({
		userName: null,
		userEmail: null,
	});

	const handleOnChange = (e: any) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};

	const submitUser = (e: any) => {
		e.preventDefault();
		fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/Users/index.php`, {
			body: JSON.stringify(inputs),
			credentials: "include",
			method: "POST",
		})
			.then(async (res) => {
				if (!res.ok) {
					throw new Error("Ocurrio un errror al crear el Organizacion", {
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
		<>
			<button
				className="block  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				type="button"
				onClick={() => setHide(!hide)}>
				<p className="text-center mt-2"> Agregar</p>
			</button>
			{hide ? null : (
				<div className="fixed top-0 left-0 right-0 z-50 bg-gray-700 bg-opacity-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full">
					<div className="relative w-full max-w-md max-h-full m-auto">
						<div className="relative bg-white rounded-lg shadow dark:bg-gray-700 ">
							<button
								type="button"
								className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
								onClick={() => setHide(true)}>
								<svg
									className="w-3 h-3"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 14 14">
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
									/>
								</svg>
								<span className="sr-only">Close modal</span>
							</button>
							<div className="px-6 py-6 lg:px-8">
								<h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
									Registrar Usuarios
								</h3>

								<form
									onSubmit={submitUser}
									id="formUser">
									<div className="relative z-0 w-full mb-6 group">
										<input
											name="userName"
											id="userName"
											autoComplete="off"
											className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
											placeholder=" "
											onChange={handleOnChange}
											required
										/>
										<label
											htmlFor="userName"
											className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
											userName
										</label>
									</div>
									<div className="relative z-0 w-full mb-6 group">
										<input
											name="userEmail"
											id="userEmail"
											autoComplete="off"
											className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
											placeholder=" "
											onChange={handleOnChange}
										/>
										<label
											htmlFor="userEmail"
											className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
											userEmail
										</label>
									</div>
									<div className="relative z-0 w-full mb-6 group">
										<input
											name="userPassword"
											id="userPassword"
											autoComplete="off"
											className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
											placeholder=" "
											onChange={handleOnChange}
										/>
										<label
											htmlFor="userPassword"
											className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
											userPassword
										</label>
									</div>

									<button
										type="submit"
										className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
										Agregar
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default ButtonAddUsers;
